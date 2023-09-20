import React from 'react'
import { Link } from 'react-router-dom'

function Card({id, title, cover}) {

  return (
      <Link to={`/logement/${id}`} className='container'>
        <div className='container-img'>
          <div className='gradient'></div>
          <img src={cover} alt={title} className="image" />
        </div>
        <h2 className="image-title">{title}</h2>
      </Link>
  )
}

export default Card
