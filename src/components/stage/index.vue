<script setup lang="ts">
import * as go from "gojs";
import {DiagramInitOptions, Diagram, Node} from 'gojs'
import {ref, onMounted, Ref} from 'vue'
import stageStore from '@/store/modules/stage'
import Grid from './utils/grid'
import nodeTemplate from "@/components/stage/temp/nodeTemplate";
import DragCreatingTool from "@/components/stage/tools/DragCreatingTool";

const $ = go.GraphObject.make;

const userStore = stageStore()

const stageBox = ref() as Ref<Element>
const options: DiagramInitOptions = {
	"commandHandler.copiesTree": true,
	"commandHandler.copiesParentKey": true,
	"commandHandler.deletesTree": true,
	"draggingTool.dragsTree": true,
	"undoManager.isEnabled": true,
	"grid.visible": true
}
let diagram: Diagram;
onMounted(() => {
	diagram = new go.Diagram(stageBox.value, options);
	userStore.updateStage(diagram)

	// 引入grid
	const gridIns = new Grid(diagram);
	gridIns.init()

	diagram.nodeTemplate = nodeTemplate()
	const templateMap = new go.Map<string, go.Node>();
	templateMap.add('', <Node>diagram.nodeTemplate)

	// tools
	const dragCreatingTool = new DragCreatingTool()
	dragCreatingTool.isEnabled = true
	dragCreatingTool.delay = 0;
	dragCreatingTool.box = $(go.Part,
		{ layerName: "Tool" },
		$(go.Shape,
			{ name: "SHAPE", fill: null, stroke: "cyan", strokeWidth: 2 })
	);
	dragCreatingTool.archetypeNodeData = { color: "white" };
	dragCreatingTool.insertPart = (bounds) =>{
		// use a different color each time
		dragCreatingTool.archetypeNodeData.color = go.Brush.randomColor();
		// call the base method to do normal behavior and return its result
		return DragCreatingTool.prototype.insertPart.call(dragCreatingTool, bounds);
	}
	diagram.toolManager.mouseMoveTools.insertAt(2, dragCreatingTool);
})


</script>

<template>
	<div class="stage" ref="stageBox"></div>
</template>

<style lang="less">
.stage {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
}

</style>
