import { Context } from 'koa'
import { Response } from '../../type'
import { query, request, summary, tags } from 'koa-swagger-decorator'
import { ArticleList } from '../../router/article'

export default class ArticleController {
  @request('get', ArticleList)
  @summary('文章列表')
  @tags(['文章'])
  @query({
    size: {
      type: String,
      request: true,
      description: '每页显示条数'
    }
  })
  public static async getTest(ctx: Context) {
    ctx.body = Response({
      code: 200,
      msg: '这个路径是' + ArticleList,
      data: {}
    })
  }
}