<script setup lang="ts">
import * as go from "gojs";
import {DiagramInitOptions, Diagram} from 'gojs'
import {ref, onMounted, Ref} from 'vue'
import stageStore from '@/store/modules/stage'
import Grid from './utils/grid'

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
