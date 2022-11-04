uniform float uScale;

varying vec2 vUv;

void main() {
    vec3 pos = position;
    vec3 biTangent = cross(normal, tangent.xyz);

    pos += -biTangent * (uScale - 1.);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);

    vUv = uv;
}