import React, { FC, useState, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

interface Props {
  signOut: () => void
}

export const Header: FC<Props> = ({ signOut }) => {
  const user = useSelector(state => state.user.currentUser)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const dropdownRef = useRef(null)

  const showDropdown = () => setIsCollapsed(!isCollapsed)
  useOnClickOutside(dropdownRef, () => {
    setIsCollapsed(false)
  })

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <span className="text-primary">E</span> Shop
        </Link>

        <div className="collapse navbar-collapse" id="navbarDark">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" exact>
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <span className="nav-link" onClick={signOut}>
                  {user && user.displayName ? user.displayName : '???'}
                </span>
              </li>
            )}
            <li className="nav-item dropdown">
              <DropdownToggle
                className="nav-link dropdown-toggle"
                onClick={showDropdown}
              >
                <FontAwesomeIcon icon={faShoppingBag} />
              </DropdownToggle>
              <div
                className={`dropdown-menu dropdown-menu-right ${isCollapsed &&
                  'show'}`}
                aria-labelledby="navbarDropdown"
                ref={dropdownRef}
              >
                <span className="dropdown-item">Design</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const DropdownToggle = styled.span`
  cursor: pointer;
`
