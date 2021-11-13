import React from 'react'
import { Link } from 'react-router-dom'

const MuseumCard = ({ _id, name, image, region }) => {

  const handleClick = event => {
    // console.log('CLICKED')
    event.target.classList.toggle('fas')
    event.target.classList.toggle('animate__bounceIn')
  }

  // const handleCardMouseEnter = event => {
  //   event.target.classList.add('grow')
  // }

  // const handleCardMouseLeave = event => {
  //   event.target.classList.remove('grow')
  // }

  return (
    <div key={_id}  className='column is-one-quarter-desktop animate__animated animate__faster  museumCard'>
      <div className='card'>
        <div className='card-header'>
          <div className='card-header-title cardTitle is-size-7'>{name}</div>
          <a onClick={handleClick} className="bookmark far animate__animated animate__faster  fa-bookmark"></a>
        </div>
        <Link to={`/museums/${_id}`}>
          <div className='card-image'>
            <figure className='image is-1'>
              <img src={image} alt={`Picture of ${name}`} />
            </figure>
          </div>
          <div className='card-content p-2'>
            <h4 className='is-size-7 cardRegion'>{region}</h4>
          </div>
        </Link>
      </div>
          
    </div>
  )

}
export default MuseumCard