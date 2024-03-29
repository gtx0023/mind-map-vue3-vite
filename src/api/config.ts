import axios from "axios";

// 创建一个 axios 实例
console.log("---------", import.meta.env.VITE_APP_BASE_API);

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 添加请求拦截器

service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },

  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    console.log(response);
    // 对响应数据做点什么
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    // 这个状态码是和后端约定的
    const code = dataAxios.reset;
    if (code !== 200) {
      // 错误页面拦截
    }
    return dataAxios;
  },

  function (error) {
    // 对响应错误做点什么
    console.log(error);
    return Promise.reject(error);
  }
);

export default () => service;
