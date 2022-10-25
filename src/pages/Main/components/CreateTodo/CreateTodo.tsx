import React, { FC } from 'react'
import { useForm } from 'react-hook-form'


import Button from 'components/UI/Button'
import Input from 'components/UI/Input'
import TextArea from 'components/UI/TextArea'
import { Forms } from 'helpers/Forms'
import { ICreateTodo, PostTodoControlCallback } from 'types/todo'

import cls from './CreateTodo.module.scss'

interface CreateTodoProps {
  userId: string | null
  isLoadingCreateTodo: boolean
  postTodo: PostTodoControlCallback
}

const CreateTodo: FC <CreateTodoProps>= ({
  userId,
  isLoadingCreateTodo,
  postTodo,
}) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm<ICreateTodo>()

  const onSubmit = handleSubmit((data) => {
    postTodo(userId, data)
    reset({
      title: '',
      description: '',
    })
  })

  return (
    <div className={cls.root}>
      <form
        onSubmit={onSubmit}
      >
        <h2>New Todo</h2>
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
            loading={isLoadingCreateTodo}
            onClick={onSubmit}
          >create</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo