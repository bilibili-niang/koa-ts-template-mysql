import Router from 'koa-router'

export const Article = '/article'
const router = new Router({ prefix: Article })

export const ArticleList = Article + '/list'

router.get(ArticleList, () => {

})

export default router
