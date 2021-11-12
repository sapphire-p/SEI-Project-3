import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { useLocation } from 'react-router-dom'

const FilteredMuseums = () => {

  const location = useLocation()
  const [formData, setFormData] = useState(null)



  useEffect(() => {
    console.log(formData)
    const dataFromForm = location.state
    console.log(dataFromForm)
    setFormData(dataFromForm)
  }, [])

  return (
    <div></div>
  )

}

export default FilteredMuseums