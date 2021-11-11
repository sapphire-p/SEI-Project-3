import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form className='column is-half is-offset-one-quarter box' onSubmit={handleSubmit}>
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input
                  className={`input ${errors.username ? 'is-danger' : ''}`}
                  placeholder='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className='help is-danger'>username must be unique</p>}
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <div className='control'>
                <input
                  className={`input ${errors.password ? 'is-danger' : ''}`}
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className='help is-danger'>password does not match</p>}
            </div>
            <div className='field'>
              <label className='label'>Password Confirmation</label>
              <div className='control'>
                <input
                  className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                  placeholder='Password Confirmation'
                  name='passwordConfirmation'
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
              {errors.passwordConfirmation && <p className='help is-danger'>password does not match</p>}
            </div>
            <div className='field'>
              <button type='submit' className='button is-fullwidth is-warning'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Login