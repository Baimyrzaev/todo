import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from 'components/UI/Button'
import Input from 'components/UI/Input'
import { IAuth } from 'configs'
import { Forms } from 'helpers/Forms'

import { Auth } from '..'

const SignIn: FC = () => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<IAuth>()

  const {
    isLoading,
    actions: {
      signIn,
    },
  } = Auth.Hook.SignIn.use()

  const onSubmit = handleSubmit((data) => signIn(data))

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-[500px] mx-4 p-4 border rounded shadow-md"
      >
        <h2 className="text-center text-2xl">Authorization</h2>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          error={errors.email && errors.email.message}
          {...register('email', Forms.Options.Email)}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          error={errors.password && errors.password.message}
          {...register('password', Forms.Options.Password)}
        />
        <Button
          loading={isLoading}
          onClick={onSubmit}
        >auth</Button>
        <p className="text-gray-500 text-center my-2">or</p>
        <Link
          className="text-black font-[500] text-center"
          to="/auth/signup"
        >sign up</Link>
      </form>
    </div>
  )
}

export default SignIn