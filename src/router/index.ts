// 自动导出所有的路由
import fs from 'fs'
import path from 'path'
import Router from 'koa-router'

const router = new Router()

function loadRoutes(directory: string) {
  const files = fs.readdirSync(directory)
  files.forEach(async (file) => {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      // 如果是目录，则递归加载该目录下的路由
      loadRoutes(filePath)
    } else if (file === 'index.ts') {
      // 如果是 index.ts 文件，则动态导入并使用路由
      const r = await import((filePath))
      router.use(r.default.routes())
    }
  })
}

// 开始从当前目录加载路由
loadRoutes(__dirname)

export default router