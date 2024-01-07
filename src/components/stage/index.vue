<template>
	<div class="stage" ref="stageBox"></div>
</template>
<script setup lang="ts">
import * as go from "gojs";
import {DiagramInitOptions} from 'gojs'
import {ref, onMounted, Ref} from 'vue'

const stageBox = ref() as Ref<Element>
const options: DiagramInitOptions = {
	"commandHandler.copiesTree": true,
	"commandHandler.copiesParentKey": true,
	"commandHandler.deletesTree": true,
	"draggingTool.dragsTree": true,
	"undoManager.isEnabled": true
}
onMounted(() => {
	console.log('stageBox-----', stageBox)
	const diagram = new go.Diagram(stageBox.value, options);
})


</script>
<style lang="less">
.stage {
	width: 100%;
	height: 100%;
}
</style>
