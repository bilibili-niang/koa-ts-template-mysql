import { Method } from './lib/utils/constant'
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'
import { registry } from './lib/registry'
import { ItemMeta } from './lib/swagger-router'

extendZodWithOpenApi(z)

export interface ParsedArgs<T> {
  query?: T;
  params?: T;
  body?: T;
}

export { z, registry }

export * from './lib/decorator'
export * from './lib/swagger-router'
export type { Method, ItemMeta }
