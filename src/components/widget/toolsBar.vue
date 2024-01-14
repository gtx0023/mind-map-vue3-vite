<script setup lang="ts">
import buttonGroup from "../layOut/buttonGroup.vue"
</script>

<template>
	<div class="tools">
		<buttonGroup>
			<svg-icon name="lock" width="24px" height="24px" color="red"></svg-icon>
		</buttonGroup>
		<buttonGroup>
			<svg-icon name="hand" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="select" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="square" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="diamond" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="circle" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="arrowLine" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="line" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="pencil" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="text" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="pic" width="24px" height="24px" color="red"></svg-icon>
			<svg-icon name="eraser" width="24px" height="24px" color="red"></svg-icon>
		</buttonGroup>
		<buttonGroup>
			<svg-icon name="more" width="24px" height="24px" color="red"></svg-icon>
		</buttonGroup>
	</div>
</template>

<style scoped lang="less">
.tools {
	display: flex;
	background: #fff;
	box-shadow: 0px 0px .9px 0px rgba(0, 0, 0, .17), 0px 0px 3px 0px rgba(0, 0, 0, .08), 0px 7px 14px 0px rgba(0, 0, 0, .05);
}
</style>
