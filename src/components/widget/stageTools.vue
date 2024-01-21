<script setup lang="ts">
import {ref} from "vue";

const viewScale = ref(0)
</script>

<template>
	<div class="tools">
		<!-- 放大缩小 -->
		<div class="tools_scale tools_fun">
			<el-button class="tools_button">
				<el-icon>
					<Plus/>
				</el-icon>
			</el-button>
			<div class="tools_scale_slider">
				<el-slider v-model="viewScale"/>
			</div>
			<el-button class="tools_button">
				<el-icon>
					<Minus/>
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

	&_fun{
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
