import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'

const AddReviewForm = () => {

  const { id } = useParams()
  const history = useHistory()

  const [formData, setFormData] = useState({
    comment: '',
    rating: '',
    owner: ''
  })

  const [ratingError, setRatingError] = useState(false)
  const [commentError, setCommentError] = useState(false)

  const [token, setToken] = useState()

  useEffect(() => {
    const getTokenFromLocalStorage = () => {
      setToken(window.localStorage.getItem('token'))
    }
    getTokenFromLocalStorage()
  }, [])

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(
        `/api/museums/${id}/reviews`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      window.location.reload()
    } catch (err) {
      console.log(err)

      if (formData.rating > 5) {
        setRatingError(true)
      }

      if (formData.comment.length > 500) {
        setCommentError(true)
      }

    }
  }

  const handleMake = (event) => {
    event.preventDefault()
    history.push('/register')
  }

  return (
    <form className='review-add' onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label is-size-7-mobile has-text-white'>Comment:</label>
        <div className='control'>
          <input
            className={`input ${commentError ? 'is-danger' : ''} is-size-7-mobile`}
            placeholder='Comment'
            name='comment'
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        {commentError && <p className='is-danger is-size-7-mobile'>Comment is too long</p>}
      </div>
      <div className='field'>
        <label className='label is-size-7-mobile has-text-white'>Rating:</label>
        <div className='control'>
          <input
            className={`input ${ratingError ? 'is-danger' : ''} is-size-7-mobile`}
            placeholder='Rating out of 5'
            name='rating'
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        {ratingError && <p className='is-danger is-size-7-mobile'>Rating must be between 1 and 5</p>}
      </div>
      {token ?
        <div className='field'>
          <button type='submit' className='button is-rounded is-danger has-text-white has-text-weight-bold is-size-7-mobile'><i className="fas fa-plus-circle mr-1"></i>Add Review</button>
        </div>
        :
        <div className='field'>
          <button type='submit' className='button is-rounded is-danger has-text-white has-text-weight-bold is-size-7-mobile' onClick={handleMake}>To submit your own review you must be registered. Click here to make an account!</button>
        </div>
      }

    </form>
  )

}
export default AddReviewForm