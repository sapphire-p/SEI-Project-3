import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import MuseumCard from './MuseumCard'


const FilteredMuseums = () => {

  const location = useLocation()

  // filteredMuseums array taken from the state key of the location object (location.state)
  // location.state is passed in via the 'Find museums!' Link/button on FilterPanel
  const [filteredMuseums, setFilteredMuseums] = useState([])

  // all museums returned from axios GET request
  const [allMuseums, setAllMuseums] = useState(null)

  // error handling
  const [hasError, setHasError] = useState(false)


  useEffect(() => {

    const filteredMuseumsArrFromFilterPanel = location.state
    setFilteredMuseums(filteredMuseumsArrFromFilterPanel)

    const getAllMuseumsData = async () => {
      try {
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
        setAllMuseums(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getAllMuseumsData()

  }, [])



  return (
    <>
      {filteredMuseums.length > 0 ?
        <div className='has-background-black'>
          <section className='hero is-medium'>
            <div className='hero-body showAllHero'>
              <p className='title has-text-white'>So much to discover...</p>
              <p className='subtitle has-text-white'>We found these museums that match your criteria</p>
            </div>
          </section>
          <section className='section'>
            <div className='container museumsCardContainer'>
              <div className='columns is-multiline'>
                {filteredMuseums.map(museum => {
                  return (
                    <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster museumCard'>
                      <MuseumCard key={museum._id} {...museum} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
        : allMuseums ?
          <div className='has-background-black'>
            <section className='hero is-medium'>
              <div className='hero-body showAllHero'>
                <p className='title has-text-white'>We couldn’t find any museums that matched your criteria...</p>
                <p className='subtitle has-text-white'>...but you can browse all of our listed museums below!</p>
              </div>
            </section>
            <section className='section'>
              <div className='container museumsCardContainer'>
                <div className='columns is-multiline'>
                  {allMuseums.map(museum => {
                    return (
                      <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster museumCard'>
                        <MuseumCard key={museum._id} {...museum} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          </div>
          :
          <>
            {hasError ?
              <section id='errorMessageHero-FilteredMuseums' className='hero'>
                <div className='hero-body showAllHero'>
                  <p className='title has-text-white'>Oops! Something went wrong...</p>
                  <p className='subtitle has-text-white'>Refresh the page or try another link</p>
                </div>
              </section>
              :
              <section className='hero is-medium'>
                <div className='hero-body showAllHero'>
                  <p className='title has-text-white'>Loading...</p>
                </div>
              </section>
            }
          </>
      }
    </>
  )

}

export default FilteredMuseums