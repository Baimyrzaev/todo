import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/UI/Button'
import Swal from 'sweetalert2'

import cls from './Navbar.module.scss'

const Navbar: FC = () => {
  const navigate = useNavigate()

  const goToSignInPage = () => navigate('/auth/signin')

  const logout = () => {
    Swal.fire({
      title: 'Are you sure you want to log out of your account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userId')
        goToSignInPage()
      }
    })
  }

  return (
    <div className={cls.root}>
      <h2>Todo App</h2>
      <Button
        bg="bg-red-600"
        onClick={logout}
      >logout</Button>
    </div>
  )
}

export default Navbar