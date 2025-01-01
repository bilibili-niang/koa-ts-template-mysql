import { Context } from 'koa'

export default class UserController {
  public static async listUsers(ctx: Context) {
    ctx.body = '这个路径是/user/info'
  }
}
