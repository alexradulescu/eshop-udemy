import { CART_ACTION_TYPES } from './cart.types'

const INITIAL_STATE = {
  hidden: true,
  cartProducts: [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25
    }
  ]
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CART_ACTION_TYPES.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...[action.payload]]
      }
    default:
      return state
  }
}
