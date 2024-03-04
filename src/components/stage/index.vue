<script setup lang="ts">
import * as go from "gojs";
import {DiagramInitOptions, Diagram, Node} from 'gojs'
import {ref, onMounted, Ref} from 'vue'
import stageStore from '@/store/modules/stage'
import Grid from './utils/grid'
import nodeTemplate from "@/components/stage/temp/nodeTemplate";
import DragCreatingTool from "@/components/stage/tools/DragCreatingTool";

const $ = go.GraphObject.make;

const stageStoreIns = stageStore()

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
// dragCreatingTool 挂在外层用于是否开启Tools的使用
let dragCreatingTool: DragCreatingTool;

const initDiagram = () => {
	diagram = new go.Diagram(stageBox.value, options);
	stageStoreIns.updateStage(diagram);
	stageStoreIns.updateStageOptions({
		initialScale: diagram.scale,

	})
}

const initOptions = () => {
	// 引入grid
	const gridIns = new Grid(diagram);
	gridIns.init()
}

const registerListener = () => {
	diagram.addDiagramListener('ViewportBoundsChanged', e => {
		// console.log('ViewportBoundsChanged---', e)
		stageStoreIns.updateStage(diagram);
	})
}

const initNodeTemplateMap = () => {
	diagram.nodeTemplate = nodeTemplate()
	const templateMap = new go.Map<string, go.Node>();
	templateMap.add('', <Node>diagram.nodeTemplate)
}
const initTools = () => {
	// tools
	dragCreatingTool = new DragCreatingTool()
	dragCreatingTool.isEnabled = false
	dragCreatingTool.delay = 0;
	dragCreatingTool.box = $(go.Part,
		{layerName: "Tool"},
		$(go.Shape,
			{name: "SHAPE", fill: null, stroke: "cyan", strokeWidth: 2})
	);
	dragCreatingTool.archetypeNodeData = {color: "white"};
	dragCreatingTool.insertPart = (bounds) => {
		// 此处修改了 archetypeNodeData
		// archetypeNodeData 包含了临时节点的所有属性
		dragCreatingTool.archetypeNodeData.color = go.Brush.randomColor();
		// call the base method to do normal behavior and return its result
		return DragCreatingTool.prototype.insertPart.call(dragCreatingTool, bounds);
	}
	diagram.toolManager.mouseMoveTools.insertAt(2, dragCreatingTool);
}
stageStoreIns.$subscribe((mutation, state) => {
	console.log(mutation.storeId)
	if (state.useTools.type === 'dragCreate') {
		console.log('dragCreatingTool----', state.useTools.options)
		// 设置拖拽创建工具是否开启
		dragCreatingTool.isEnabled = true

		dragCreatingTool.archetypeNodeData = {
			...dragCreatingTool.archetypeNodeData,
			...state.useTools.options
		}
	} else {
		dragCreatingTool.isEnabled = false
	}
})

onMounted(() => {
	// 初始化diagram
	initDiagram()

	// 初始化options
	initOptions()

	// 注册监听
	registerListener()

	// 初始化nodeTemplateMap
	initNodeTemplateMap()

	// 初始化tools
	initTools()
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
