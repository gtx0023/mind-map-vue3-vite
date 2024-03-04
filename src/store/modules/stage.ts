import {defineStore} from "pinia";
import {Diagram} from "gojs";

interface IStageState {
	stageIns: Diagram | null;
	useTools: IUseTools;
	stageUpdateTimes: number;
	stageOptions: {
		[index: string]: any;
	};
	[index: string]: any;
}

interface IUseTools {
	type: string;
	options: any;
}

const stageStore = defineStore("stage", {
	state: () => ({
		stageIns: null,
		stageUpdateTimes: 0,
		stageOptions: {
			initialScale: 1
		},
		useTools: {
			type: '',
			options: {}
		}
	} as IStageState),
	actions: {
		updateStage(stageIns: Diagram) {
			this.stageIns = stageIns
			this.stageUpdateTimes++
		},
		updateStageOptions(options: any) {
			const {initialScale} = options
			this.stageOptions.initialScale = initialScale
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
