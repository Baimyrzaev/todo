import React from 'react'

import { parseJSON } from 'helpers'
import Swal from 'sweetalert2'
import { ICreateTodo, ITodo } from 'types/todo'

import { Main } from '..'

const useMainPage = () => {
  const userId = localStorage.getItem('userId')

  const [todos, setTodos] = React.useState<ITodo[] | null>(null)

  const [isLoadingCreateTodo, setIsLoadingCreateTodo] = React.useState<boolean>(false)
  const [isLoadingDeleteTodo, setIsLoadingDeleteTodo] = React.useState<boolean>(false)
  const [isLoadingCompletedTodo, setIsLoadingCompletedTodo] = React.useState<boolean>(false)
  const [isLoadingEditTodo, setIsLoadingEditTodo] = React.useState<boolean>(false)

  const getTodos = (userId: string | null) => {
    const request = Main.API.getTodos(userId)
    request
      .then(res => {
        const data = parseJSON(res.data)

        if (!data) return setTodos([])

        setTodos(data.reverse())
      })
  }

  const postTodo = (userId: string | null, body: ICreateTodo) => {
    const request = Main.API.postTodo(userId, body)

    setIsLoadingCreateTodo(true)
    request
      .then(() => {
        getTodos(userId)
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Successfully created',
          showConfirmButton: false,
          timer: 1000,
        })
        setTimeout(() => {
          setIsLoadingCreateTodo(false)
        }, 1000)
      })
  }

  const deleteTodo = (userId: string | null, todoKey: string | undefined) => {
    const request = Main.API.deleteTodo(userId, todoKey)

    setIsLoadingDeleteTodo(true)
    request
      .then(() => {
        getTodos(userId)
        setIsLoadingDeleteTodo(false)
      })
  }

  const completeTodo = (userId: string | null, todoKey: string | undefined, completed: boolean) => {
    const request = Main.API.completeTodo(userId, todoKey, completed)

    setIsLoadingCompletedTodo(true)
    request
      .then(() => {
        getTodos(userId)
        setIsLoadingCompletedTodo(false)
      })
  }

  const editTodo = (userId: string | null, todoKey: string | undefined, body: ICreateTodo) => {
    const request = Main.API.editTodo(userId, todoKey, body)

    setIsLoadingEditTodo(true)
    request
      .then(() => {
        getTodos(userId)
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Successfully edited',
          showConfirmButton: false,
          timer: 1000,
        })
        setIsLoadingEditTodo(false)
      })
  }

  React.useEffect(() => {
    getTodos(userId)
  }, [userId])

  return {
    todos,
    isLoadingCreateTodo,
    isLoadingDeleteTodo,
    isLoadingCompletedTodo,
    isLoadingEditTodo,
    actions: {
      postTodo,
      deleteTodo,
      completeTodo,
      editTodo,
    },
  }
}

export const use = useMainPage