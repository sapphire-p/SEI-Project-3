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

  const [museumData, setMuseumData] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        // console.log('data-->', data)
        setMuseumData(data.multiple_images)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  // console.log('museum data', museumData)

  return (
    <section>
      <div className="swiper">
        <div className="swiper-wrapper">
          <Swiper spaceBetween={50} centeredSlides={true} autoplay={{
            'delay': 5500,
            'disableOnInteraction': false
          }} pagination={{
            'clickable': true
          }} navigation={true} className="mySwiper">
            {museumData.map(image => {
              // console.log(image)
              return (
                
                <SwiperSlide key={image}><img key={image} src={image}/></SwiperSlide>
                
                
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Carousel