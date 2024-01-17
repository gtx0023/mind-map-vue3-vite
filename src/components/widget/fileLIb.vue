<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(false)

const cancelClick = () => {
	drawer.value = false
}

const confirmClick = () => {
	drawer.value = false
}
</script>

<template>
	<div>
		<el-button class="tools-bt file-lib" @click="drawer = true">
			<el-icon>
				<Files/>
			</el-icon>
			素材库
		</el-button>
		<el-drawer v-model="drawer" direction="rtl">
			<template #header>
				<h4>set title by slot</h4>
			</template>
			<template #default>
				<div>liblist</div>
			</template>
			<template #footer>
				<div style="flex: auto">
					<el-button @click="cancelClick">cancel</el-button>
					<el-button type="primary" @click="confirmClick">confirm</el-button>
				</div>
			</template>
		</el-drawer>
	</div>

</template>

<style scoped lang="less">
.tools-bt {
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	border-radius: 4px;

	.el-icon {
		font-size: 20px;
		margin-right: 6px;
	}
}
</style>
