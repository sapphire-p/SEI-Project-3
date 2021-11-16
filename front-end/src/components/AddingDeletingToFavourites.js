import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const AddingDeletingToFavourites = () => {

  const { id } = useParams()
  const [isSaved, setIsSaved] = useState(false)
  const [token, setToken] = useState()
  const [userId, setUserId] = useState()

  // const [formData, setFormData] = useState({
  //   favouriteMuseums: ''
  // })

  useEffect(() => {
    const getTokenFromLocalStorage = () => {
      setToken(window.localStorage.getItem('token'))
    }
    getTokenFromLocalStorage()
  }, [])

  useEffect(() => {
    const getUserId = async () => {
      try {
        if (!token) return setUserId({
          id: ''
        })
        const { data } = await axios.get(
          '/api/profile',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        setUserId(data.id)
      } catch (err) {
        console.log(err)
      }
    }
    getUserId()
  }, [token])

  const handleClick = event => {
    // console.log('CLICKED')
    event.target.classList.toggle('fas')
    event.target.classList.toggle('animate__bounceIn')
    setIsSaved(!isSaved)
  }

  useEffect(() => {

    try {
      const addMuseumToFaves = async () => {
        try {
          await axios.post(
            `/api/profile/${userId}/favourites`,
            {
              favouriteMuseums: `${id}`
            },
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          )
        } catch (err) {
          console.log(err)
        }
      }
      if (isSaved === false) {
        return
      } else {
        addMuseumToFaves()
      }
    } catch (err) {
      console.log(err)
    }

  }, [isSaved])

  return (
    <a onClick={handleClick} className="bookmark far animate__animated animate__faster fa-bookmark"></a>
  )

}
export default AddingDeletingToFavourites