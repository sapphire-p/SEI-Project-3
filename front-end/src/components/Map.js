import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Map = () => {

  const [userLocation, setUserLocation] = useState(null)

  // Default latitude and longitude coordinates on first map render are for Birmingham (this centres England nicely so all museums can be seen):
  const [viewPort, setViewPort] = useState({
    latitude: 52.48142,
    longitude: -1.89983,
    zoom: 6
  })

  const [popup, setPopup] = useState(null)

  const [userLocationHasMouseOver, setUserLocationHasMouseOver] = useState(false)

  // all museums returned from axios GET request
  const [allMuseums, setAllMuseums] = useState(null)

  // error handling for axios GET request
  const [hasError, setHasError] = useState(false)

  // value of Region dropdown
  const [selectedRegion, setSelectedRegion] = useState(null)

  // array of museum objects, filtered by region
  const [filteredMuseumsArr, setFilteredMuseumsArr] = useState([])



  useEffect(() => {

    window.navigator.geolocation.getCurrentPosition(position => {
      console.log('Position ->', position)
      const { latitude, longitude } = position.coords
      setUserLocation({ latitude, longitude, zoom: 5 })
    })

    const getAllMuseumsData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        data.sort((a, b) => { // Sorts the array of museum objects alphabetically by the 'name' key
          if (a.name < b.name) {
            return -1
          } else if (a.name > b.name) {
            return 1
          } else {
            return 0
          }
        })
        setAllMuseums(data)
        setFilteredMuseumsArr(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getAllMuseumsData()

  }, [])



  const handleUserLocationMouseOver = () => {
    setUserLocationHasMouseOver(true)
    setPopup(null)
  }

  const handleMuseumCardMouseOver = (museum) => {
    setPopup(museum)
    setUserLocationHasMouseOver(false)
  }

  const handleDropdownChange = (event) => {
    console.log(event.target.value)
    setSelectedRegion(event.target.value)
  }

  useEffect(() => {

    if (!selectedRegion) {
      return //* Return if no region selected
    } else if (selectedRegion === 'All Regions') { //* if 'All regions' or 'Filter list by region' selected (both these options have a value of 'All Regions'):
      setFilteredMuseumsArr(allMuseums) //* set filteredMuseumsArr to value of allMuseums
    } else {
      const regionFilteredMuseums = allMuseums.filter(museum => {
        return museum.region === selectedRegion
      })
      setFilteredMuseumsArr(regionFilteredMuseums)
    }

  }, [selectedRegion])


  //* console.logs for testing *//

  // console.log('viewPort ->', viewPort)
  // console.log('userLocation ->', userLocation)
  // console.log('popup ->', popup)
  // console.log('allMuseums ->', allMuseums)
  // console.log('hasError ->', hasError)
  // console.log('selectedRegion ->', selectedRegion)



  return ( // is-flex-direction-row-reverse on the <div> below means that the map displays in the column on the right on desktop/tablet and on top in mobile view

    <section>
      <div className='columns p-3 is-flex-direction-row-reverse'>

        <div id='map-column' className='column is-three-quarters-desktop is-half-tablet is-full-mobile has-background-grey-light map-container'>
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
                <span className='map-icon' onMouseOver={handleUserLocationMouseOver}>🔴</span>
              </Marker>

              {filteredMuseumsArr.map(museum => {
                return (
                  <Marker key={museum.location_id} latitude={museum.latitude} longitude={museum.longitude}>
                    <span className='map-icon' onMouseOver={() => handleMuseumCardMouseOver(museum)}>
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
                    <Link to={`/museums/${popup._id}`}>
                      <div className='card'>
                        <div className='card-header'>
                          <div className='card-header-title cardTitle is-size-7'>{popup.name}</div>
                        </div>
                        <div className='card-image'>
                          <figure className='image is-4by3'>
                            <img src={popup.image} alt={popup.name} />
                          </figure>
                        </div>
                        <div className='card-content p-2'>
                          <h4 className='is-size-7 cardRegion'>{popup.address}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Popup>
              }

              {userLocationHasMouseOver &&
                <Popup
                  latitude={userLocation.latitude}
                  longitude={userLocation.longitude}
                  closeOnClick={true}
                  onClose={() => setUserLocationHasMouseOver(false)}
                >
                  <div className='is-size-6 has-text-weight-bold'>
                    Your location
                  </div>
                </Popup>
              }
            </ReactMapGL>
            :
            <h1>{hasError ? 'Oops! Something went wrong when loading the map' : 'Loading map...'}</h1>
          }
        </div>


        <div id='map-list-column' className='column map-list-container has-background-grey-light'>

          {allMuseums ?

            <div>
              <div>
                <div className='field has-text-centered py-4 px-3'>
                  <div className='control'>
                    <div className='select is-info is-rounded is-size-6 is-fullwidth'>
                      <select className='has-background-info-light has-text-weight-bold has-text-black' id='filter-panel-region' name='regions' onChange={handleDropdownChange}>
                        <option value='All Regions'>Filter by region</option>
                        <option value='All Regions'>All regions</option>
                        <option value='East of England'>East of England</option>
                        <option value='East Midlands'>East Midlands</option>
                        <option value='London'>London</option>
                        <option value='North East'>North East</option>
                        <option value='North West'>North West</option>
                        <option value='South East'>South East</option>
                        <option value='South West'>South West</option>
                        <option value='West Midlands'>West Midlands</option>
                        <option value='Yorkshire and the Humber'>Yorkshire & the Humber</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {
                  filteredMuseumsArr.map(museum => {
                    return (
                      <div key={museum._id} className='py-1 pl-4 pr-3' onClick={() => handleMuseumCardMouseOver(museum)}>
                        {/* <Link to={`/museums/${museum._id}`}> */}
                        <div className='museum-list-card card'>
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
                        {/* </Link> */}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            :
            <h1>{hasError ? 'Oops! Something went wrong when loading the list of museums' : 'Loading...'}</h1>
          }
        </div>

      </div>
    </section >

  )

}

export default Map





// DROPDOWN FIELD FROM FILTERPANEL:

{/* <div className='field'>
<div className='control'>
  <div className='select is-danger is-rounded'>
    <select className='has-background-white has-text-weight-bold has-text-black' id='filter-panel-region' name='regions' onChange={handleChange}>
      <option value='Region'>Region</option>
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
</div> */}









// WORKING CONTENTS OF THE 'RETURN' BEFORE CHANGING THE ORDER OF COLUMNS (trying to achieve map on right in desktop and on top in mobile view):


{/* <section>
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
          <span onClick={handleUserLocationClick}>🔴</span>
        </Marker>

        {allMuseums.map(museum => {
          return (
            <Marker key={museum.location_id} latitude={museum.latitude} longitude={museum.longitude}>
              <span onClick={() => handleMuseumCardClick(museum)}>
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
              <Link to={`/museums/${popup._id}`}>
                <div className='card'>
                  <div className='card-header'>
                    <div className='card-header-title cardTitle is-size-7'>{popup.name}</div>
                  </div>
                  <div className='card-image'>
                    <figure className='image is-4by3'>
                      <img src={popup.image} alt={popup.name} />
                    </figure>
                  </div>
                  <div className='card-content p-2'>
                    <h4 className='is-size-7 cardRegion'>{popup.address}</h4>
                  </div>
                </div>
              </Link>
            </div>
          </Popup>
        }

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
      </ReactMapGL>
      :
      <h1>{hasError ? 'Oops! Something went wrong when loading the map' : 'Loading...'}</h1>
    }
  </div>

  <div className='column map-list-container has-background-grey-light'>
    {allMuseums ?
      <div>
        {
          allMuseums.map(museum => {
            return (
              <div key={museum._id} className='p-1' onClick={() => setPopup(museum)}>
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
</section > */}











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