import { Context } from 'koa'
import { Response } from '../type'

export default class UserController {
  public static async listUsers(ctx: Context) {
    ctx.body = Response({
      code: 200,
      msg: '这个路径是/user/info',
      data: {}
    })
  }
}
