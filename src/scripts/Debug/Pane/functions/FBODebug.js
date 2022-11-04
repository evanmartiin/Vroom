export default function (pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: false });

	return folder;
}
