import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const FilterPanel = () => {

  //all museums array // set after axios request
  const [allMuseums, setAllMuseums] = useState(null)

  //all collection types selected array
  const [selectedCollections, setSelectedCollections] = useState([])
  // let selectedCollections = []

  // filteredMuseums array //set after axios request //update in setregion and setcollection types functions
  const [filteredMuseumsArr, setFilteredMuseumsArr] = useState([])

  //region value
  const [selectedRegion, setSelectedRegion] = useState(null)




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

    // console.log(event.target.name)
    // console.log(event.target.checked)

    // if (event.target.checked) {
    //   const newSelectedCollections = [...selectedCollections, event.target.name]
    //   // console.log(newSelectedCollections)
    //   setSelectedCollections(newSelectedCollections)
    // } else if (!event.target.checked) {
    //   const updatedSelectedCollections = selectedCollections.filter(collection => {
    //     return collection !== event.target.name
    //   })
    //   setSelectedCollections(updatedSelectedCollections)
    // }

    if (event.target.name === 'regions') {
      setSelectedRegion(event.target.value)
    } else {
      if (event.target.checked) {
        const newSelectedCollections = [...selectedCollections, event.target.name]
        // console.log(newSelectedCollections)
        setSelectedCollections(newSelectedCollections)
      } else if (!event.target.checked) {
        const updatedSelectedCollections = selectedCollections.filter(collection => {
          return collection !== event.target.name
        })
        setSelectedCollections(updatedSelectedCollections)
      }
    }

  }


  //?

  // const handleRegionChange = (event) => {
  //   console.log(event.target.value)
  //   setSelectedRegion(event.target.value)
  // }

  // useEffect(() => {

  //   if (!selectedRegion) {
  //     console.log('no region selected')
  //     return
  //   } else {
  //     // let filteredByRegion = []
  //     const regionFilteredMuseums = allMuseums.filter(museum => {
  //       return museum.region === selectedRegion
  //     })
  //     console.log(regionFilteredMuseums)
  //   }

  // }, [selectedRegion])

  //?


  useEffect(() => {

    if (selectedCollections.length === 0 && !selectedRegion) {
      // console.log('selectedCollections is empty array')
      return //* Return if selectedCollections array is empty (no collections selected)
    } else if (selectedCollections.length !== 0 && (!selectedRegion || selectedRegion === 'Region')) {
      console.log(`selectedCollections array contains ${selectedCollections.length} collections, NO selectedRegion`)

      let filteredByCollections = []

      for (let i = 0; i < selectedCollections.length; i++) { //* for every item in the selectedCollections array:
        const collectionFilteredMuseums = allMuseums.filter(museum => { //* filter through the allMuseums array
          return museum.collection_types.includes(selectedCollections[i]) //* for each museum object, if museum.collection_types array contains selectedCollections[i], store it in the collectionFilteredMuseums (array)
        })
        // console.log('collectionFilteredMuseums ->', collectionFilteredMuseums)
        filteredByCollections = [...filteredByCollections, ...collectionFilteredMuseums] //* update the value of filteredByCollections array, spreading in collectionFilteredMuseums - the result is an array containing duplicates
        // console.log('filteredByCollections ->', filteredByCollections)
      }

      //* De-duplicate the filteredByCollections array of museum objects:
      const filteredByCollectionsDeduplicated = [...new Set(filteredByCollections)] //* uses JS 'Set' constructor to create a collection of unique items (of any data type), where each item can only occur once in the Set
      //* The 'new Set()' is spread into an array, because otherwise the 'new Set()' on is own here would be an object full of museum objects (as opposed to array full of museum objects)
      console.log('filteredByCollectionsDeduplicated ->', filteredByCollectionsDeduplicated)
      setFilteredMuseumsArr(filteredByCollectionsDeduplicated) //* set the value of the filteredMuseumsArr piece of state to the value of the de-duplicated array
    } else if (selectedCollections.length === 0 && selectedRegion) {
      console.log(`selectedCollections is empty array, selectedRegion is ${selectedRegion}`)
      const regionFilteredMuseums = allMuseums.filter(museum => {
        return museum.region === selectedRegion
      })
      setFilteredMuseumsArr(regionFilteredMuseums)
    } else if (selectedCollections.length !== 0 && selectedRegion) {
      console.log(`selectedCollections array contains ${selectedCollections.length} collections, selectedRegion is ${selectedRegion}`)
      let filteredByCollections = []
      let filteredByBoth = []

      for (let i = 0; i < selectedCollections.length; i++) {
        const collectionFilteredMuseums = allMuseums.filter(museum => {
          return museum.collection_types.includes(selectedCollections[i])
        })
        // console.log('collectionFilteredMuseums ->', collectionFilteredMuseums)
        filteredByCollections = [...filteredByCollections, ...collectionFilteredMuseums]
        // console.log('filteredByCollections ->', filteredByCollections)
      }

      if (filteredByCollections.length !== 0) {
        filteredByBoth = filteredByCollections.filter(museum => {
          return museum.region === selectedRegion
        })
      }

      //* De-duplicate the filteredByBoth array of museum objects:
      const filteredByBothDeduplicated = [...new Set(filteredByBoth)]
      // console.log('filteredByBoth ->', filteredByBoth)
      setFilteredMuseumsArr(filteredByBothDeduplicated) //* set the value of the filteredMuseumsArr piece of state to the value of the de-duplicated array
    }

  }, [selectedCollections, selectedRegion])




  // console.log('All Museums from GET request ->', allMuseums)
  // console.log('selectedCollections ->', selectedCollections)
  console.log('selectedRegion ->', selectedRegion)
  console.log('selectedCollections ->', selectedCollections)
  console.log('FILTEREDMUSEUMSARR ->', filteredMuseumsArr)




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
                  <option value='East of England'>East of England</option>
                  <option value='East Midlands'>East Midlands</option>
                  <option value='London'>London</option>
                  <option value='North East'>North East</option>
                  <option value='North West'>North West</option>
                  <option value='South East'>South East</option>
                  <option value='South West'>South West</option>
                  <option value='West Midlands'>West Midlands</option>
                  <option value='Yorkshire and the Humber'>Yorkshire and the Humber</option>
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