import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import axios from 'axios'

SwiperCore.use([Autoplay, Pagination, Navigation])

const Carousel = () => {

  const [museumData, setMuseumData] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        // console.log('data-->', data)
        setMuseumData(data.multiple_images)
      } catch (err) {
        setHasError(true)
        // console.log(hasError)
      }
    }
    getData()
  }, [id])

  // console.log('museum data', museumData)

  return (
    <section>
      {museumData ?
        <div className="swiper">
          <div className="swiper-wrapper">
            <Swiper spaceBetween={20} slidesPerView={1} centeredSlides={true} autoplay={{
              'delay': 5500,
              'disableOnInteraction': false
            }} pagination={{
              'clickable': true
            }} navigation={true} className="mySwiper">
              {museumData.map(image => {
                // console.log(image)
                return (
                  <SwiperSlide key={image}><img src={image}/></SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        :
        <h2 className= "has-text-white is-size-5">{hasError ? 'Something went wrong' : 'Page Loading...'}</h2>
      }
    </section>
  )
}

export default Carousel