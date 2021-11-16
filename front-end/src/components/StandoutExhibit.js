import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div className="container">
      <div className="columns is-multiline">
        {museum.map( singleMuseum => {
          return (
            <div key={singleMuseum._id} className="card column is-one-quarter-desktop">
              <div className="">
                <p className="card-header-title">
                  {singleMuseum.exhibits.name}
                </p>
                <div className="card-image">
                  <figure className="image is-1">
                    <img src={singleMuseum.exhibits.image} alt="Placeholder image" />
                  </figure>
                </div>
              </div>
            </div>  
          )
        })}
      </div>
    </div>
  )

}

export default StandoutExhibit