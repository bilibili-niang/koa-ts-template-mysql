import Router from 'koa-router'
import TestController from '../../controllers/test'

const router = new Router()

console.log('TestController------------------')
console.log(TestController)

router.all('/', TestController.getTest)

export default router
