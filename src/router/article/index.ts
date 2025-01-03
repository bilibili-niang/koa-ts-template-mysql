import Router from 'koa-router'
import ArticleController from '../../controllers/article'

export const Article = '/article'
const router = new Router({ prefix: Article })

export const ArticleList = '/list'

router.get(ArticleList, ArticleController.getList)

export default router
