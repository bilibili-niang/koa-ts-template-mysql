import { Context } from 'koa'
import { Response } from '../../type'
import { query, request, summary, tags } from 'koa-swagger-decorator'

export default class ArticleController {
  @request('get', '/article/list')
  @summary('文章列表')
  @tags(['文章'])
  @query({})
  public static async getList(ctx: Context) {
    ctx.body = Response({
      code: 200,
      msg: '这个路径是/article/list',
      data: {}
    })
  }
}