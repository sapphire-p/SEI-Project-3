import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MuseumShow = () => {

  const [museum, setMuseum] = useState()
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        // console.log('data ->>', data)
        setMuseum(data)
      } catch (err) {
        setHasError(true)
        console.log(hasError)
      }
    }
    getData()
  }, [id])

  // console.log('single museum ->>>', museum)
  // console.log('single museum ->>>', museum.reviews)
  return (
    <section className='section'>
      <div className='container'>
        {museum ?
          <div>
            <h2>{museum.name}</h2>
            <div className='columns'>
              <div className='column'>
                <figure className='image'>
                  <img src={museum.image} alt={`Picture of ${museum.name}`} />
                </figure>
              </div>
              <div className='column'>
                <h3>Region: {museum.region}</h3>
                <h3>Date Established: {museum.date_established}</h3>
                <hr />
                <p>{museum.description}</p>
                <hr />
                <div>
                  <h3>Collections:</h3>
                  <ul>
                    {museum.collection_types.map(type => {
                      return <li key={type}>{type}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div>
                  <h3>Reviews</h3>
                  <h3>Average Rating: {museum.averageRating}</h3>
                </div>
                <div>
                  <ul>
                    {museum.reviews.map(review => {
                      console.log(review)
                      return <div key={review._id}>
                        <li>
                          <div className='columns'>
                            <div className='column'>
                              <p>{review.comment}</p>
                            </div>
                            <div className='column'>
                              <p>{review.rating}/5</p>
                            </div>
                          </div>
                        </li>
                      </div>
                    })}
                  </ul>
                </div>
              </div>
              <div className='column'>
                <h3>Address</h3>
                <p>{museum.address}</p>
                <hr />
                <h3>Museum Website</h3>
                <p>{museum.website}</p>
              </div>
            </div>
          </div>
          :
          <h2>{hasError ? 'Something went wrong' : 'Page Loading...'}</h2>
        }
      </div>
    </section>
  )

}
export default MuseumShow