import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FilterPanel = () => {

  const [formData, setFormData] = useState({
    region: 'all',
    geology: false,
    palaeontology: false,
    botany: false,
    zoology: false,
    entomology: false
  })

  const handleChange = (event) => {
    if (event.target.name === 'regions') {
      const newFormData = { ...formData, region: event.target.value }
      console.log(newFormData)
      setFormData(newFormData)
    } else {
      const newFormData = { ...formData, [event.target.name]: event.target.checked }
      console.log(newFormData)
      setFormData(newFormData)
    }
  }


  return (
    <section className='has-background-warning'>
      <div className='field is-horizontal is-grouped is-grouped-centered'>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <div className='select is-danger'>
                <select className='has-background-warning-light has-text-weight-bold pr-1' name='regions' onChange={handleChange}>
                  <option >Region</option>
                  <option value='eastOfEngland'>East of England</option>
                  <option value='eastMidlands'>East Midlands</option>
                  <option value='london'>London</option>
                  <option value='northEast'>North East</option>
                  <option value='northWest'>North West</option>
                  <option value='southEast'>South East</option>
                  <option value='southWest'>South West</option>
                  <option value='westMidlands'>West Midlands</option>
                  <option value='yorkshireAndTheHumber'>Yorkshire and the Humber</option>
                </select>
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='label is-fullwidth'>Collection types:</label>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox'>
                <input type='checkbox' name='geology' onChange={handleChange} />
                Geology (rocks)
              </label>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox'>
                <input type='checkbox' name='palaeontology' onChange={handleChange} />
                Palaeontology (fossils)
              </label>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox'>
                <input type='checkbox' name='botany' onChange={handleChange} />
                Botany (plants)
              </label>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox'>
                <input type='checkbox' name='zoology' onChange={handleChange} />
                Zoology (animals)
              </label>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox'>
                <input type='checkbox' name='entomology' onChange={handleChange} />
                Entomology (insects)
              </label>
            </div>
          </div>
          <div>
            <div className='control'>
              <Link to={{ pathname: '/filterresults', state: formData }} className='button is-link has-background-danger has-text-white has-text-weight-bold is-fullwidth'>Find museums!</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )

}

export default FilterPanel



{/* <section>
<div className='field-body'>
  <div className='field is-grouped is-grouped-centered'>
    <div className='control'>
      <div className='field-label is-normal'>
        <label className='label'>Filter Museums:</label>
      </div>
    </div>
    <div className='control'>
      <div className='select is-fullwidth'>
        <select>
          <option>Region</option>
          <option value='eastOfEngland'>East of England</option>
          <option value='eastMidlands'>East Midlands</option>
          <option value='london'>London</option>
          <option value='northEast'>North East</option>
          <option value='northWest'>North West</option>
          <option value='southEast'>South East</option>
          <option value='southWest'>South West</option>
          <option value='westMidlands'>West Midlands</option>
          <option value='yorkshireAndTheHumber'>Yorkshire and the Humber</option>
        </select>
      </div>
    </div>
    <div className='control'>
      <label className='checkbox'>
        <input type='checkbox' />
        Entomology
      </label>
    </div>
    <div className='control'>
      <label className='checkbox'>
        <input type='checkbox' />
        Geology
      </label>
    </div>
    <div className='control'>
      <label className='checkbox'>
        <input type='checkbox' />
        Palaeontology
      </label>
    </div>
    <div className='control'>
      <label className='checkbox'>
        <input type='checkbox' />
        Botany
      </label>
    </div>
    <div className='control'>
      <label className='checkbox'>
        <input type='checkbox' />
        Zoology
      </label>
    </div>
    <div className='control'>
      <button className='button is-link'>Find museums!</button>
    </div>
  </div>
</div>
</section> */}