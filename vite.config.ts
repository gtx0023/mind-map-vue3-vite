import {defineConfig, type PluginOption} from "vite";
import vue from "@vitejs/plugin-vue";
import {visualizer} from 'rollup-plugin-visualizer';
import path from "path";
import externalGlobals from 'rollup-plugin-external-globals';
import {createHtmlPlugin} from 'vite-plugin-html'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			// 告诉打包工具 在external配置的 都是外部依赖项  不需要打包
			// external: ['gojs'],
			// plugins: [
			// 	externalGlobals({
			// 		// "在项目中引入的变量名称"："CDN包导出的名称，一般在CDN包中都是可见的"
			// 		gojs: 'go'
			// 	})
			// ]
		},
	},
	plugins: [
		vue(),
		visualizer({
			emitFile: false,
			filename: 'analysis-chart.html', // 分析图生成的文件名
			open: true // 如果存在本地服务端口，将在打包后自动展示
		}) as PluginOption,
		// createHtmlPlugin({
		// 	minify: true,
		// 	inject: {
		// 		data: {
		// 			gojs: '<script src="/js/go.js"></script>'
		// 		}
		// 	}
		// }),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
			symbolId: "icon-[dir]-[name]",
		}),
	],
	resolve: {
		alias: {
			// 这里的 @ 就是我们要为 src 配置的别名
			"@": path.resolve(__dirname, "src"),
		},
	},
});
