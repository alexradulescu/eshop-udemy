import { CART_ACTION_TYPES } from './cart.types'

const INITIAL_STATE = {
  hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}
