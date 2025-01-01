// 返回体的格式
import { ResponseType } from './type'

/*
* 统一返回体
* @param {Object} target
* @return {Object}
* */
export const Response = (target: ResponseType) => {
  // 返回两个对象的联合
  return Object.assign({
    code: 200,
    msg: '',
    data: {}
  }, target)
}