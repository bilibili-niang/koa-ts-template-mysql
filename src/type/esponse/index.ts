// 返回体的格式
import { ResponseType } from './type'

/*
* 统一返回体
* @param {Object} target
* @return {Object}
* */
export const Response = (target: Partial<ResponseType>) => {
  return Object.assign({
    code: 200,
    success: true,
    msg: '',
    data: {}
  }, target)
}