import { SwaggerRouter } from 'koa-swagger-decorator'

import path from 'path'

const router = new SwaggerRouter()

// swagger docs avaliable at http://localhost:3100/swagger-html
router.swagger({
  title: 'blogV2',
  description: 'API DOC',
  version: '1.0.0'
})
// 查找对应目录下的class
router.mapDir(path.resolve(__dirname, '../controllers/'))

export default router
