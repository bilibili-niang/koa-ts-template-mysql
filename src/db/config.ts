import { User } from '../entity/user'
import { MarkdownFile } from '../entity/markdown'

require('dotenv').config()

export const mysqlLogin = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, MarkdownFile],
  synchronize: true,
  logging: true
}
