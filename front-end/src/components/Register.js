import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Register = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formData) // Uses '/api' prefix from our proxy (see setupProxy.js)
      history.push('/login') // Uses '/api' prefix from our proxy (see setupProxy.js) to navigate to Homepage
    } catch (err) {
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }


  return (
    <section id='register-section' className='section is-flex is-align-items-center'>
      <div className='container'>
        <div className='columns'>
          <form className='column is-half is-offset-one-quarter box has-background-grey-lighter' onSubmit={handleSubmit}>
            <h1 className='title'>Create your account</h1>
            <p>As a registered Museum Mapper user you&apos;ll be able to review museums and save your favourites to view later!</p>
            <div className='field'>
              <label className='label mt-4'>Username:</label>
              <div className='control'>
                <input
                  className={`input ${errors.username ? 'is-danger' : ''}`}
                  placeholder='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className='help is-danger'>Username must be unique</p>}
            </div>
            <div className='field'>
              <label className='label'>Email:</label>
              <div className='control'>
                <input
                  className={`input ${errors.email ? 'is-danger' : ''}`}
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className='help is-danger'>Email must be unique</p>}
            </div>
            <div className='field'>
              <label className='label'>Password:</label>
              <div className='control'>
                <input
                  className={`input ${errors.password ? 'is-danger' : ''}`}
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  type='password'
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className='help is-danger'>Password does not match</p>}
            </div>
            <div className='field'>
              <label className='label'>Password Confirmation:</label>
              <div className='control'>
                <input
                  className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                  placeholder='Password Confirmation'
                  name='passwordConfirmation'
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  type='password'
                />
              </div>
              {errors.passwordConfirmation && <p className='help is-danger'>Password does not match</p>}
            </div>
            <div className='field'>
              <button type='submit' className='button is-rounded is-fullwidth is-danger has-text-weight-bold mt-5'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Register