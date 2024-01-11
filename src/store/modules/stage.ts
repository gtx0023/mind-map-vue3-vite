import {defineStore} from "pinia";
import {reactive, toRefs} from 'vue'
import {Diagram} from "gojs";

interface IStageState {
	stageIns: Diagram | null
}

const stageStore = defineStore("stage", () => {
	const state = reactive<IStageState>({
		stageIns: null
	})

	const stage = state.stageIns
	const updateStage = (stageIns: Diagram) => state.stageIns = stageIns

	return {
		...toRefs(state),
		stage,
		updateStage
	}
});

export default stageStore
