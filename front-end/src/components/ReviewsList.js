import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const ReviewsList = (props) => {

  const { id } = useParams()
  const [token, setToken] = useState()
  const [userId, setUserId] = useState()

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

  const handleDelete = async (event) => {
    console.log(`/api/museums/${id}/reviews/${event.target.id}`)
    try {
      axios.delete(
        `/api/museums/${id}/reviews/${event.target.id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <li key={props._id}>
      <div id='single-review-card' className='card p-3 m-1'>
        <div className='columns'>
          <div className='column is-four-fifths'>
            <p>{props.comment}</p>
          </div>
          <div className='column is-flex is-flex-direction-row-reverse'>
            <p>{props.rating}/5</p>
          </div>
        </div>
        <div className='is-flex is-flex-direction-row-reverse is-justify-content-space-between reviewOwner'>
          <div>
            {(props.owner._id === userId) ? <button className='button is-rounded has-background-danger has-text-white has-text-weight-bold' id={props._id} onClick={handleDelete}>X</button> : <div></div>}
          </div>
          <div>
            <p className='is-size-7'>- {props.owner.username}</p>
          </div> 
        </div>
      </div>
    </li>
  )

}
export default ReviewsList