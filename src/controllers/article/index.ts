import { Context } from 'koa'
import { Response } from '../../type'
import { query, request, summary, tags } from 'koa-swagger-decorator'

export default class ArticleController {
  @request('get', '/article/list')
  @summary('文章列表')
  @tags(['文章'])
  @query({
    size: { type: 'number', required: true, description: '每页数量', example: 10 },
    page: { type: 'number', required: true, description: '页数' },
    current: { type: 'number', required: true, description: '当前页数' }
  })
  public static async getList(ctx: Context) {
    ctx.body = Response({
      code: 200,
      msg: '这个路径是/article/list',
      data: {}
    })
  }
}