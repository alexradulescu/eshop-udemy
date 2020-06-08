import { CART_ACTION_TYPES } from './cart.types'

const INITIAL_STATE = {
  hidden: true,
  cartProducts: [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
      quantity: 1
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
      const productInCartIndex = state.cartProducts.findIndex(
        item => item.id === action.payload.id
      )
      let updatedCartProducts = state.cartProducts

      if (productInCartIndex < 0) {
        const product = {
          quantity: 1,
          ...action.payload
        }
        updatedCartProducts = [...updatedCartProducts, ...[product]]
      } else {
        console.log(productInCartIndex)
        updatedCartProducts[productInCartIndex].quantity++
      }
      return {
        ...state,
        cartProducts: updatedCartProducts
      }
    default:
      return state
  }
}
