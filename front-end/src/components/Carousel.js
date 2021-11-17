import React, { useEffect, useState } from 'react'

const Carousel = () => {

  const [museumData, setMuseumData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api')
      } catch (err) {
        console.log(err)
      }
    } 
  })






  return (
    <section>
      {/* <-- Slider main container --> */}
      <div className="swiper">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        {/* <!-- If we need navigation buttons --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  )
}

export default Carousel