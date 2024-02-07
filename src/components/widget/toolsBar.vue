<script setup lang="ts">
import buttonGroup from "../layOut/buttonGroup.vue"
import stageStore from '@/store/modules/stage'

const userStore = stageStore()

const clickHandBtn = () => {
	userStore.updateUseTools('move')
}

const clickSelectBtn = () => {
	userStore.updateUseTools('select')
}

const clickSquareBtn = () => {
	userStore.updateUseTools({
		type: 'dragCreate',
		options: {figure: 'RoundedRectangle'}
	})
}

const clickDiamondBtn = () => {
	userStore.updateUseTools({
		type: 'dragCreate',
		options: {figure: 'Diamond'}
	})
}

const clickCircleBtn = () => {
	userStore.updateUseTools({
		type: 'dragCreate',
		options: {figure: 'Ellipse'}
	})
}

const clickArrowLineBtn = () => {
	// 设置箭头线 连线。用连线模板
	userStore.updateUseTools({
		type: 'linkLine',
		options: {figure: 'arrowLine'}
	})
}

const clickLineBtn = () => {
	// 设置直线 连线。用连线模板
	userStore.updateUseTools({
		type: 'linkLine',
		options: {figure: 'line'}
	})
}

const clickPencilBtn = () => {
	// 设置铅笔工具
	userStore.updateUseTools('dragCreate')
}

const clickTextBtn = () => {
	// 设置文本工具
	userStore.updateUseTools('dragCreate')
}

const clickPicBtn = () => {
	// 设置图片工具
	userStore.updateUseTools('dragCreate')
}

const clickEraserBtn = () => {
	// 设置橡皮擦工具
	userStore.updateUseTools('dragCreate')
}
</script>

<template>
	<div class="tools">
		<buttonGroup>
			<el-button class="icon-bt">
				<svg-icon name="lock" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
		</buttonGroup>
		<buttonGroup>
			<el-button class="icon-bt" @click="clickHandBtn">
				<svg-icon name="hand" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickSelectBtn">
				<svg-icon name="select" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickSquareBtn">
				<svg-icon name="square" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickDiamondBtn">
				<svg-icon name="diamond" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickCircleBtn">
				<svg-icon name="circle" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickArrowLineBtn">
				<svg-icon name="arrowLine" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickLineBtn">
				<svg-icon name="line" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickPencilBtn">
				<svg-icon name="pencil" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickTextBtn">
				<svg-icon name="text" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickPicBtn">
				<svg-icon name="pic" width="24px" height="24px" color="red"></svg-icon>
			</el-button>
			<el-button class="icon-bt" @click="clickEraserBtn">
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
