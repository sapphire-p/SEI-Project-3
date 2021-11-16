import React, { useEffect, useState } from 'react'
import { getTokenFromLocalStorage2 } from './helpers/auth'
import axios from 'axios'

const Profile = () => {

  const username = getTokenFromLocalStorage2()
  const myDate = new Date()
  const hrs = myDate.getHours()
  const [token, setToken] = useState()

  // const [mappedFaves, setMappedFaves] = useState([])

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

  const [user, setUser] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          '/api/profile',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        console.log(data.favourites)
        setUser(data.favourites)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [token])

  // useEffect(() => {

  //   const userMap = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/museums/${item.favouriteMuseums}`)
  //       console.log(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })

  // }, [user])

  useEffect(() => {

    const userMap = async () => {
      const { data } = await axios.get('/api/museums/6193a602def345cd11fed92a')
      console.log(data)
    }
    userMap()

  }, [user])

  return (
    <>
      <section className="hero is-black is-small">
        <div className="hero-body">
          <p className="title has-text-centered">
            {greet} {username}!
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {user.map(museum => {


              // const getData = async () => {
              //   try {
              //     const { data } = await axios.get(`/api/museums/${museum.favouriteMuseums[0]}`)
              //     console.log(data)
              //   } catch (err) {
              //     console.log(err)
              //   }
              // }
              // getData()

              // console.log()
              return (
                <div key={museum._id} className='column is-one-quarter-desktop'>
                  <div className='card'>
                    <div className='card-header'>
                      <div className='card-header-title'></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
