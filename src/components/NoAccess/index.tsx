import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/UI/Button'
import { BsFillShieldLockFill } from 'react-icons/bs'

const NoAccess: FC = () => {
  const navigate = useNavigate()

  const goToAuthPage = () => navigate('/auth/signin')

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col w-1/5">
        <BsFillShieldLockFill
          className="w-[100px] h-[100px] mx-auto"
        />
        <h2 className="text-2xl text-center my-2">No Access</h2>
        <Button onClick={goToAuthPage}>log in</Button>
      </div>
    </div>
  )
}

export default NoAccess