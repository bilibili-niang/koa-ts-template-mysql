import { User } from '../entity/user'

export const mysqlLogin = {
  host: 'localhost', // 数据库地址
  port: 3306, // 端口
  username: 'root',
  password: '123456',
  database: 'markdownfile',
  entities: [User],
  synchronize: true,
  logging: false
}
