import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const AddReviewForm = () => {

  const { id } = useParams()
  // const history = useHistory()

  const [formData, setFormData] = useState({
    comment: '',
    rating: 0
  })

  const [errors, setErrors] = useState({
    comment: '',
    rating: ''
  })

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

  const handleSubmit = async () => {
    // event.preventDefault()
    try {
      await axios.post(
        `/api/museums/${id}/reviews`, 
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      // history.push(`/museums/${id}`)
    } catch (err) {
      console.log('ERROR ->>>', err)
      // setErrors(err.response.data.errors)
      setErrors(true)
    }
  }

  // console.log(errors)
  return (
    <form className='review-add' onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label'>Comment:</label>
        <div className='control'>
          <input
            className={`input ${errors.comment ? 'is-danger' : ''}`}
            placeholder='Comment'
            name='comment'
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        {errors.comment && <p className='is-danger'>Comment is too long</p>}
      </div>
      <div className='field'>
        <label className='label'>Rating:</label>
        <div className='control'>
          <input
            className={`input ${errors.rating ? 'is-danger' : ''}`}
            placeholder='Rating'
            name='rating'
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        {errors.rating && <p className='is-danger'>Rating must be between 1 and 5</p>}
      </div>
      <div className='field'>
        <button type='submit' className='button is-rounded has-background-danger has-text-white has-text-weight-bold'><i className="fas fa-plus-circle mr-1"></i>Add Review</button>
      </div>
    </form>
  )

}
export default AddReviewForm