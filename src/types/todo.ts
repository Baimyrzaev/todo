export interface ICreateTodo {
  title: string
  description: string
}

export interface ITodo {
  title: string
  description: string
  date: string
  edited: string | boolean
  completed: boolean
  key?: string
}

export interface IEditTodo {
  title: string
  description: string
  edited: string
}

export type DeleteTodoControlCallback = (userId: string | null, todoKey: string | undefined) => void
export type CompleteTodoControlCallback = (userId: string | null, todoKey: string | undefined, completed: boolean) => void
export type EditTodoControlCallback = (userId: string | null, todoKey: string | undefined, body: ICreateTodo) => void
export type PostTodoControlCallback = (userId: string | null, body: ICreateTodo) => void