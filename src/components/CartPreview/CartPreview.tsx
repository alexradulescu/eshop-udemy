import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { store } from '../../redux'
import { Button } from '../Button'
import { CartPreviewItem } from './CartPreviewItem'
import { Product } from '../../interfaces'

export const CartPreview: FC = () => {
  const products = useSelector(state => state.cart.cartProducts)

  console.log('All products in cart', products)

  return (
    <div className="px-2">
      <ul className="list-group">
        {products.map(product => (
          <CartPreviewItem key={product.id} product={product} />
        ))}
      </ul>
      <Button mood="primary" className="btn-block btn-sm">
        Checkout
      </Button>
    </div>
  )
}
