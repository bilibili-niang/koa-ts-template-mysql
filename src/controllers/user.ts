import { Context } from 'koa'
import { body, query, request, summary, swaggerClass, swaggerProperty, tags } from 'koa-swagger-decorator'
import { Response } from '../type'
import { User } from '../entity/user'

require('dotenv').config()


@swaggerClass()
export class userInfo {
  @swaggerProperty({ type: 'string', required: true, description: '用户邮箱' }) email: string = ''
  @swaggerProperty({ type: 'string', required: true, description: '用户名' }) name: string = ''
  @swaggerProperty({ type: 'string', required: true, description: '用户密码' }) password: string = ''
}

export default class UserController {

  @request('get', '/user/list')
  @summary('用户列表接口')
  @tags(['用户'])
  @query({})
  public static async listUsers(ctx: Context) {
    try {
      const userRepository = ctx.dataSource.getRepository(User)
      const users = await userRepository.find()
      ctx.body = Response({
        code: 200,
        msg: '这个路径是/user/info',
        data: users,
      })
    } catch (error) {
      console.log('error', error)
      ctx.body = Response({
        code: 500,
        msg: '获取用户列表失败',
        data: error,
      })
    }
  }

  @request('post', '/user/create')
  @summary('创建用户接口')
  @tags(['用户'])
  @body((userInfo as any).swaggerDocument)
  public static async createUser(ctx: any) {
    // 解析并验证请求体中的数据
    const { name = '', password = '', email = '' } = ctx.request.body
    if (!name || !password || !email) {
      ctx.body = Response({
        code: 500,
        msg: '用户创建失败,缺少用户字段',
        data: {},
      })
      return void 0
    } else {
      // 创建一个新的用户实例
      const userRepository = ctx.dataSource.getRepository(User)
      const newUser = userRepository.create({
        name,
        password,
        email,
      })
      // 保存新用户到数据库
      await userRepository.save(newUser)
      // 返回成功响应
      ctx.body = Response({
        code: 201, // HTTP 状态码 201 表示资源已成功创建
        msg: '用户创建成功',
        data: newUser,
      })
    }
  }
}
