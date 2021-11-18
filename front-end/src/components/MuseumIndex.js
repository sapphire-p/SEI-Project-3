import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MuseumCard from './MuseumCard'

const MuseumsIndex = () => {

  const [museums, setMuseums] = useState(null)

  // error handling
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
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
        setMuseums(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <>
      {museums ?
        <div className='has-background-black'>
          <section className='hero is-medium'>
            <div className='hero-body showAllHero'>
              <p className='title has-text-white'>Museums</p>
              <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
            </div>
          </section>
          <section className='section'>
            <div className='container museumsCardContainer'>
              <div className='columns is-multiline'>
                {museums.map(museum => {
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
            <section id='errorMessageHero-MuseumIndex' className='hero'>
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
export default MuseumsIndex