import { defHttp } from '@/utils/http/axios';
import { CreateSysDept, UpdateSysDept } from '@/api/sys/dept/model';

enum API {
  GET_DEPT_PAGE = '/dept/page',
  GET_DEPT_LIST = '/dept/list',
  CREATE_DEPT = '/dept/create',
  UPDATE_DEPT = '/dept/update',
  DELETE_DEPT = '/dept/delete/',
}

export function getDetpList() {
  return defHttp.get({ url: API.GET_DEPT_LIST });
}

export function getDeptPage(params) {
  return defHttp.get({ url: API.GET_DEPT_PAGE, params });
}

export function createDept(dept: CreateSysDept) {
  return defHttp.post({ url: API.CREATE_DEPT, data: dept });
}

export function updateDept(dept: UpdateSysDept) {
  return defHttp.patch({ url: API.UPDATE_DEPT, data: dept });
}

export function deleteDept(deptId: string) {
  return defHttp.delete({ url: API.DELETE_DEPT + deptId });
}
