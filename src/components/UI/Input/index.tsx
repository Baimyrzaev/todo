import React from 'react'

interface InputProps {
  type?: string
  label: string
  placeholder: string
  error?: any | boolean
}

type Ref = HTMLInputElement

const Input = React.forwardRef<Ref, InputProps>(({
  type = 'text',
  label,
  placeholder,
  error,
  ...rest
}, ref) => {
  return (
    <label className="flex flex-col my-2">
      <span>{label}</span>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`p-2 my-2 border rounded text-[16px] ${error ? 'border-red-500' : 'focus:border-blue-500'} transition-[400ms] outline-none`}
        {...rest}
      />
      <span>{error && error}</span>
    </label>
  )
})

export default Input