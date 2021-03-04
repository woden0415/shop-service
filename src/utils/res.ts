/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-03 21:57:16
 * @Description: 定义响应体
 */

interface IResBasic<T> {
  code: string
  message: string
  success: boolean
  timestamp: number
  datas: T
}

export default class Res<T extends boolean>{
  code: string
  datas: T
  message: string
  success: boolean
  timestamp: Date

  static responseOk<T>(datas: any): IResBasic<T>{
    return {
      code: '0',
      datas,
      message: '',
      success: true,
      timestamp: new Date().getTime()
    }
  }

  static responseFail<T>(code: string, datas: any, message: string):IResBasic<T> {
    return {
      code: code,
      datas,
      message,
      success: false,
      timestamp: new Date().getTime()
    }
  }
}