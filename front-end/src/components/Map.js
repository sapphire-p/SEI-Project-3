import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
// import ReactMapGL, { Marker } from 'react-map-gl'
import locationData from '../data/locations'

const Map = () => {

  const [userLocation, setUserLocation] = useState(null)

  const [viewPort, setViewPort] = useState({

    latitude: 51.509240,
    longitude: 0.005540,
    zoom: 7
  })

  // const [popup, setPopUp] = 


  // Set viewPort to { latitude: 51.509240, longitude: 0.005540 } initially if need be for testing

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log('Position ->', position)
      const { latitude, longitude } = position.coords
      setUserLocation({ latitude, longitude })
    })
  }, [])

  console.log('viewPort ->', viewPort)
  console.log('userLocation ->', userLocation)



  return (
    <div className='map-container'>
      {viewPort && userLocation ?
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/navigation-night-v1'
          {...viewPort}
          onViewStateChange={viewport => setViewPort(viewport)}
        // zoom={viewPort.zoom}
        // latitude={viewPort.latitude}
        // longitude={viewPort.longitude}
        // onViewStateChange={viewport => setViewPort(viewport)}
        >
          <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
            🔴
          </Marker>
          {locationData.map(location => {
            return (
              <Marker key={location.id} latitude={location.latitude} longitude={location.longitude}>
                {location.icon}
              </Marker>
            )
          })}
        </ReactMapGL>
        :
        <h1>Loading your location...</h1>
      }
    </div>
  )

}

export default Map
