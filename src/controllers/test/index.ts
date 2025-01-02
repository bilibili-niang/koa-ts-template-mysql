import { Context } from 'koa'
import { Response } from '../../type'
import { query, request, summary, tags } from 'koa-swagger-decorator'

export default class TestController {
  @request('get', '/test/')
  @summary('测试接口')
  @tags(['测试'])
  @query({})
  public static async getTest(ctx: Context) {
    ctx.body = Response({
      code: 200,
      msg: '这个路径是/test',
      data: {}
    })
  }
}