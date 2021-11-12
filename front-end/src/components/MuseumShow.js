import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddReviewForm from './AddReviewForm'
// import { Carousel } from 'react-carousel-minimal'

const MuseumShow = () => {

  const [museum, setMuseum] = useState()
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  const [userId, setUserId] = useState()

  // const [galleryData, setGalleryData] = useState([])

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

  const handleDelete = () => {
    console.log('delete pressed')
  }

  // ------------------------



  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/museums/${id}`)
  //       // console.log('data ->', data)
  //       setGalleryData([data.image])
  //       // setGalleryData(data)
  //     } catch (err) {
  //       setHasError(true)
  //       console.log(hasError)
  //     }
  //   }
  //   getData()
  // }, [id])

  // const galleryData = [
  //   {
  //     image: 'https://i.imgur.com/IglrZwg.png'
  //   }
  // ]

  // console.log('gallery data->', museum.image)
  // console.log(galleryData)
  return (
    <>
      {museum ?
        <>
          <section className='hero is-small has-text-centered m-2'>
            <div className='hero-body'>
              <p className='title'>{museum.name}</p>
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
                      <hr />
                    </div>
                    <div className='add-review-form'>
                      <h2>Write your own review to let the Museum know your thoughts!</h2>
                      <hr />
                      <div>
                        <AddReviewForm />
                      </div>
                    </div>
                    <div>
                      <ul>
                        {museum.reviews.map(review => {
                          console.log(review)
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
                                {(review.owner._id === userId.id) ? <button className='button' onClick={handleDelete}>X</button> : <div></div> }
                              </div>
                              <p>- {review.owner.username}</p>
                            </div>
                          </li>
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
              <div>
                {/* <Carousel 
                  
                /> */}
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