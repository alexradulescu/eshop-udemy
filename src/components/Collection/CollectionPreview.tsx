import React, { FC } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { CollectionItem } from './CollectionItem'

interface CollectionPreviewProps {
  id: number
  title: string
  routeName: string
  items: any[]
}

export const CollectionPreview: FC<CollectionPreviewProps> = ({
  id,
  title,
  routeName,
  items
}) => {
  const match = useRouteMatch()

  return (
    <section className="mb-3">
      <h3>
        <Link to={`${match.path}/${id}`}>{title}</Link>
      </h3>
      <div className="row">
        {items.slice(0, 3).map(collection => (
          <CollectionItem key={collection.id} {...collection} />
        ))}
      </div>
    </section>
  )
}
