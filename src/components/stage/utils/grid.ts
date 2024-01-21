import * as go from "gojs";
import {Diagram, Part, Rect} from 'gojs'

const $ = go.GraphObject.make;

class Grid {
	private diagram: Diagram;
	private gradScaleHoriz: Part;
	private gradScaleVert: Part;

	constructor(diagram: Diagram) {
		this.diagram = diagram
		this.gradScaleHoriz = $(go.Part)
		this.gradScaleVert = $(go.Part)
	}

	init() {
		this.initGrad()
		this.setGrid()
	}

	initGrad() {
		this.gradScaleHoriz = $(go.Part, "Graduated",
			{graduatedTickUnit: 10, pickable: false, layerName: "Grid", isAnimated: false},
			$(go.Shape, {geometryString: "M0 0 H400"}),
			$(go.Shape, {geometryString: "M0 0 V3", interval: 1}),
			$(go.Shape, {geometryString: "M0 0 V15", interval: 5}),
			$(go.TextBlock,
				{
					font: "10px sans-serif",
					interval: 5,
					alignmentFocus: go.Spot.TopLeft,
					segmentOffset: new go.Point(0, 7)
				}
			)
		);

		this.gradScaleVert = $(go.Part, "Graduated",
			{graduatedTickUnit: 10, pickable: false, layerName: "Grid", isAnimated: false},
			$(go.Shape, {geometryString: "M0 0 V400"}),
			$(go.Shape, {geometryString: "M0 0 V3", interval: 1, alignmentFocus: go.Spot.Bottom}),
			$(go.Shape, {geometryString: "M0 0 V15", interval: 5, alignmentFocus: go.Spot.Bottom}),
			$(go.TextBlock,
				{
					font: "10px sans-serif",
					segmentOrientation: go.Link.OrientOpposite,
					interval: 5,
					alignmentFocus: go.Spot.BottomLeft,
					segmentOffset: new go.Point(0, -7)
				}
			)
		);
	}

	setGrid() {
		this.diagram.grid.visible = true
		// Add listeners to keep the scales/indicators in sync with the viewport
		this.diagram.addDiagramListener("InitialLayoutCompleted", () =>{
			this.setupScalesAndIndicators()
		});
		this.diagram.addDiagramListener("ViewportBoundsChanged", () => {
			this.updateScales(this.diagram.viewportBounds);
		});
	}

	setupScalesAndIndicators() {
		this.diagram.commit(d => {
			// Add each node to the diagram
			d.add(this.gradScaleHoriz);
			d.add(this.gradScaleVert);
			this.updateScales(this.diagram.viewportBounds);
		}, null);  // null says to skip UndoManager recording of changes
	}

	updateScales(vb: Rect) {
		if (!vb) vb = this.diagram.viewportBounds;
		if (!vb.isReal()) return;
		this.diagram.commit(diag => {
			// Update properties of horizontal scale to reflect viewport
			this.gradScaleHoriz.elt(0).width = vb.width * diag.scale;
			this.gradScaleHoriz.location = new go.Point(vb.x, vb.y);
			this.gradScaleHoriz.graduatedMin = vb.x;
			this.gradScaleHoriz.graduatedMax = vb.right;
			this.gradScaleHoriz.scale = 1 / diag.scale;
			// Update properties of vertical scale to reflect viewport
			this.gradScaleVert.elt(0).height = vb.height * diag.scale;
			this.gradScaleVert.location = new go.Point(vb.x, vb.y);
			this.gradScaleVert.graduatedMin = vb.y;
			this.gradScaleVert.graduatedMax = vb.bottom;
			this.gradScaleVert.scale = 1 / diag.scale;
		}, null);
	}
}

export default Grid
