<template>
	<stage/>
	<navIcon class="nav_button"/>
	<toolsBar class="toolsBar"/>
</template>

<script lang="ts" setup>
import stage from "@/components/stage/index.vue"
import navIcon from "@/components/widget/navIcon.vue"
import toolsBar from "@/components/widget/toolsBar.vue"
</script>

<style lang="less">
.nav_button {
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 20;

	&_dropdown {
		.el-icon {
			font-size: 26px;
		}
	}
}
.toolsBar{
	position: absolute;
	z-index: 20;
	top: 10px;
	left: 50%;
	transform: translate(-50%);
}
</style>
