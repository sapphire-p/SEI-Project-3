import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddReviewForm from './AddReviewForm'
import { Carousel } from 'react-carousel-minimal'

const MuseumShow = () => {

  const [museum, setMuseum] = useState()
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  const [userId, setUserId] = useState()

  const [galleryData, setGalleryData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        // console.log('data ->', data)
        setMuseum(data)
        // setGalleryData(data)
      } catch (err) {
        setHasError(true)
        console.log(hasError)
      }
    }
    getData()
  }, [id])

  // ------------ for delete

  const [token, setToken] = useState()

  useEffect(() => {
    const getTokenFromLocalStorage = () => {
      setToken(window.localStorage.getItem('token'))
    }
    getTokenFromLocalStorage()
  }, [])

  useEffect(() => {
    const getUserId = async () => {
      try {
        if (!token) return setUserId({
          id: ''
        })
        const { data } = await axios.get(
          '/api/profile',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        setUserId(data)
      } catch (err) {
        console.log(err)
      }
    }
    getUserId()
  }, [token])

  const handleDelete = async (event) => {
    console.log(`/api/museums/${id}/reviews/${event.target.id}`)
    try {
      axios.delete(
        `/api/museums/${id}/reviews/${event.target.id}`, 
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  // ------------------------ CAROUSEL


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        const multiImages = data.multiple_images
        const imagesJoined = multiImages.map(image => {
          return {
            image
          }
        })
        setGalleryData(imagesJoined)
      } catch (err) {
        setHasError(true)
        console.log(hasError)
      }
    }
    getData()
  }, [id])

  // console.log(galleryData)
  return (
    <>
      {museum ?
        <>
          <section className='hero is-small m-2'>
            <div className='hero-body is-flex is-justify-content-space-between is-align-content-center'>
              <div className='has-text-left'>
                <p className='title'>{museum.name}</p>
                <hr />
                <a href={museum.website}>Official Website</a>
              </div>
              <p className='subtitle has-text-right'>
                Region: {museum.region}
                <br />
                Date Established: {museum.date_established}
              </p>
            </div>
          </section>
          <section className='section px-6 py-3'>
            <div className='container'>
              <div>
                <div className='columns'>
                  <div className='column'>
                    <figure className='image'>
                      <img src={museum.image} alt={`Picture of ${museum.name}`} />
                    </figure>
                  </div>
                  <div className='column'>
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
                    <div>
                      <hr />
                      <h3>Address</h3>
                      <p>{museum.address}</p>
                    </div>
                  </div>
                </div>
                <div className='columns'>
                  <div className='column is-half'>
                    <div>
                      <h3>Reviews</h3>
                      <h3>Average Rating: {museum.averageRating}</h3>
                      <hr />
                    </div>
                    <div className='add-review-form'>
                      <h2>Write your own review to let the Museum know your thoughts!</h2>
                      <hr />
                    </div>
                    <div>
                      <ul>
                        {museum.reviews.map(review => {
                          return <li key={review._id}>
                            <div className='columns'>
                              <div className='column'>
                                <p>{review.comment}</p>
                              </div>
                              <div className='column'>
                                <p>{review.rating}/5</p>
                              </div>
                            </div>
                            <div className='is-flex is-flex-direction-row-reverse reviewOwner'>
                              <div>
                                {(review.owner._id === userId.id) ? <button className='button' id={review._id} onClick={handleDelete}>X</button> : <div></div>}
                              </div>
                              <p>- {review.owner.username}</p>
                            </div>
                          </li>
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className='column'>
                    <AddReviewForm />
                  </div>
                </div>
              </div>
              <div className='columns'>
                <div className='column is-half'>
                  <Carousel
                    data={galleryData}
                    dots={true}
                    slideImageFit='cover'
                  />
                </div>
              </div>
            </div>
          </section>
        </>
        :
        <h2>{hasError ? 'Something went wrong' : 'Page Loading...'}</h2>
      }
    </>
  )

}
export default MuseumShow