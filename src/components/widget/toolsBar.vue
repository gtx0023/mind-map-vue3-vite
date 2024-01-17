<script setup lang="ts">
import buttonGroup from "../layOut/buttonGroup.vue"
</script>

<template>
	<div class="tools">
		<buttonGroup>
			<el-button class="icon-bt">
				<svg-icon name="lock" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
		</buttonGroup>
		<buttonGroup>
			<el-button class="icon-bt">
				<svg-icon name="hand" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="select" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="square" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="diamond" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="circle" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="arrowLine" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="line" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="pencil" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="text" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="pic" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt">
				<svg-icon name="eraser" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
		</buttonGroup>
		<buttonGroup>
			<el-button class="icon-bt">
				<el-icon>
					<More/>
				</el-icon>
			</el-button>
		</buttonGroup>
	</div>
</template>

<style scoped lang="less">
.tools {
	display: flex;
	background: #fff;
	padding: 4px;
	border-radius: 4px;
	box-shadow: 0px 0px .9px 0px rgba(0, 0, 0, .17), 0px 0px 3px 0px rgba(0, 0, 0, .08), 0px 7px 14px 0px rgba(0, 0, 0, .05);

	.button-group:last-child {
		&::after {
			content: none;
		}
	}

	.icon-bt {
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 0;
		border: none;
	}
}
</style>
