import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MuseumCard from './MuseumCard'

const MuseumIndexFilter = () => {

  const [museums, setMuseums] = useState(null)

  const [filteredMuseums, setFilteredMuseums] = useState(null)

  // value of Region dropdown
  const [selectedRegion, setSelectedRegion] = useState('All regions')

  // value of Collection type dropdown
  const [selectedCollection, setSelectedCollection] = useState('All collection types')

  // text string that the user types into the search input
  const [searchText, setSearchText] = useState('')

  // error handling
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        data.sort((a, b) => {
          if (a.name < b.name) {
            return -1
          } else if (a.name > b.name) {
            return 1
          } else {
            return 0
          }
        })
        setMuseums(data)
        setFilteredMuseums(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])


  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value)
  }

  const handleCollectionTypeChange = (event) => {
    setSelectedCollection(event.target.value)
  }

  const handleSearchInput = (event) => {
    console.log(event.target.value)
    setSearchText(event.target.value)
  }


  useEffect(() => {

    if (!museums) {
      return
    } else {
      const regexSearch = new RegExp(`\\b${searchText}`, 'i') // regexSearch variable is created. 'new RegExp()' class constructor is used to create a new regex or Regular Expression (a sequence of characters that forms a search pattern)
      // In the regex expression in the line above, the \b metacharacter is used to find a match at the beginning of a word - so it will search for any words that begin with the searchText string value
      // The second item passed into the RegExp() class constructor is 'i', which ensures the search is case insensitive

      const filteredMuseums = museums.filter(museum => {
        return regexSearch.test(museum.name) && (museum.region === selectedRegion || selectedRegion === 'All regions') && (museum.collection_types.includes(selectedCollection) || selectedCollection === 'All collection types')
      })
      setFilteredMuseums(filteredMuseums)
    }


  }, [selectedRegion, selectedCollection, searchText])



  // console.log('museums ->', museums)
  console.log('selectedRegion ->', selectedRegion)
  console.log('selectedCollection ->', selectedCollection)
  console.log('searchText ->', searchText)


  return (
    <>
      {filteredMuseums ?
        <div className='has-background-black'>

          <section className='hero is-medium'>
            <div className='hero-body showAllHero'>
              <p className='title has-text-white'>Museums</p>
              <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
            </div>
          </section>
          <section className='section'>
            <div className='container museumsCardContainer'>



              <section id='index-filter-panel' className='mb-5'>
                <div className='field is-horizontal is-grouped is-grouped-centered py-3 px-5'>
                  <div className='field-body'>

                    <div className='field'>
                      <div className='control'>
                        <div className='select is-danger is-rounded is-fullwidth'>
                          <select className='has-background-white has-text-weight-bold has-text-black' id='index-filter-panel-region' name='regions' onChange={handleRegionChange}>
                            <option value='All regions'>Region</option>
                            <option value='All regions'>Any region</option>
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
                        <div className='select is-danger is-rounded is-fullwidth'>
                          <select className='has-background-white has-text-weight-bold has-text-black' id='index-filter-panel-collection-types' name='collectionTypes' onChange={handleCollectionTypeChange}>
                            <option value='All collection types'>Includes collection type</option>
                            <option value='All collection types'>All collection types</option>
                            <option value='botany'>Botany</option>
                            <option value='entomology'>Entomology</option>
                            <option value='geology'>Geology</option>
                            <option value='palaeontology'>Palaeontology</option>
                            <option value='zoology'>Zoology</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className='field'>
                      <div className='control'>
                        <input className='input is-rounded' type='text' placeholder='Search...' onChange={handleSearchInput}></input>
                      </div>
                    </div>



                  </div>
                </div>
              </section>



              <div className='columns is-multiline'>
                {filteredMuseums.map(museum => {
                  return (
                    <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster museumCard'>
                      <MuseumCard key={museum._id} {...museum} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
        :
        <>
          {hasError ?
            <section id='errorMessageHero-MuseumIndex' className='hero'>
              <div className='hero-body showAllHero'>
                <p className='title has-text-white'>Oops! Something went wrong...</p>
                <p className='subtitle has-text-white'>Refresh the page or try another link</p>
              </div>
            </section>
            :
            <section className='hero is-medium'>
              <div className='hero-body showAllHero'>
                <p className='title has-text-white'>Loading...</p>
              </div>
            </section>
          }
        </>
      }

    </>
  )

}

export default MuseumIndexFilter





// All code inside MuseumIndex from BEFORE I transferred over the code above:


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import MuseumCard from './MuseumCard'

// const MuseumsIndex = () => {

//   const [museums, setMuseums] = useState(null)

//   // error handling
//   const [hasError, setHasError] = useState(false)

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get('/api/museums')
//         data.sort((a, b) => {
//           if (a.name < b.name) {
//             return -1
//           } else if (a.name > b.name) {
//             return 1
//           } else {
//             return 0
//           }
//         })
//         setMuseums(data)
//       } catch (err) {
//         setHasError(true)
//       }
//     }
//     getData()
//   }, [])

//   return (
//     <>
//       {museums ?
//         <div className='has-background-black'>
//           <section className='hero is-medium'>
//             <div className='hero-body showAllHero'>
//               <p className='title has-text-white'>Museums</p>
//               <p className='subtitle has-text-white'>Check out these fascinating natural history collections across England</p>
//             </div>
//           </section>
//           <section className='section'>
//             <div className='container museumsCardContainer'>
//               <div className='columns is-multiline'>
//                 {museums.map(museum => {
//                   return (
//                     <div key={museum._id} className='column is-one-quarter-desktop animate__animated animate__faster museumCard'>
//                       <MuseumCard key={museum._id} {...museum} />
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </section>
//         </div>
//         :
//         <>
//           {hasError ?
//             <section id='errorMessageHero-MuseumIndex' className='hero'>
//               <div className='hero-body showAllHero'>
//                 <p className='title has-text-white'>Oops! Something went wrong...</p>
//                 <p className='subtitle has-text-white'>Refresh the page or try another link</p>
//               </div>
//             </section>
//             :
//             <section className='hero is-medium'>
//               <div className='hero-body showAllHero'>
//                 <p className='title has-text-white'>Loading...</p>
//               </div>
//             </section>
//           }
//         </>
//       }

//     </>
//   )

// }
// export default MuseumsIndex
