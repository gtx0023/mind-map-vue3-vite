<template>
	<div class="button-group">
		<slot/>
	</div>
</template>

<style scoped lang="less">
.button-group{
	position: relative;
	&::after{
		content: ''; display: inline-block; width: 1px; height: 15px; position: absolute; right: 0; top: 50%; transform: translate(0, -50%); background: #868686;
	}
}
</style>
