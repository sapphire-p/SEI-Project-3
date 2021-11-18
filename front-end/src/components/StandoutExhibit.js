import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StandoutExhibit = () => {

  const [ museum, setMuseum ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/museums')
      setMuseum(data)
    }
    getData()
  }, [])

  return (
    <div className="container mt-5">
      <div className="columns is-multiline is-flex is-justify-content-center">
        {museum.map( singleMuseum => {
          return (
            <div key={singleMuseum._id} className="card column is-one-fifth-desktop m-1 standoutCards">
              <Link to={`/museums/${singleMuseum._id}`}>
                <div className="">
                  <p className="card-header-title is-size-6">
                    {singleMuseum.exhibits_name}
                  </p>
                  <div className="card-image">
                    <figure className="image is-1">
                      <img src={singleMuseum.exhibits_image} alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </Link> 
            </div>
            
          )
        })}
      </div>
    </div>
  )

}

export default StandoutExhibit