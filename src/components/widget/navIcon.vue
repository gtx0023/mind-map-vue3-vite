<script setup lang="ts">
import {
	Folder,
	Download,
	Picture, Service, Delete, Opportunity, MoreFilled
} from '@element-plus/icons-vue'
</script>

<template>
	<el-dropdown trigger="click" size="default">
        <span class="el-dropdown-link nav_button_dropdown">
          <el-icon><MoreFilled/></el-icon>
        </span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item :icon="Folder">打开</el-dropdown-item>
				<el-dropdown-item :icon="Download">保存到</el-dropdown-item>
				<el-dropdown-item :icon="Picture">导出图片</el-dropdown-item>
				<el-dropdown-item :icon="Service">帮助</el-dropdown-item>
				<el-dropdown-item :icon="Delete">重置画布</el-dropdown-item>
				<el-dropdown-item :icon="Opportunity">深色模式</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<style scoped lang="less">

</style>
