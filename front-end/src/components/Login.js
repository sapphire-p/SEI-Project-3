import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState(false)


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      setItemToLocalStorage(data.token)
      setItemToLocalStorage2(formData.username)
      history.push('/')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const setItemToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }
  const setItemToLocalStorage2 = () => {
    window.localStorage.setItem('username', formData.username)
  }



  return (
    <section id='login-section' className='section is-medium'>
      <div className='container'>
        <div className='columns'>
          <form className='column is-half is-offset-one-quarter box has-background-grey-lighter' onSubmit={handleSubmit}>
            <h1 className='title'>Log in</h1>
            <p>Please log in to your account to access features including museum reviews and favourites.</p>
            <div className='field'>
              <label className='label mt-4'>Username:</label>
              <div className='control'>
                <input
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Password:</label>
              <div className='control'>
                <input
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  type='password'
                  onChange={handleChange}
                />
              </div>
              {error && <p className='help is-danger'>Your username and/or password is incorrect</p>}
            </div>
            <div className='field'>
              <button type='submit' className='button is-rounded is-fullwidth is-danger has-text-weight-bold mt-5'>Log in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Login