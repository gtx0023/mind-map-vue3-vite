import * as go from 'gojs';
import {Part} from "gojs";

class DragCreatingTool extends go.Tool {
	// override
	private _archetypeNodeData: null;
	private _box: Part;
	private _delay: number;

	constructor() {
		super();
		this._archetypeNodeData = null;

		const b = new go.Part();
		b.layerName = "Tool";
		b.selectable = false;
		const r = new go.Shape();
		r.name = "SHAPE";
		r.figure = "Rectangle";
		r.fill = null;
		r.stroke = "magenta";
		r.position = new go.Point(0, 0);
		b.add(r);
		/** @type {Part} */
		this._box = b;

		/** @type {number} */
		this._delay = 175;
	}

	get box() {
		return this._box;
	}

	set box(val) {
		this._box = val;
	}

	get delay() {
		return this._delay;
	}

	set delay(val) {
		this._delay = val;
	}

	get archetypeNodeData() {
		return this._archetypeNodeData;
	}

	set archetypeNodeData(val) {
		this._archetypeNodeData = val;
	}

	canStart() {
		if (!this.isEnabled) return false;

		// gotta have some node data that can be copied
		if (this.archetypeNodeData === null) return false;

		var diagram = this.diagram;
		if (diagram === null) return false;
		// heed IsReadOnly & AllowInsert
		if (diagram.isReadOnly || diagram.isModelReadOnly) return false;
		if (!diagram.allowInsert) return false;

		var e = diagram.lastInput;
		// require left button & that it has moved far enough away from the mouse down point, so it isn't a click
		if (!e.left) return false;
		// don't include the following checks when this tool is running modally
		if (diagram.currentTool !== this) {
			if (!this.isBeyondDragSize()) return false;
			// must wait for "delay" milliseconds before that tool can run
			if (e.timestamp - diagram.firstInput.timestamp < this.delay) return false;
		}
		return true;
	}

	doActivate() {
		var diagram = this.diagram;
		if (diagram === null) return;
		diagram.remove(this.box);
		diagram.isMouseCaptured = false;
		this.isActive = false;
	}

	doDeactivate() {
		var diagram = this.diagram;
		if (diagram === null) return;
		diagram.remove(this.box);
		diagram.isMouseCaptured = false;
		this.isActive = false;
	}

	doMouseMove() {
		var diagram = this.diagram;
		if (diagram === null) return;
		if (this.isActive && this.box !== null) {
			var r = this.computeBoxBounds();
			var shape = this.box.findObject("SHAPE");
			if (shape === null) shape = this.box.findMainElement();
			shape.desiredSize = r.size;
			this.box.position = r.position;
		}
	}

	doMouseUp() {
		if (this.isActive) {
			var diagram = this.diagram;
			diagram.remove(this.box);
			try {
				diagram.currentCursor = "wait";
				this.insertPart(this.computeBoxBounds());
			} finally {
				diagram.currentCursor = "";
			}
		}
		this.stopTool();
	}

	computeBoxBounds() {
		var diagram = this.diagram;
		if (diagram === null) return new go.Rect(0, 0, 0, 0);
		var start = diagram.firstInput.documentPoint;
		var latest = diagram.lastInput.documentPoint;
		return new go.Rect(start, latest);
	}

	insertPart(bounds) {
		var diagram = this.diagram;
		if (diagram === null) return null;
		var arch = this.archetypeNodeData;
		if (arch === null) return null;

		diagram.raiseDiagramEvent("ChangingSelection", diagram.selection);
		this.startTransaction(this.name);
		var part = null;
		if (arch !== null) {
			var data = diagram.model.copyNodeData(arch);
			if (data) {
				diagram.model.addNodeData(data);
				part = diagram.findPartForData(data);
			}
		}
		if (part !== null) {
			part.move(bounds.position);
			part.resizeObject.desiredSize = bounds.size;
			if (diagram.allowSelect) {
				diagram.clearSelection();
				part.isSelected = true;
			}
		}

		// set the TransactionResult before raising event, in case it changes the result or cancels the tool
		this.transactionResult = this.name;
		this.stopTransaction();
		diagram.raiseDiagramEvent("ChangedSelection", diagram.selection);
		return part;
	}
}
