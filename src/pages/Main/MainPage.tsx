import React, { FC } from 'react'

import NoAccess from 'components/NoAccess'

import { Main } from '.'

import CreateTodo from './components/CreateTodo/CreateTodo'
import Navbar from './components/Navbar/Navbar'
import Todos from './components/Todos/Todos'

const MainPage: FC = () => {
  const userId = localStorage.getItem('userId')

  const {
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
  } = Main.Hook.MainPage.use()

  if (!userId) return <NoAccess />

  return (
    <>
      <Navbar />
      <CreateTodo
        userId={userId}
        isLoadingCreateTodo={isLoadingCreateTodo}
        postTodo={postTodo}
      />
      <Todos
        todos={todos}
        userId={userId}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
        isLoadingDeleteTodo={isLoadingDeleteTodo}
        isLoadingCompletedTodo={isLoadingCompletedTodo}
        isLoadingEditTodo={isLoadingEditTodo}
      />
    </>
  )
}

export default MainPage