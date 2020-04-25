import React, { FC } from 'react'

interface CollectionItemProps {
  name: string
  imageUrl: string
}

export const CollectionItem: FC<CollectionItemProps> = ({ name, imageUrl }) => {
  const style = {
    backgroundImage: `url(${imageUrl}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '133.4%'
  }

  return (
    <div className="col-sm-4 col-xs-6 mb-3">
      <div className="card">
        <div className="card-img-top" style={style} />
        <div className="card-body">
          <p className="card-text">{name}</p>
          <button className="btn btn-sm btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
