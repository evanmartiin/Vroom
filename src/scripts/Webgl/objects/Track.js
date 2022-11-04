import app from 'scripts/App.js';
import { Group } from 'three';
import stateMixin from 'utils/stateMixin.js';
import trackConfig from 'utils/trackConfig.js';
import Path from './Path.js';

export default class Track extends stateMixin(Group) {
	constructor(paths = 3) {
		super();

		this.splineName = trackConfig.splines.find((el) => el.default).name;
		this.paths = paths;

		this._createPaths();
	}

	_createPaths() {
		if (this.children.length > 0) {
			this.clear();
		}

		const spline = trackConfig.splines.find((el) => el.name === this.splineName);

		for (let i = 0; i < this.paths; i++) {
			this.add(new Path(1 + i * 0.02, spline));
		}
	}

	onAttach() {
		app.debug.pane.add(this, 'Track', 0);
	}

	onTick() {}

	onRender() {}
}
