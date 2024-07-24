import { defHttp } from '@/utils/http/axios';

enum API {
  GET_ACCOUNT_LIST = '/user/page',
}

export function getAccountPage() {
  return defHttp.get({
    url: API.GET_ACCOUNT_LIST,
  });
}
