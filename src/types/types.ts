export interface TaskOld {
  title: string
  done: boolean
  category?: Category // optional properties
}

// type aliasing
// export type Category = 'general' | 'work' | 'gym' | 'hobby'  // type literal  , union types

export enum Category {
  GENERAL = 'general',
  WORK = 'work',
  HOBBY = 'hobby',
  GYM = 'gym',
}
