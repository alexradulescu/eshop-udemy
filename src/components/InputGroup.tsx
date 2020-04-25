import React, { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputGroup: FC<Props> = ({ label, value, ...inputProps }) => {
  return (
    <label className="form-group d-block">
      <span>{label}</span>
      <input className="form-control" value={value} {...inputProps} />
    </label>
  )
}
