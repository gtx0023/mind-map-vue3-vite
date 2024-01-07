<template>
	<div class="hello">
		<h1>{{ message }}</h1>
		<button @click="incrementCount">Increment</button>
		<p>Count: {{ counterStore.count }}</p>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCounterStore } from '@/store/countTest'

const counterStore = useCounterStore()
const message = ref('Welcome to Your Vue.js + TypeScript App')

function incrementCount() {
	counterStore.increment()
}
</script>
