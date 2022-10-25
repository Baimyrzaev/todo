import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import ModalContainer from 'components/ModalContainer'
import Button from 'components/UI/Button'
import Input from 'components/UI/Input'
import TextArea from 'components/UI/TextArea'
import { Forms } from 'helpers/Forms'
import Swal from 'sweetalert2'
import { CompleteTodoControlCallback, DeleteTodoControlCallback, EditTodoControlCallback, ICreateTodo, ITodo } from 'types/todo'

import cls from './TodoItem.module.scss'

interface TodoItemProps {
  todo: ITodo
  userId: string | null
  isLoadingDeleteTodo: boolean
  isLoadingCompletedTodo: boolean
  isLoadingEditTodo: boolean
  deleteTodo: DeleteTodoControlCallback
  completeTodo: CompleteTodoControlCallback
  editTodo: EditTodoControlCallback
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  userId,
  isLoadingDeleteTodo,
  isLoadingCompletedTodo,
  isLoadingEditTodo,
  deleteTodo,
  completeTodo,
  editTodo,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(false)

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm<ICreateTodo>()

  const {
    title,
    description,
    date,
    edited,
    completed,
    key,
  } = todo

  const onDelete = (key: string | undefined) => {
    Swal.fire({
      title: 'Are you sure you want to delete it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(userId, key)
      }
    })
  }

  const onOpen = () => {
    setIsActive(true)
    reset({
      title,
      description,
    })
  }

  const onSubmit = handleSubmit((data) => {
    editTodo(userId, key, data)
    setIsActive(false)
  })

  return (
    <>
      <div
        className={cls.root}
        style={completed ? {
          textDecoration: 'line-through',
          backgroundColor: '#efefef',
        } : undefined}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={cls.editBlock}>{date} <span>{edited && `last edit: ${edited}`}</span></div>
        <div className={cls.buttonsContainer}>
          <Button
            bg="bg-red-500"
            loading={isLoadingDeleteTodo}
            onClick={() => onDelete(key)}
          >delete</Button>
          <Button
            bg="bg-blue-500"
            onClick={() => onOpen()}
          >edit</Button>
          <Button
            bg="bg-green-500"
            loading={isLoadingCompletedTodo}
            onClick={() => completeTodo(userId, key, completed)}
          >complete</Button>
        </div>
      </div>
      <ModalContainer
        isActive={isActive}
        setIsActive={setIsActive}
      >
        <form
          className={cls.modalFormContainer}
          onClick={(e: React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
          onSubmit={onSubmit}
        >
          <h2>Edit</h2>
          <div>
            <Input
              label="Title"
              placeholder="Enter title"
              error={errors.title && true}
              {...register('title', Forms.Options.SimpleField)}
            />
            <TextArea
              label="Description"
              placeholder="Enter description"
              {...register('description')}
            />
            <Button
              loading={isLoadingEditTodo}
              onClick={onSubmit}
            >edit</Button>
          </div>
        </form>
      </ModalContainer>
    </>
  )
}

export default TodoItem