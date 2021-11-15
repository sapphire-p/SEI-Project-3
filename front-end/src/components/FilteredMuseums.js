import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import MuseumCard from './MuseumCard'

const FilteredMuseums = () => {

  const location = useLocation()

  const [filteredMuseums, setFilteredMuseums] = useState([])

  // all museums returned from axios GET request
  const [allMuseums, setAllMuseums] = useState(null)

  // error handling
  const [hasError, setHasError] = useState(false)


  useEffect(() => {

    console.log('WELCOME TO FILTERED MUSEUMS COMPONENT!')

    const filteredMuseumsArrFromFilterPanel = location.state
    setFilteredMuseums(filteredMuseumsArrFromFilterPanel)

    const getAllMuseumsData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        setAllMuseums(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getAllMuseumsData()

  }, [])


  console.log('allMuseums ->', allMuseums)
  console.log('filteredMuseums ->', filteredMuseums)

  return (
    <>
      {filteredMuseums.length > 0 ?
        <>
          <section className='hero is-medium' id="hero-container">
            <div className='hero-body showAllHero'>
              <p className='title has-text-white'>So much to discover...</p>
              <p className='subtitle has-text-white'>We found these museums that match your criteria</p>
            </div>
          </section>
          <section className='section'>
            <div className='container'>
              <div className='columns is-multiline'>
                {filteredMuseums.map(museum => {
                  return (
                    <MuseumCard key={museum._id} {...museum} />
                  )
                })}
              </div>
            </div>
          </section>
        </>
        : allMuseums ?
          <>
            <section className='hero is-medium' id="hero-container">
              <div className='hero-body showAllHero'>
                <p className='title has-text-white'>We couldn’t find any museums that matched your criteria...</p>
                <p className='subtitle has-text-white'>...but you can browse all of our listed museums below!</p>
              </div>
            </section>
            <section className='section'>
              <div className='container'>
                <div className='columns is-multiline'>
                  {allMuseums.map(museum => {
                    return (
                      <MuseumCard key={museum._id} {...museum} />
                    )
                  })}
                </div>
              </div>
            </section>
          </>
          :
          <section className='hero is-medium' id="hero-container">
            <div className='hero-body showAllHero'>
              <p className='title has-text-white'>{hasError ? 'Oops! Something went wrong...' : 'Loading...'}</p>
            </div>
          </section>
      }
    </>
  )

}

export default FilteredMuseums