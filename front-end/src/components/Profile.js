import React, { useEffect, useState } from 'react'
import { getTokenFromLocalStorage2 } from './helpers/auth'
import axios from 'axios'
import MuseumCard from './MuseumCard'


const Profile = () => {

  const username = getTokenFromLocalStorage2(null)
  const myDate = new Date(null)
  const hrs = myDate.getHours(null)
  const [token, setToken] = useState(null)
  const [hasError, setHasError] = useState(false)

  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)

  let greet = null

  if (hrs < 12) {
    greet = '🌞 Good Morning,'
  } else if (hrs >= 12 && hrs <= 17) {
    greet = '☀️ Good Afternoon,'
  } else if (hrs >= 17 && hrs <= 24) {
    greet = '🌜 Good Evening,'
  }

  useEffect(() => {
    const getTokenFromLocalStorage = () => {
      setToken(window.localStorage.getItem('token'))
    }
    getTokenFromLocalStorage()
  }, [])


  useEffect(() => {
    const getData = async () => {
      try {

        if (!token) return

        const { data } = await axios.get(
          '/api/profile',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )

        setUser(data.favourites)
        setUserId(data._id)

      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [token])


  const handleDelete = async (event) => {
    try {
      axios.delete(
        `/api/profile/${userId}/favourites/${event.target.id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      window.location.reload()
    } catch (err) {
      setHasError(true)
    }
  }



  return (

    <div id="profile-section">
      {user ?
        <>
          <section className="hero is-black is-small" >
            <div className="hero-body">
              <p className="title has-text-centered">
                {greet} {username}!
              </p>
            </div>
          </section>
          <section className='section'>
            <div className='container'>
              <div>
                <p className='title m-5'>Your Favourite Museums</p>
                <p className='subtitle m-5'>If you have clicked favourite on any of the museums, they will appear here.</p>
              </div>

              <div className='columns is-multiline'>
                {user.map(museum => {
                  return (
                    <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster  museumCard'>
                      <MuseumCard key={museum._id} {...museum} />
                      <button id={museum._id} className='button m-2 p-2 is-rounded has-background-danger has-text-white has-text-weight-bold' onClick={handleDelete}>
                        <span id={museum._id} className='is-size-7'>Remove from Favourites</span>
                      </button>
                    </div>
                  )
                })}
              </div>

            </div>
          </section>
        </>
        :
        <>
          {hasError ?
            <section className="hero is-black is-small" >
              <div className="hero-body">
                <p className="title has-text-centered">Oops! Something went wrong...</p>
              </div>
            </section>
            :
            <section className="hero is-black is-small" >
              <div className="hero-body">
                <p className="title has-text-centered">Loading...</p>
              </div>
            </section>
          }
        </>
      }
    </div>

  )

}

export default Profile
