import React, { FC } from 'react'

import Loader from 'components/Loader'
import { CompleteTodoControlCallback, DeleteTodoControlCallback, EditTodoControlCallback, ITodo } from 'types/todo'

import TodoItem from '../TodoItem/TodoItem'

import cls from './Todos.module.scss'

interface TodosProps {
  todos: ITodo[] | null
  userId: string | null
  isLoadingDeleteTodo: boolean
  isLoadingCompletedTodo: boolean
  isLoadingEditTodo: boolean
  deleteTodo: DeleteTodoControlCallback
  completeTodo: CompleteTodoControlCallback
  editTodo: EditTodoControlCallback
}

const EmptyTodos: FC = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <h2 className="text-3xl">Todos list is empty</h2>
    </div>
  )
}

const Todos: FC<TodosProps> = ({
  todos,
  userId,
  deleteTodo,
  completeTodo,
  editTodo,
  isLoadingDeleteTodo,
  isLoadingCompletedTodo,
  isLoadingEditTodo,
}) => {
  if (!todos) return <Loader />

  if (!todos.length) return <EmptyTodos />

  return (
    <div className={cls.root}>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.key}
            todo={todo}
            userId={userId}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
            isLoadingDeleteTodo={isLoadingDeleteTodo}
            isLoadingCompletedTodo={isLoadingCompletedTodo}
            isLoadingEditTodo={isLoadingEditTodo}
          />
        ))
      }
    </div>
  )
}

export default Todos
