import 'reflect-metadata'

// 装饰器工厂函数,看不懂
export function Route(path: string): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      console.log(`Handling route ${path}`)
      return await originalMethod.apply(this, args)
    }

    Reflect.defineMetadata('routePath', path, target, propertyKey)

    return descriptor
  }
}