import React from 'react'
import { Link } from 'react-router-dom'

const MuseumCard = ({ _id, name, image, region }) => {

  return (
    <div key={_id} className='column is-one-quarter-desktop'>
      <Link to={`/museums/${_id}`}>
        <div className='card'>
          <div className='card-header'>
            <div className='card-header-title cardTitle is-size-7'>{name}</div>
          </div>
          <div className='card-image'>
            <figure className='image is-1'>
              <img src={image} alt={`Picture of ${name}`} />
            </figure>
          </div>
          <div className='card-content'>
            <h4>{region}</h4>
          </div>
        </div>
      </Link>
    </div>
  )

}
export default MuseumCard