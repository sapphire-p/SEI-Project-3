// import React, { useState, useEffect } from 'react'
// // import { useParams } from 'react-router-dom'
// import axios from 'axios'

// const Hero = () => {

//   const [featuredMuseums, setFeaturedMuseums] = useState([])
//   // const location = useLocation()
//   // const { id } = useParams()

//   // useEffect(() => {

//   // }, [location.pathname])

//   // useEffect(() => {


//   // })

//   // useEffect(() => {

//   //   const getData = async () => {
//   //     try {
//   //       const { data } = await axios.get('/api/museums')
//   //       console.log(data)
//   //       setFeaturedMuseums(data)
//   //     } catch (err) {
//   //       console.log(err)
//   //     }
//   //   }
//   //   getData()
//   // }, [])

//   return (
//     <section className="hero is-warning is-halfheight">
//       <div className="hero-body">
//         <div className="columns container is-full">
//           <div className="column is-half custom-flex">
//             <h2 className="title hero-title">{featuredMuseums.name}</h2>
//             <p className="subtitle hero-subtitle">{featuredMuseums.description}</p>
//             <p className="subtitle hero-subtitle">{featuredMuseums.region}</p>
//           </div>
//           <div className="column is-half show-size">
//             <img src={featuredMuseums.image}/>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

// // {
// //   params: { id: '' }
// // })