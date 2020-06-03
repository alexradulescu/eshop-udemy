import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { addProduct } from '../../redux'

interface CollectionItemProps {
  product: any
}

export const CollectionItem: FC<CollectionItemProps> = product => {
  const style = {
    backgroundImage: `url(${product.imageUrl}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '133.4%'
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    console.info(product)
    dispatch(addProduct(product))
  }

  return (
    <div className="col-sm-4 col-xs-6 mb-3">
      <div className="card bg-white">
        <div className="card-img-top" style={style} />
        <div className="card-body">
          <p className="card-text">{product.name}</p>
          <button className="btn btn-sm btn-primary" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
