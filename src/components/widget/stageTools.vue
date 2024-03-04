<script setup lang="ts">
import {watch, ref, unref} from "vue";
import stageStore from "@/store/modules/stage";

const stageStoreIns = stageStore()
let diagram = null;
let _initialScale = unref(1);
const viewScale = ref(0)


const scalePlus = () => {
	viewScale.value += 1
	valueToScale()
}

const scaleMinus = () => {
	viewScale.value -= 1
	valueToScale()
}

const scaleToValue = () => {
	let B = diagram.commandHandler.zoomFactor;
	let y1 = diagram.scale;
	viewScale.value = Math.round(Math.log(y1 / _initialScale) / Math.log(B));
	console.log('scaleToValue---', viewScale.value)
}
const valueToScale = () => {
	let x = viewScale.value;
	let B = diagram.commandHandler.zoomFactor;
	diagram.scale = _initialScale * Math.pow(B, x);
}

stageStoreIns.$subscribe((mutation, state) => {
	console.log(mutation.storeId)
	if (state.stageIns) {
		diagram = state.stageIns;
		_initialScale = state.stageOptions.initialScale;
		scaleToValue();
	}
})

</script>

<template>
	<div class="tools">
		<!-- 放大缩小 -->
		<div class="tools_scale tools_fun">
			<el-button class="tools_button" @click="scaleMinus">
				<el-icon>
					<Minus/>
				</el-icon>
			</el-button>
			<div class="tools_scale_slider">
				<el-slider v-model="viewScale"/>
			</div>
			<el-button class="tools_button" @click="scalePlus">
				<el-icon>
					<Plus/>
				</el-icon>
			</el-button>
		</div>


		<!-- 无限滚动 -->
		<el-button class="tools_button tools_fun">
			<el-icon>
				<Rank/>
			</el-icon>
		</el-button>

		<!-- 标尺 -->
		<el-button class="tools_button tools_fun">
			<svg-icon name="ruler" width="24px" height="24px"></svg-icon>
		</el-button>
	</div>
</template>

<style scoped lang="less">
.tools {
	display: flex;
	align-items: center;

	&_fun {
		margin: 0 5px 0 0;
	}

	&_scale {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 200px;

		&_slider {
			width: 110px;
		}
	}

	&_button {
		width: 30px;
		height: 30px;
		padding: 0;
		font-size: 18px;
	}
}

</style>
