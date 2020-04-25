import React, { FC, useState, ReactNode } from 'react'

type ButtonMood =
  | 'primary'
  | 'info'
  | 'danger'
  | 'success'
  | 'warning'
  | 'default'

interface Props {
  children: ReactNode
  buttonFormat: ReactNode
  buttonMood?: ButtonMood
}

export const Drodown: FC<Props> = ({
  children,
  buttonFormat,
  buttonMood = 'default'
}) => {
  return (
    <div className="dropdown">
      <button
        className={`btn btn-${buttonMood}dropdown-toggle`}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {buttonFormat}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {children}
        {/* <h6 className="dropdown-header">Dropdown header</h6>
                <span className="dropdown-item">Action</span>
                <span className="dropdown-item active">Active</span>
                <span className="dropdown-item disabled">Disabled</span>
                <div className="dropdown-divider" />
                <span className="dropdown-item">Another action</span> */}
      </div>
    </div>
  )
}
