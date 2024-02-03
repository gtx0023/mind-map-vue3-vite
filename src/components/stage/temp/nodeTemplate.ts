import * as go from 'gojs';

const $ = go.GraphObject.make;
const nodeTemplate = () => {
	return $(go.Node, "Auto",
		{minSize: new go.Size(60, 20), resizable: true},
		new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
		new go.Binding("position", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
		// temporarily put selected nodes in Foreground layer
		new go.Binding("layerName", "isSelected", s => s ? "Foreground" : "").ofObject(),
		$(go.Shape, "Rectangle",
			new go.Binding("fill", "color")),
		$(go.TextBlock,
			{margin: 2},
			new go.Binding("text", "color")))
}

export default nodeTemplate;
