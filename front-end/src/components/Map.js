import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// import ReactMapGL, { Marker } from 'react-map-gl'
import locationData from '../data/locations'

const Map = () => {

  const [userLocation, setUserLocation] = useState(null)

  const [viewPort, setViewPort] = useState({

    latitude: 51.509240,
    longitude: 0.005540,
    zoom: 7
  })

  const [popup, setPopup] = useState(null)

  const [userLocationClicked, setUserLocationClicked] = useState(false)


  // Set viewPort to { latitude: 51.509240, longitude: 0.005540 } initially if need be for testing

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log('Position ->', position)
      const { latitude, longitude } = position.coords
      setUserLocation({ latitude, longitude })
    })
  }, [])

  // console.log('viewPort ->', viewPort)
  // console.log('userLocation ->', userLocation)
  console.log('popup ->', popup)



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
            <span onClick={() => setUserLocationClicked(true)}>🔴</span>
          </Marker>
          {userLocationClicked &&
            <Popup
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
              closeOnClick={true}
              onClose={() => setUserLocationClicked(false)}
            >
              <div>
                Your location
              </div>
            </Popup>
          }

          {locationData.map(location => {
            return (
              <Marker key={location.id} latitude={location.latitude} longitude={location.longitude}>
                <span onClick={() => setPopup(location)}>
                  {location.icon}
                </span>
              </Marker>
            )
          })}
          {popup &&
            <Popup
              latitude={popup.latitude}
              longitude={popup.longitude}
              closeOnClick={true}
              onClose={() => setPopup(null)}
            >
              <div>
                {popup.name}
              </div>
            </Popup>
          }
        </ReactMapGL>
        :
        <h1>Loading your location...</h1>
      }
    </div>
  )

}

export default Map
