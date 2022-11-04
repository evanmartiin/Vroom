import trackConfig from 'utils/trackConfig.js';

/**
 *
 * @param {*} pane
 * @param {import('Webgl/objects/Path.js').default} instance
 */

export default function (pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	let options = {};
	trackConfig.splines.forEach((el) => (options[el.name] = el.name));

	folder
		.addInput(instance, 'splineName', {
			options,
		})
		.on('change', () => instance._createPaths());

	return folder;
}
