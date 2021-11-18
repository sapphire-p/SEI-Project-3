import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StandoutExhibit = () => {

  const [ museum, setMuseum ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/museums')
      setMuseum(data)
    }
    getData()
  }, [])

  return (

    <section className='has-background-black standoutPage'>
      <section className='hero is-medium' id="hero-container">
        <div className='hero-body standoutExhibitsHero pt-8'>
          <p className='title has-text-white'>Museums</p>
          <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
        </div>
      </section>
      <section className='section standoutSection'>
        <div className=''>
          <div className='columns is-multiline is-flex is-justify-content-center'>
            {museum.map(Smuseum => {
              return (
                <div key={Smuseum._id} className='column is-narrow is-one-quarter-desktop animate__animated animate__faster  standoutCards'>
                  <div className='card is-narrow standoutCard'>
                    <div className='card-header is-flex is-align-items-center'>
                      <div className='card-header-title cardTitle is-size-7'>{Smuseum.exhibits_name}</div>
                    </div>
                    <Link to={`/museums/${Smuseum._id}`}>
                      <div className='card-image'>
                        <figure className='image is-1 exhibitImage'>
                          <img src={Smuseum.exhibits_image} alt={`Picture of ${Smuseum.exhibits_name}`} />
                        </figure>
                      </div>
                    </Link>
                  </div>                  
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div className="standoutExhibit2 hero is-medium">
        <div className="hero-body">
        </div>
      </div>
    </section>    

  // <div className="container mt-5">
  //   <div className="columns is-multiline is-flex is-justify-content-center">
  //     {museum.map( singleMuseum => {
  //       return (
  //         <div key={singleMuseum._id} className="card column is-one-fifth-desktop m-1 standoutCards">
  //           <Link to={`/museums/${singleMuseum._id}`}>
  //             <div className="">
  //               <p className="card-header-title is-size-6">
  //                 {singleMuseum.exhibits_name}
  //               </p>
  //               <div className="card-image">
  //                 <figure className="image is-1">
  //                   <img src={singleMuseum.exhibits_image} alt={singleMuseum.exhibits_name} />
  //                 </figure>
  //               </div>
  //               <div className='card-content p-2'>
  //                 <h4 className='is-size-7 cardRegion'>{singleMuseum.exhibits_name}</h4>
  //               </div>
  //             </div>
  //           </Link> 
  //         </div>
          
  //       )
  //     })}
  //   </div>
  // </div>
  )

}

export default StandoutExhibit