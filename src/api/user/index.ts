// src/api/user/index.ts
import request from "../serviceIns";
import { AxiosPromise } from "axios";
import { UserForm, UserInfo, UserPageResult, UserQuery } from "./types";

/**
 * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
 */
export function getUserInfo(): AxiosPromise<UserInfo> {
  return request.get("/api/v1/users/me", {});
}

/**
 * 获取用户分页列表
 *
 * @param queryParams
 */
export function listUserPages(
  queryParams: UserQuery
): AxiosPromise<UserPageResult> {
  return request.get("/api/v1/users/pages", queryParams);
}

/**
 * 获取用户表单详情
 *
 * @param userId
 */
export function getUserForm(userId: number): AxiosPromise<UserForm> {
  return request.get("/api/v1/users/" + userId + "/form", {});
}

/**
 * 添加用户
 *
 * @param data
 */
export function addUser(data: any) {
  return request.post("/api/v1/users", { data: data });
}

/**
 * 修改用户
 *
 * @param id
 * @param data
 */
export function updateUser(id: number, data: UserForm) {
  return request.put("/api/v1/users/" + id, { data: data });
}

/**
 * 修改用户状态
 *
 * @param id
 * @param status
 */
export function updateUserStatus(id: number, status: number) {
  return request.post("/api/v1/users/" + id + "/status", {
    status: status,
  });
}

/**
 * 修改用户密码
 *
 * @param id
 * @param password
 */
export function updateUserPassword(id: number, password: string) {
  return request.post("/api/v1/users/" + id + "/password", {
    password: password,
  });
}

/**
 * 删除用户
 *
 * @param ids
 */
export function deleteUsers(ids: string) {
  return request.delete("/api/v1/users/" + ids, {});
}

/**
 * 下载用户导入模板
 *
 * @returns
 */
export function downloadTemplate() {
  return request.get("/api/v1/users/template", {
    responseType: "arraybuffer",
  });
}

/**
 * 导出用户
 *
 * @param queryParams
 * @returns
 */
export function exportUser(queryParams: UserQuery) {
  return request.get("/api/v1/users/_export", {
    ...queryParams,
    responseType: "arraybuffer",
  });
}

/**
 * 导入用户
 *
 * @param file
 */
export function importUser(deptId: number, roleIds: string, file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("deptId", deptId.toString());
  formData.append("roleIds", roleIds);
  return request.post("/api/v1/users/_import", {
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
