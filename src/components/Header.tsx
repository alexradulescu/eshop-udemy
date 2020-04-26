import React, { FC, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import { CartPreview } from './CartPreview'
import { toggleDropdown } from '../redux'

interface Props {
  signOut: () => void
}

export const Header: FC<Props> = ({ signOut }) => {
  const user = useSelector(state => state.user.currentUser)
  const cartDropdownHidden = useSelector(state => state.cart.hidden)
  const dispatch = useDispatch()

  const dropdownRef = useRef(null)

  const showDropdown = () => {
    dispatch(toggleDropdown())
  }
  useOnClickOutside(dropdownRef, (e: MouseEvent) => {
    if (e?.target?.className?.includes && !e.target.className.includes('dropdown-toggle')) {
      dispatch(toggleDropdown())
    }
  })

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-sm">
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
                className={`dropdown-menu dropdown-menu-right ${!cartDropdownHidden &&
                  'show'}`}
                aria-labelledby="navbarDropdown"
                ref={dropdownRef}
              >
                <CartPreview />
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
