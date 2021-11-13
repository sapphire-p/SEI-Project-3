import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MuseumCard from './MuseumCard'

const MuseumsIndex = () => {

  const [museums, setMuseums] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/museums')
      setMuseums(data)
    }
    getData()
  }, [])

  // console.log('museums ->', museums.sort())
  return (
    <>
      <section className='hero is-medium' id="hero-container">
        <div className='hero-body showAllHero'>
          <p className='title has-text-white'>Museums</p>
          <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
        </div>
      </section>
      <section className='section MuseumsSection'>
        <div className='container museumsCardContainer'>
          <div className='columns is-multiline'>
            {museums.map(museum => {
              return (
                <MuseumCard key={museum._id} {...museum} />
              )
            })}
            <div className="MuseumsSection2"></div>
          </div>
          
        </div>
      </section>
    </>
  )

}
export default MuseumsIndex