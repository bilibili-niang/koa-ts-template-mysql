import Router from 'koa-router'
import { Context } from 'koa'
import { Response } from '../../type'

const router = new Router()
router.all('/', async (ctx: Context) => {
  ctx.body = Response({
    code: 200,
    msg: '你已到达未知领域,请尽快返航',
    success: false,
    data: {}
  })
})

export default router
