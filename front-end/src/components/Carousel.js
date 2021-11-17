import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import axios from 'axios'

SwiperCore.use([Autoplay, Pagination, Navigation])

const Carousel2 = () => {

  const [museumData, setMuseumData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/museums/${id}`)
        console.log('data-->', data)
        setMuseumData([data])
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  console.log('show me->', museumData)
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
            {museumData.map(name => {
              return (
                <>
                  <SwiperSlide><img src={name.multiple_images[0]}></img></SwiperSlide>
                  <SwiperSlide><img src={name.multiple_images[1]}></img></SwiperSlide>
                  <SwiperSlide><img src={name.multiple_images[2]}></img></SwiperSlide>
                  <SwiperSlide><img src={name.multiple_images[3]}></img></SwiperSlide>
                </>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Carousel2