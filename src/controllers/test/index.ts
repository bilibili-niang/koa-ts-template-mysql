import { Context } from 'koa'
import { Response } from '../../type'
import { query, request, summary, tags } from 'koa-swagger-decorator'

// import { Route } from '../../builder/decorators'

export default class TestController {
  // @Route('/')
  @request('get', '/test/')
  @summary('测试接口')
  @tags([])
  @query({})
  public static async getTest(ctx: Context) {
    ctx.body = Response({
      code: 200,
      msg: '这个路径是/test',
      data: {}
    })
  }
}