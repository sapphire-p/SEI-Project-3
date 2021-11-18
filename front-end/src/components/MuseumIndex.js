import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MuseumCard from './MuseumCard'

const MuseumsIndex = () => {

  const [museums, setMuseums] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/museums')
      data.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        } else {
          return 0
        }
      })
      setMuseums(data)
    }
    getData()
  }, [])

  // console.log('museums ->', museums.sort())
  return (
    <section className='has-background-black'>
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
                <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster  museumCard'>
                  <MuseumCard key={museum._id} {...museum} />
                </div>
              )
            })}
            <div className="MuseumsSection2"></div>
          </div>
        </div>
      </section>
    </section>
  )

}
export default MuseumsIndex