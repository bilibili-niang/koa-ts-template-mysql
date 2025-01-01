import Router from 'koa-router'
import UserController from '../../controllers/user'

// const router = new Router()
const router = new Router({ prefix: '/user' })
router.get('/info', UserController.listUsers)

export default router
