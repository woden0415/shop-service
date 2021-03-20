/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:44:33
 * @Description: 定义接口
 */
export interface ResUserInfo {
  [key: string]: string
}

export interface IReqLogin {
  email: string,
  pwd: string
}