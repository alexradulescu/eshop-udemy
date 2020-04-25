import React, { FC } from 'react'
// import {
//   useHistory,
//   useLocation,
//   useParams,
//   useRouteMatch
// } from 'react-router-dom'

import { DirectoryItem } from './DirectoryItem'
import { sections } from './mockdata'

export const Directory: FC = () => {
  // const history = useHistory()
  // console.info('History: ', history)

  // const location = useLocation()
  // console.info('Location: ', location)

  // const params = useParams()
  // console.info('Params: ', params)

  // const match = useRouteMatch()
  // console.info('Match: ', match)

  return (
    <>
      {sections.map(({ title, id, imageUrl, linkUrl, size }) => (
        <DirectoryItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          size={size}
        />
      ))}
    </>
  )
}
