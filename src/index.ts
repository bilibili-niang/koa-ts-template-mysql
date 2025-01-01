import Koa from 'koa'
import { DataSource } from 'typeorm'
import { mysqlLogin } from './db/config'
import router from './router'
// const router = require('./router')

require('dotenv').config()

const app = new Koa()


app
  .use(router.routes())
// .use(router.allowedMethods())

app.use(async ctx => {
  ctx.body = 'Hello World'
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
