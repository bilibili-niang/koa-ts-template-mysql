import Router from 'koa-router'
import UserController from '../../controllers/user'

const router = new Router({ prefix: '/user' })
router.get('/list', UserController.listUsers)

router.post('/create', UserController.createUser)

export default router
