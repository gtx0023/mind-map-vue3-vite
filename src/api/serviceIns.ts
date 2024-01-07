import Axios from "./config";

//实例化
const instance = Axios();

//创建需要的请求方法:get post put delete
//url:请求的接口地址
//params:请求参数
//headers:请求头
export default {
  get(url: string, params: any) {
    return instance.get(url, { params });
  },
  post(url: string, params: any) {
    return instance.post(url, params);
  },
  put(url: string, params: any) {
    return instance.put(url, params);
  },
  delete(url: string, params: any) {
    return instance.delete(url, { params });
  },
};
