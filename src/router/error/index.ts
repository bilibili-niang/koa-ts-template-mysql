import Router from 'koa-router'
import TestController from '../../controllers/test'

const router = new Router()

router.all('/', TestController.getTest)

export default router
