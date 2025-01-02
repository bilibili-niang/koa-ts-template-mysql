import Router from 'koa-router'
import { Context } from 'koa'

export class RouterBuilder {
  private router: Router

  constructor() {
    this.router = new Router()
  }

  build(): Router {
    return this.router
  }

  // 添加路由的方法
  addRoute(path: string, handler: (ctx: Context) => void): void {
    this.router.get(path, handler)
  }
}