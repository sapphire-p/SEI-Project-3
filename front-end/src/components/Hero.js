import React from 'react'

const Hero = () => {

  return (
    <section className="hero is-large mainHero">
      <div className="hero-body homeHeroBody">
        <div className="animate__animated animate__pulse animate__slower animate__infinite">
          <div className="has-text-centered animate__animated animate__fadeInLeft "><img src="https://i.imgur.com/vXYPTpd.png" alt="Museum Mapper logo" /></div>
          <p className="title has-text-centered has-text-white heroSubtitle animate__animated animate__fadeInRight"><strong>Discover fascinating natural history collections across England</strong></p>
        </div>
      </div>
    </section>
  )

}

export default Hero