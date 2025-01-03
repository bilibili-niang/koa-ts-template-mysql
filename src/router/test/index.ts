import Router from 'koa-router'
import TestController from '../../controllers/test'

const router = new Router({ prefix: '/test' })

router.get('/info', TestController.getTest)

export default router
