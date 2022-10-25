import React from 'react'
import { useNavigate } from 'react-router-dom'

import { auth, IAuth } from 'configs'
import Swal from 'sweetalert2'
import { IUser } from 'types/user'

import { Auth } from '..'


const useSignUp = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const goToSignInPage = () => navigate('/auth/signin')

  const signUp = (body: IAuth) => {
    const request = auth(body, false)
    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        if (!data) return

        const postBody: IUser = {
          email: body.email,
          userId: data.localId,
        }

        localStorage.setItem('userId', data.localId)
        Auth.API.postUser(data.localId, postBody)
        Swal.fire({
          position: 'center',
          title: 'Successful registration!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
        })
        setTimeout(() => {
          goToSignInPage()
        }, 1000)
      })
      .catch(err => {
        const error = err.response.data.error.message
        Swal.fire({
          position: 'center',
          title: error,
          icon: 'error',
          showConfirmButton: false,
          timer: 1000,
        })

      })
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    actions: {
      signUp,
    },
  }
}

export const use = useSignUp
