import React, { FC } from 'react'

import { Button } from '../Button'
import { CartPreviewItem } from './CartPreviewItem'

export const CartPreview: FC = () => {
  return (
    <div className="px-2">
      <ul className="list-group">
        <CartPreviewItem />
        <CartPreviewItem />
        <CartPreviewItem />
      </ul>
      <Button mood="primary" className="btn-block btn-sm">
        Checkout
      </Button>
    </div>
  )
}
