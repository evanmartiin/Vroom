import { CatmullRomCurve3, DoubleSide, Group, Mesh, ShaderMaterial, TubeGeometry } from 'three';
import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';
import { VertexTangentsHelper } from 'three/addons/helpers/VertexTangentsHelper.js';
import stateMixin from 'utils/stateMixin.js';
import vs from '../Shaders/Path/vert.glsl';
import fs from '../Shaders/Path/frag.glsl';

export default class Path extends stateMixin(Group) {
	constructor(scale = 1, spline) {
		super();

		this.geometry = new TubeGeometry(new CatmullRomCurve3(spline.points, true, 'catmullrom', 0.5), 50, 0.01, 1, true);
		this.geometry.computeTangents();
		this.material = new ShaderMaterial({
			vertexShader: vs,
			fragmentShader: fs,
			defines: {
				USE_TANGENT: '',
			},
			side: DoubleSide,
			uniforms: {
				uScale: { value: scale },
			},
		});
		this.mesh = new Mesh(this.geometry, this.material);
		// this.mesh.scale.set(scale, scale, scale);

		const normals = new VertexNormalsHelper(this.mesh, 0.1, 0xff0000);
		const tangents = new VertexTangentsHelper(this.mesh, 0.1, 0x00ff00);

		this.add(this.mesh, normals, tangents);
	}

	onAttach() {}

	onTick() {}

	onRender() {}
}
