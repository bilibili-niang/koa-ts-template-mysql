import Koa from 'koa'
import { DataSource } from 'typeorm'
import { mysqlLogin } from './db/config'
import router from './router'
import swaggerDec from './swaggerDec/index'
import bodyParser from 'koa-bodyparser'

require('dotenv').config()

const app = new Koa()

app
  .use(bodyParser())
  .use(async (ctx, next) => {
    ctx.dataSource = AppDataSource
    await next()
  })
  .use(swaggerDec.routes())
  .use(swaggerDec.allowedMethods())
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
    console.log('数据库连接初始化成功')
  })
  .catch((err) => {
    console.error('数据库连接初始化失败', err)
  })
export { AppDataSource }

// app.listen(process.env.PORT)

