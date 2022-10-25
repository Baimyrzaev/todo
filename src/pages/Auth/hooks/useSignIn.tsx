import React from 'react'
import { useNavigate } from 'react-router-dom'

import { auth, IAuth } from 'configs'
import Swal from 'sweetalert2'

const useSignIn = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const navigate = useNavigate()

  const goToTodoPage = () => navigate('/')

  const signIn = (body: IAuth) => {
    const request = auth(body, true)

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        if (!data) return

        localStorage.setItem('userId', data.localId)

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Welcome',
          showConfirmButton: false,
          timer: 1000,
        })
        setTimeout(() => {
          goToTodoPage()
        }, 1000)
      })
      .catch(err => {
        const error = err.response.data.error.message

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1000,
        })
      })
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    actions: {
      signIn,
    },
  }
}

export const use = useSignIn
