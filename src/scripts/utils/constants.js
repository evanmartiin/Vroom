import classes from 'styles/modules/colors.module.scss?inline';
let i = 0;

const EVENTS = {
	LOADER_PROGRESS: i++,

	ATTACH: i++,
	RESIZE: i++,

	TICK: i++,
	RENDER: i++,

	MOUSE_MOVE: i++,
	POINTER_UP: i++,
	POINTER_DOWN: i++,
};

const EVENTS_MAP = Object.fromEntries(
	Object.entries(EVENTS).map(([key, value]) => [
		value,
		`on${key
			.toLowerCase()
			.split('_')
			.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
			.join('')}`,
	]),
);

const STORE_KEYS = {};

const COLORS = Object.fromEntries(
	classes
		.replace('{', '')
		.replace('}', '')
		.replace('\n', '')
		.split(';')
		.map((entry) => entry.split(':').map((inner) => inner.trim().replace('-', '_').toUpperCase())),
);

export { EVENTS, COLORS, EVENTS_MAP, STORE_KEYS };
