import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddReviewForm from './AddReviewForm'
// import { Carousel } from 'react-carousel-minimal'
import ReviewsList from './ReviewsList'
import StarRatings from 'react-star-ratings'
import AddingDeletingToFavourites from './AddingDeletingToFavourites'
import Carousel from './Carousel'

import { ShareSocial } from 'react-share-social'

const MuseumShow = () => {

  const [museum, setMuseum] = useState()
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  // const [galleryData, setGalleryData] = useState([])

  const [avgRat, setAvgRat] = useState(0)

  const style = {
    // background: 'linear-gradient(45deg, #FF6B8B 100%, #FF8E53 0%)',
    background: 'none',
    // background: ,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px'
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }

  // -------------

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        // console.log('data ->', data)
        setMuseum(data)
        // setGalleryData(data)
      } catch (err) {
        setHasError(true)
        // console.log(hasError)
      }
    }
    getData()
  }, [id])

  // ------------------------ CAROUSEL

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/museums/${id}`)
  //       const multiImages = data.multiple_images
  //       const imagesJoined = multiImages.map(image => {
  //         return {
  //           image
  //         }
  //       })
  //       setGalleryData(imagesJoined)
  //     } catch (err) {
  //       setHasError(true)
  //       console.log(hasError)
  //     }
  //   }
  //   getData()
  // }, [id])

  // ------ STAR FIX <- if museum isn't rated the return in the back-end is 'not yet rated', 
  // ------------------ so this function says if a non-number is being returned, then return 0

  useEffect(() => {
    const getRating = async () => {
      try {
        if (isNaN(museum.averageRating)) setAvgRat(0)
        else setAvgRat(museum.averageRating)
      } catch (err) {
        console.log(err)
      }
    }
    getRating()
  }, [museum])

  // ---------------------------------------


  return (
    <>
      {museum ?
        <>
          <section className='hero is-small'>
            <div className='hero-body is-flex is-justify-content-space-between is-align-content-center singleMuseumHeroBody'>
              <div className='has-text-left'>
                <p className='title has-text-white is-size-6-mobile'>{museum.name}</p>
                <hr />
                <div className='is-flex is-justify-content-space-between'>
                  <a href={museum.website} className='has-text-white is-size-5 has-text-weight-bold is-size-7-mobile'>Official Website</a>
                  <StarRatings
                    rating={parseFloat(avgRat)}
                    numberOfStars={5}
                    starRatedColor='gold'
                    starDimension='18px'
                    starSpacing='3px'
                  />
                </div>
              </div>
              <div className='is-flex'>
                <div>
                  <ShareSocial
                    style={style}
                    url="http://localhost:3000/museums/"
                    socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
                  />
                </div>
                <p className='subtitle has-text-right has-text-white'>
                  <AddingDeletingToFavourites />
                  <hr />
                  Region: {museum.region}
                  <br />
                  Date Established: {museum.date_established}
                </p>
              </div>
            </div>
          </section>
          <section className='section px-0 py-3 has-background-black'>
            <div className='is-marginless px-3 mainContainer'>
              <section className='columns is-flex is-align-items-center descAndPic'>
                <div className='column is-half-desktop is-half-tablet is-half-mobile'>
                  <Carousel />
                </div>
                <div className='column is-half-desktop is-half-tablet is-half-mobile'>
                  <div className='card p-3'>
                    <p className='is-italic is-size-6 is-size-7-mobile'>{museum.description}</p>
                    <hr />
                    <div>
                      <h3 className='has-text-weight-bold is-underlined is-size-7-mobile'>Collections:</h3>
                      <ul>
                        {museum.collection_types.map(type => {
                          return <li className='is-capitalized is-italic is-size-7-mobile' key={type}>{type}</li>
                        })}
                      </ul>
                    </div>
                    <div>
                      <hr />
                      <h3 className='has-text-weight-bold is-underlined is-size-7-mobile'>Address:</h3>
                      <p className='is-italic is-size-7-mobile'>{museum.address}</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className='columns reviewsAndForm has-background-black'>
                <div className='column is-half'>
                  <div className='card'>
                    <div className='card-header p-2 is-flex is-align-items-center'>
                      <p className='card-header-title is-size-7-mobile'>Reviews</p>
                    </div>
                    <div className='card-content'>
                      <ul className='is-size-7-mobile'>
                        {museum.reviews.map(review => {
                          return (
                            <ReviewsList key={review._id} {...review} />
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='column'>
                  <AddReviewForm />
                </div>
              </section>
              <section>
                <div className='columns'>
                  <div className='column is-half'>
                    <div className='card'>
                      <header className='card-header'>
                        <p className='card-header-title has-text-centered is-flex is-justify-content-center standoutExhibitHeader'>
                          {museum.exhibits_name}
                        </p>
                      </header>
                      <div className='card-image'>
                        <figure className='image is-1'>
                          <img src={museum.exhibits_image} className='exhibitImage'/>
                        </figure>
                      </div>
                      <div className='card-content'>
                        <div className='content'>
                          {museum.exhibits_description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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