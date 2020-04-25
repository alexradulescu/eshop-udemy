import React, { FC } from 'react'

import { SHOP_DATA } from './shop.data'
import { CollectionPreview } from '../../components'

export const ShopPage: FC = () => {
  return (
    <main className="container">
      {SHOP_DATA.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </main>
  )
}
