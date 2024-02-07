import {defineStore} from "pinia";
import {Diagram} from "gojs";

interface IStageState {
	stageIns: Diagram | null;
	useTools: IUseTools;
	[index: string]: any;
}

interface IUseTools {
	type: string;
	options: any;
}

const stageStore = defineStore("stage", {
	state: () => ({
		stageIns: null,
		useTools: {
			type: '',
			options: {}
		}
	} as IStageState),
	actions: {
		updateStage(stageIns: Diagram) {
			this.stageIns = stageIns
		},
		updateUseTools(tools: string | IUseTools) {
			if (typeof tools === 'string') {
				this.useTools.type = tools
			} else {
				this.useTools = tools
			}
		}
	}
});

export default stageStore
