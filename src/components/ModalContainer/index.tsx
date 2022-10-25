import React, { FC } from 'react'

interface ModalContainerProps {
  children: React.ReactNode
  isActive: boolean
  setIsActive: (item: boolean) => void
}

const ModalContainer: FC<ModalContainerProps> = ({
  children,
  isActive,
  setIsActive,
}) => {

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-gray-500/50 fixed top-0 left-0 transition-[600ms] ${isActive ? 'scale-1' : 'scale-0'}`}
      onClick={() => setIsActive(false)}
    >
      {children}
    </div>
  )
}

export default ModalContainer
