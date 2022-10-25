import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/UI/Button'
import { TbError404 } from 'react-icons/tb'

const NotFound: FC = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col w-1/5">
        <TbError404
          className="w-[100px] h-[100px] mx-auto"
        />
        <h2 className="text-2xl text-center my-2">Not Found</h2>
        <Button onClick={goBack}>back</Button>
      </div>
    </div>
  )
}

export default NotFound