import React from 'react'

const Hero = () => {

  return (
    <section className="hero is-large mainHero">
      <div className="hero-body">
        <div className="animate__animated animate__pulse animate__slower animate__infinite">
          <div className="has-text-centered animate__animated animate__backInDown animate__slower"><img src="https://i.imgur.com/vXYPTpd.png" alt="Museum Mapper logo" /></div>
          <p className="title has-text-centered has-text-white heroSubtitle animate__animated animate__backInUp animate__slower"><strong>Discover fascinating natural history collections across England</strong></p>
        </div>
      </div>
    </section>
  )

}

export default Hero


//* Older version:

// import React from 'react'

// const Hero = () => {

//   return (
//     <section className="hero is-large is-link mainHero">
//       <div className="mainHero">

//       </div>
//       <div className="hero-body HeroTitle animate__animated animate__pulse animate__slower animate__infinite">
//         <img src="https://i.imgur.com/vXYPTpd.png" className="is-size-1 HeroTitle title has-text-centered  animate__animated animate__backInDown animate__slower" />
//         <p className="subtitle has-text-centered heroSubtitle is-size-3 animate__animated animate__backInUp animate__slower"><strong>Discover fascinating natural history collections across England</strong></p>
//       </div>

//     </section>
//   )

// }

// export default Hero