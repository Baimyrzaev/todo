import { axiosRequest } from 'configs'
import { ICreateTodo, IEditTodo, ITodo } from 'types/todo'


export const getTodos = (userId: string | null) => {
  return axiosRequest.get<ITodo>(`/todos/${userId}.json`)
}

export const postTodo = (userId: string | null, body: ICreateTodo) => {
  const postBody: ITodo = {
    ...body,
    date: new Date().toLocaleString(),
    edited: false,
    completed: false,
  }

  return axiosRequest.post(`/todos/${userId}.json`, postBody)
}

export const deleteTodo = (userId: string | null, todoKey: string | undefined) => {
  return axiosRequest.delete(`/todos/${userId}/${todoKey}.json`)
}

export const completeTodo = (userId: string | null, todoKey: string | undefined, completed: boolean) => {
  const body = {
    completed: completed ? false : true,
  }

  return axiosRequest.patch(`/todos/${userId}/${todoKey}.json`, body)
}

export const editTodo = (userId: string | null, todoKey: string | undefined, body: ICreateTodo) => {
  const patchBody: IEditTodo = {
    ...body,
    edited: new Date().toLocaleString(),
  }

  return axiosRequest.patch(`/todos/${userId}/${todoKey}.json`, patchBody)
}