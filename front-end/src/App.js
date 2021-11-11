import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {

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



  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form className='column is-half is-offset-one-quarter box'>
            <div className='control'>
              <input
                className={`input ${errors.username ? 'is-danger' : ''}`}
                placeholder='Username'
                name='username'
                value={formData.username}
              // onChange
              />
            </div>
            <div className='field'>
              <label className='label'>Username</label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App