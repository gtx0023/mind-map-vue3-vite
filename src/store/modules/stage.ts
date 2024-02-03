import {defineStore} from "pinia";
import {reactive, toRefs} from 'vue'
import {Diagram} from "gojs";

interface IStageState {
	stageIns: Diagram | null;

	[index: string]: any;
}

interface IUseTools {
	type: string;
	options: any;
}

const stageStore = defineStore("stage", () => {
	const state = reactive<IStageState>({
		stageIns: null,
		useTools: {
			type: 'move' // move, select, dragCreate
		}
	})

	const stage = state.stageIns
	const useTools = state.useTools

	const updateStage = (stageIns: Diagram) => state.stageIns = stageIns
	const updateUseTools = (tools: string | IUseTools) => {
		if (typeof tools === 'string') {
			state.useTools.type = tools
		} else {
			state.useTools = tools
		}
	}

	return {
		...toRefs(state),
		stage,
		useTools,
		updateStage,
		updateUseTools
	}
});

export default stageStore
