import React, { FC } from 'react'
import { Link } from 'react-router-dom'

enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

interface Props {
  title: string
  subTitle?: string
  imageUrl: string
  size?: SIZE | string
  linkUrl: string
}

export const DirectoryItem: FC<Props> = ({
  title,
  subTitle,
  size,
  imageUrl,
  linkUrl
}) => {
  const getClassName = () => {
    if (size === SIZE.LARGE) {
      return 'col-sm-6'
    }
    return 'col-sm-4'
  }

  const style = {
    backgroundImage: `url(${imageUrl}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '56.25%'
  }

  return (
    <div className={getClassName()}>
      <Link className={`card mb-5 `} to={linkUrl}>
        <div className="card-img" style={style} />
        <div className="card-img-overlay text-white">
          <h5 className="card-title">{title.toUpperCase()}</h5>
          {subTitle && <p className="card-text">{subTitle}</p>}
        </div>
      </Link>
    </div>
  )
}
