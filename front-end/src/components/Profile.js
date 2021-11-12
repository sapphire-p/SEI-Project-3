import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {


  const [user, setUser] = useState([])

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <p className="title has-text-centered">
            Welcome Back {user.username}
          </p>
        </div>
      </section>
    </>
  )
}

export default Profile