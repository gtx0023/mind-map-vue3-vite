<template>
	<stage/>
	<navIcon class="nav_button"/>
	<toolsBar class="toolsBar"/>
	<fileLib class="fileLib"/>
</template>

<script lang="ts" setup>
import stage from "@/components/stage/index.vue"
import navIcon from "@/components/widget/navIcon.vue"
import toolsBar from "@/components/widget/toolsBar.vue"
import fileLib from "@/components/widget/fileLIb.vue"
</script>

<style lang="less">
.nav_button {
	position: absolute;
	height: 48px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 10px;
	left: 10px;
	z-index: 20;

	&_dropdown {
		.el-icon {
			font-size: 26px;
		}
	}
}

.toolsBar {
	position: absolute;
	z-index: 20;
	top: 10px;
	left: 50%;
	transform: translate(-50%);
}

.fileLib {
	position: absolute;
	z-index: 20;
	top: 10px;
	right: 18px;
}
</style>
