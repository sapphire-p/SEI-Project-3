// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useLocation } from 'react-router-dom'

// const FilteredMuseums = () => {

//   const location = useLocation()
//   const [formData, setFormData] = useState(null)
//   const [allMuseumsData, setAllMuseumsData] = useState(null)
//   // const [museumsFilteredByRegion, setMuseumsFilteredByRegion] = useState(null)
//   const [filteredMuseums, setFilteredMuseums] = useState([])



//   useEffect(() => {
//     // console.log(formData)
//     const dataFromForm = location.state
//     // console.log(dataFromForm)
//     setFormData(dataFromForm)

//     const getAllMuseumsData = async () => {
//       try {
//         const { data } = await axios.get('/api/museums')
//         console.log(data)
//         setAllMuseumsData(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getAllMuseumsData()
//   }, [])

//   useEffect(() => {

//     if (allMuseumsData === null) {
//       return
//     } else {
//       console.log('allMuseumsData ready!')
//       if (formData.region === 'london') {
//         // const londonMuseumsOnly = allMuseumsData.filter(museum => {
//         //   if (MuseumShow.region === 'London') {
//         //     return museum
//         //   } else {
//         //     return
//         //   }
//         console.log('region selected is London')
//         // })
//       } else {
//         console.log('region selected is NOT London')
//       }
//     }

//   }, [allMuseumsData])


//   console.log('allMuseumsData ->', allMuseumsData)
//   console.log('formData ->', formData)
//   // console.log('filteredMuseums ->', filteredMuseums)

//   return (
//     <div></div>
//   )

// }

// export default FilteredMuseums