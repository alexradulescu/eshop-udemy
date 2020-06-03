import { CART_ACTION_TYPES } from './cart.types'

export const toggleDropdown = () => ({
  type: CART_ACTION_TYPES.TOGGLE_DROPDOWN
})

export const addProduct = product => ({
  type: CART_ACTION_TYPES.ADD_PRODUCT,
  payload: product
})

export const removeProduct = product => ({
  type: CART_ACTION_TYPES.REMOVE_PRODUCT,
  payload: product
})
