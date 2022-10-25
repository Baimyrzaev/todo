import React from 'react'

interface ButtonProps {
  children: React.ReactNode | string
  loading?: boolean
  bg?: string
  onClick?: () => void
}

type Ref = HTMLButtonElement

const Button = React.forwardRef<Ref, ButtonProps>(({
  children,
  loading = false,
  bg = 'bg-blue-500',
  onClick,
  ...rest
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={loading}
      className={`py-2 px-5 my-2 text-[16px] rounded ${loading ? 'bg-blue-200' : `${bg} active:bg-blue-200`} text-white`}
      {...rest}
    >{children}</button>
  )
})

export default Button