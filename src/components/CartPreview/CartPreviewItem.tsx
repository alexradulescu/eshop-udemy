import React, { FC } from 'react'

import { Product } from '../../interfaces'

interface Props {
  product: Product
}

export const CartPreviewItem: FC<Props> = ({
  product: { name, price, quantity }
}) => {
  return (
    <li className="list-group-item d-flex">
      {name} - {price} X {quantity}
    </li>
  )
}
