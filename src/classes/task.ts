import { Category } from '../types/types.js'

interface Logger {
  logCreationDate: (addition: string) => void
}

export class TaskClass implements Logger {
  public title: string
  done: boolean
  category?: Category
  private createdAt: Date

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.title = name
    this.done = done
    this.category = category
    this.createdAt = new Date()
  }

  logCreationDate(extra?: string) {
    console.log(`Created task: ${this.createdAt} ${extra || ''}`)
  }
}
