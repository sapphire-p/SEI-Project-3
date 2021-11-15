import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {

  const [viewPort, setViewPort] = useState(null)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setViewPort({ latitude, longitude })
    })
  }, [])

  console.log(viewPort)


  return (
    <div className='map-container'>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height='100%'
        width='100%'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        zoom={8}
        latitude={viewPort.latitude}
        longitude={viewPort.longitude}
      >
      </ReactMapGL>
    </div>
  )

}

export default Map