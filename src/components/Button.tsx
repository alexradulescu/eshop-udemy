import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react'

type BUTTON_MOOD =
  | 'success'
  | 'error'
  | 'danger'
  | 'primary'
  | 'info'
  | 'default'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mood?: BUTTON_MOOD
  size?: string
  children: ReactNode
}

export const Button: FC<Props> = ({
  mood = 'default',
  size,
  children,
  ...buttonProps
}) => {
  return (
    <button
      className={`btn btn-${mood} ${size && `btn-${size}`}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
