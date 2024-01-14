//引入项目中全部的全局组件
import SvgIcon from "./index.vue";
//引入element-plus提供全部图标组件
//全局对象
const allGloablComponent: any = { SvgIcon };
//对外暴露插件对象
export default {
	//务必叫做install方法
	install(app: any) {
		//注册项目全部的全局组件
		Object.keys(allGloablComponent).forEach((key) => {
			//注册为全局组件
			app.component(key, allGloablComponent[key]);
		});
	},
};
