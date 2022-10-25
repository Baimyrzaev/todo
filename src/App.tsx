import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from 'components/NotFound'
import MainPage from 'pages/Main/MainPage'

import AuthLayout from './pages/Auth/AuthLayout'


const App: FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App