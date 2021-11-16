import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Link } from 'react-router-dom'
// import ReactMapGL, { Marker } from 'react-map-gl'
// import locationData from '../data/locations'
import axios from 'axios'



const Map = () => {

  const [userLocation, setUserLocation] = useState(null)

  // Can set viewPort to { latitude: 51.509240, longitude: 0.005540 } initially if need be for testing
  const [viewPort, setViewPort] = useState({
    latitude: 51.509240,
    longitude: 0.005540,
    zoom: 7
  })

  const [popup, setPopup] = useState(null)

  const [userLocationClicked, setUserLocationClicked] = useState(false)

  // all museums returned from axios GET request
  const [allMuseums, setAllMuseums] = useState(null)

  // error handling for axios GET request
  const [hasError, setHasError] = useState(false)



  useEffect(() => {

    window.navigator.geolocation.getCurrentPosition(position => {
      console.log('Position ->', position)
      const { latitude, longitude } = position.coords
      setUserLocation({ latitude, longitude, zoom: 14 })
    })

    const getAllMuseumsData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        setAllMuseums(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getAllMuseumsData()

  }, [])


  // console.log('viewPort ->', viewPort)
  console.log('userLocation ->', userLocation)
  // console.log('popup ->', popup)
  // console.log('allMuseums ->', allMuseums)
  // console.log('hasError ->', hasError)



  return (

    <section>
      <div className='columns map-columns p-3'>

        <div className='column is-four-fifths-desktop is-three-quarters-tablet is-full-mobile has-background-grey-lighter map-container'>
          {viewPort && userLocation && allMuseums ?
            <ReactMapGL
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height='100%'
              width='100%'
              mapStyle='mapbox://styles/mapbox/navigation-night-v1'
              {...viewPort}
              onViewStateChange={viewport => setViewPort(viewport)}
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
                  <div className='is-size-6 has-text-weight-bold'>
                    Your location
                  </div>
                </Popup>
              }
              {allMuseums.map(museum => {
                return (
                  <Marker key={museum.location_id} latitude={museum.latitude} longitude={museum.longitude}>
                    <span onClick={() => setPopup(museum)}>
                      🏛
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
                  <div id='map-card-container' className='p-1'>
                    <div className='card'>
                      <div className='card-header'>
                        <div className='card-header-title cardTitle is-size-7'>{popup.name}</div>
                      </div>
                      <Link to={`/museums/${popup._id}`}>
                        <div className='card-image'>
                          <figure className='image is-4by3'>
                            <img src={popup.image} alt={popup.name} />
                          </figure>
                        </div>
                      </Link>
                      <div className='card-content p-2'>
                        <h4 className='is-size-7 cardRegion'>{popup.region}</h4>
                      </div>
                    </div>
                  </div>
                </Popup>
              }
            </ReactMapGL>
            :
            <h1>{hasError ? 'Oops! Something went wrong when loading the map' : 'Loading...'}</h1>
          }
        </div>

        <div className='column map-list-container has-background-grey-light'>
          {allMuseums ?
            // <div>List of Museums</div>
            <div>
              {
                allMuseums.map(museum => {
                  return (
                    <div key={museum._id} className='p-1'>
                      <div className='card'>
                        <div className='card-header'>
                          <div className='card-header-title cardTitle is-size-7'>{museum.name}</div>
                        </div>
                        <div className='card-image'>
                          <figure className='image is-4by3'>
                            <img src={museum.image} alt={museum.name} />
                          </figure>
                        </div>
                        <div className='card-content p-2'>
                          <h4 className='is-size-7 cardRegion'>{museum.region}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            :
            <h1>{hasError ? 'Oops! Something went wrong when loading the list of museums' : 'Loading...'}</h1>
          }
        </div>

      </div>
    </section>

  )

}

export default Map



{/* <Link to={`/museums/${_id}`}>
<div className='card-image'>
  <figure className='image is-1'>
    <img src={image} alt={`Picture of ${name}`} />
  </figure>
</div>
<div className='card-content p-2'>
  <h4 className='is-size-7 cardRegion'>{region}</h4>
</div>
</Link> */}


//   < div className = 'card' >
// <div className='card-header'>
//   <div className='card-header-title cardTitle is-size-7'>{popup.name}</div>
// </div>
//   <div className='card-image'>
//     <figure className='image is-1'>
//       <img src={popup.image} alt={popup.name} />
//     </figure>
//   </div>
//   <div className='card-content p-2'>
//     <h4 className='is-size-7 cardRegion'>{popup.region}</h4>
//   </div>
// </div >



// {locationData.map(location => {
//   return (
//     <Marker key={location.id} latitude={location.latitude} longitude={location.longitude}>
//       <span onClick={() => setPopup(location)}>
//         {location.icon}
//       </span>
//     </Marker>
//   )
// })}
// {popup &&
//   <Popup
//     latitude={popup.latitude}
//     longitude={popup.longitude}
//     closeOnClick={true}
//     onClose={() => setPopup(null)}
//   >
//     <div>
//       {popup.name}
//     </div>
//   </Popup>
// }


// THIS WORKS WELL - RETURN CONTENTS FROM BEFORE I ADDED 2 COLUMNS

{/* <div className='map-container'>
      {viewPort && userLocation && allMuseums ?
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/navigation-night-v1'
          {...viewPort}
          onViewStateChange={viewport => setViewPort(viewport)}
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
              <div className='is-size-6 has-text-weight-bold'>
                Your location
              </div>
            </Popup>
          }

          {allMuseums.map(museum => {
            return (
              <Marker key={museum.location_id} latitude={museum.latitude} longitude={museum.longitude}>
                <span onClick={() => setPopup(museum)}>
                  🏛
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
              <div id='map-card-container' className='p-1'>
                <div className='card'>
                  <div className='card-header'>
                    <div className='card-header-title cardTitle is-size-7'>{popup.name}</div>
                  </div>
                  <Link to={`/museums/${popup._id}`}>
                    <div className='card-image'>
                      <figure className='image is-4by3'>
                        <img src={popup.image} alt={popup.name} />
                      </figure>
                    </div>
                  </Link>
                  <div className='card-content p-2'>
                    <h4 className='is-size-7 cardRegion'>{popup.region}</h4>
                  </div>
                </div>
              </div>
            </Popup>
          }

        </ReactMapGL>
        :
        <h1>Loading your location...</h1>
      }
    </div> */}