import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm'

@Entity('markdown_files') // 如果表名不是复数形式，这里应使用正确的表名
export class MarkdownFile {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: true, default: 'adminEmail', comment: '拥有者邮箱' })
  email?: string

  @Column({ nullable: true, comment: '文章名称' })
  title?: string

  @Column({ type: 'text', nullable: true, comment: '文章内容' }) // 移除了默认值
  content?: string

  @Column({ nullable: true, default: '0', comment: '文章的状态' })
  states?: string

  @Column({ nullable: true, comment: '文章的描述' })
  description?: string

  @Column({ nullable: true, comment: '文章的点赞数量' })
  praise?: string

  @Column({ nullable: true, default: '0', comment: '文章的浏览量' })
  view?: string

  @Column({ nullable: false, default: '1', comment: '文章的审核,1通过,0未通过' })
  audit!: string

  @Column({ nullable: true, comment: '文章的标签1' })
  tag1?: string

  @Column({ nullable: true, comment: '文章的标签2' })
  tag2?: string

  @Column({ nullable: true, comment: '文章的标签3' })
  tag3?: string

  @Column({ nullable: true, comment: '文章来源,如果是来自于其他网站,则从其他网站上爬取' })
  source?: string

  @Column({ nullable: true })
  url?: string

  @Column({
    nullable: true,
    default: '/images/headImg/defaultHeadImg.png',
    comment: '文章自定义头图,如果没有则会加载默认,是否使用默认由前端来判断'
  })
  headImg?: string

  @Column({ nullable: true, default: 'blog', comment: '文章类型,默认为blog' })
  type?: string

  @Column({ nullable: true, default: 'blog', comment: '是否有源头' })
  hasOriginal?: string

  @Column({ nullable: true, default: '0', comment: '点赞数量' })
  diggCount?: string

  @Column({ nullable: true, default: 'blog', comment: '文章类型' })
  articleType?: string

  @Column({ nullable: true, default: '0', comment: '文章置顶等级' })
  recommendLevel?: string

  @CreateDateColumn({
    name: 'createTime',
    nullable: true,
  })
  createTime?: Date

  @UpdateDateColumn({
    name: 'updateTime',
    nullable: true,
  })
  updateTime?: Date

  @DeleteDateColumn({
    name: 'destroyTime',
    nullable: true,
  })
  destroyTime?: Date
}