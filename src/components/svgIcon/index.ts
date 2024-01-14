/**
 * 自动引入当前文件夹下所有module
 */
type ModuleType<T> = {
	[key: string]: T
}
const modulesFiles: ModuleType<any> = import.meta.glob("@/assets/icon/**.svg", {eager: true})
const dynameicRouter = []
for (const key of Object.keys(modulesFiles)) {
	dynameicRouter.push(...modulesFiles[key].default)
}
export default dynameicRouter
