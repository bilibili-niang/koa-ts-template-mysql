import Koa from 'koa'
import { DataSource } from 'typeorm'
import { mysqlLogin } from './db/config'
import router from './router'
// const router = require('./router')

require('dotenv').config()

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

// 非法路由
app.use(async ctx => {
  ctx.body = '你已到达未知领域,请尽快返航'
})

const AppDataSource = new DataSource({
  ...mysqlLogin,
  type: 'mysql'
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
    app.use(router.routes()).use(router.allowedMethods())
    app.listen(process.env.PORT)
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
export { AppDataSource }

// app.listen(process.env.PORT)

