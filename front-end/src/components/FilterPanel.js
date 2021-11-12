import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const FilterPanel = () => {

  //all museums array // set after axios request
  const [allMuseums, setAllMuseums] = useState(null)

  //all collection types selected array
  const [selectedCollections, setSelectedCollections] = useState([])
  // let selectedCollections = []

  //region value
  // const [selectedRegion, setSelectedRegion] = useState(null)

  // filteredMuseums array //set after axios request //update in setregion and setcollection types functions


  useEffect(() => {

    const getAllMuseumsData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        setAllMuseums(data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllMuseumsData()

  }, [])


  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.checked)
    if (event.target.checked) {

      const newSelectedCollections = [...selectedCollections, event.target.name]
      // const newSelectedCollections = selectedCollections.push(event.target.name)
      console.log(newSelectedCollections)
      setSelectedCollections(newSelectedCollections)

      // selectedCollections = selectedCollections.push(event.target.name)


      // console.log('selectedCollections in handleChange ->', selectedCollections)
      // selectedCollections.push(event.target.name)

      // setSelectedCollections(selectedCollections.push(event.target.name))
      // const selectedCollectionsState = selectedCollections
      // const newSelectedCollections = selectedCollectionsState.push(event.target.name)
      // setSelectedCollections(newSelectedCollections)

      // const newSelectedCollection = { ...selectedCollections, region: event.target.value }
      //     console.log(newFormData)
      //     setFormData(newFormData)
      return
    } else if (!event.target.checked) {
      const updatedSelectedCollections = selectedCollections.filter(collection => {
        return collection !== event.target.name
      })
      setSelectedCollections(updatedSelectedCollections)
      return
    }
    return
  }

  console.log('All Museums from GET request ->', allMuseums)
  console.log('selectedCollections ->', selectedCollections)




  // const [formData, setFormData] = useState({
  //   region: 'all',
  //   collection_types: []
  //   // geology: false,
  //   // palaeontology: false,
  //   // botany: false,
  //   // zoology: false,
  //   // entomology: false
  // })


  // //setregion
  // const handleChange = (event) => {
  //   if (event.target.name === 'regions') {
  //     const newFormData = { ...formData, region: event.target.value }
  //     console.log(newFormData)
  //     setFormData(newFormData)
  //   } else {
  //     const newFormData = { ...formData, [event.target.name]: event.target.checked }
  //     console.log(newFormData)
  //     setFormData(newFormData)
  //   }
  // }
  // //set filteredMuseums

  // //setcollection_types
  // const handleCollectionChange = (event) => {
  //   if (event.target.name === 'geology') {
  //     setFormData(...formData, collection_types: event.target.checked)
  //   }
  // }
  // //set FilteredMuseums




  return (
    <section className='has-background-warning'>
      <div className='field is-horizontal is-grouped is-grouped-centered'>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <div className='select is-danger'>
                <select className='has-background-warning-light has-text-weight-bold pr-1' id='filter-panel' name='regions' onChange={handleChange}>
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
              {/* <Link to={{ pathname: '/filteredmuseums', state: formData }} className='button is-link has-background-danger has-text-white has-text-weight-bold is-fullwidth'>Find museums!</Link> */}
            </div>
          </div>
        </div>
      </div>

    </section>
  )

}

export default FilterPanel




// const [formData, setFormData] = useState({
//   region: 'all',
//   collection_types: []
//   // geology: false,
//   // palaeontology: false,
//   // botany: false,
//   // zoology: false,
//   // entomology: false
// })


// //setregion
// const handleChange = (event) => {
//   if (event.target.name === 'regions') {
//     const newFormData = { ...formData, region: event.target.value }
//     console.log(newFormData)
//     setFormData(newFormData)
//   } else {
//     const newFormData = { ...formData, [event.target.name]: event.target.checked }
//     console.log(newFormData)
//     setFormData(newFormData)
//   }
// }
// //set filteredMuseums

// //setcollection_types
// const handleCollectionChange = (event) => {
//   if (event.target.name === 'geology') {
//     setFormData(...formData, collection_types: event.target.checked)
//   }
// }
// //set FilteredMuseums




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