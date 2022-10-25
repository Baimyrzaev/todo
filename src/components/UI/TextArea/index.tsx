import React from 'react'

interface TextAreaProps {
  label: string
  placeholder: string
  error?: boolean
}

type Ref = HTMLTextAreaElement

const TextArea = React.forwardRef<Ref, TextAreaProps>(({
  label,
  placeholder,
  error,
  ...rest
}, ref) => {
  return (
    <label className="flex flex-col my-2">
      <span>{label}</span>
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={`p-2 my-2 border rounded text-[16px] ${error ? 'border-red-500' : 'focus:border-blue-500'} transition-[400ms] h-[150px] outline-none`}
        {...rest}
      />
      <span>{error && error}</span>
    </label>
  )
})

export default TextArea