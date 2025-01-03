import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm'

@Entity('markdown_users')
export class User {
  // 指定生成uuid
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  name!: string

  @Column({ select: false })
  password!: string

  @Column()
  email!: string


  @CreateDateColumn({
    name: 'createTime',
    nullable: true,
  })
  createTime: Date | undefined

  @UpdateDateColumn({
    name: 'updateTime',
    nullable: true,
  })
  updateTime: Date | null | undefined

  // 使用 @DeleteDateColumn 自动管理删除时间
  @DeleteDateColumn({
    name: 'deleteAt',
    nullable: true,
  })
  deletedDate?: Date // 使用可选的 Date 类型

  // 使用 @VersionColumn 自动管理乐观锁版本号
  @VersionColumn()
  version?: number
}