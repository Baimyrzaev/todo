import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from 'components/NotFound'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const AuthLayout: FC = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AuthLayout