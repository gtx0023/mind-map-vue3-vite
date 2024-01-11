<template>
	<stage/>
	<navIcon class="nav_button"/>
</template>

<script lang="ts" setup>
import stage from "@/components/stage/index.vue"
import navIcon from "@/components/widget/navIcon.vue"
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
</style>
