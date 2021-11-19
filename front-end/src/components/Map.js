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
  const [filteredMuseumsArr, setFilteredMuseumsArr] = useState(null)



  useEffect(() => {

    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setUserLocation({ latitude, longitude, zoom: 5 })
    })

    const getAllMuseumsData = async () => {
      try {
        const { data } = await axios.get('/api/museums')
        // Sorts the array of museum objects alphabetically by the 'name' key:
        data.sort((a, b) => {
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



  return (

    // is-flex-direction-row-reverse on the <div> below means that the map displays in the column on the right on desktop/tablet and on top in mobile view:
    <section>
      <div className='columns p-3 is-flex-direction-row-reverse'>

        <div id='map-column' className='column is-three-quarters-desktop is-half-tablet is-full-mobile has-background-grey-light map-container'>
          {viewPort && userLocation && filteredMuseumsArr ?
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
            <>
              {hasError ?
                <h1 className='is-size-5 p-5'><i className="fas fa-exclamation-triangle"></i> Oops! Something went wrong when loading the map <br></br> Please ensure location services are switched on to use the map</h1>
                :
                <h1 className='is-size-5 p-5'>Loading map...</h1>
              }
            </>
          }
        </div>


        <div id='map-list-column' className='column map-list-container has-background-grey-light'>
          {filteredMuseumsArr ?
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
                      </div>
                    )
                  })
                }
              </div>
            </div>
            :
            <>
              {hasError ?
                <h1 className='is-size-5 p-4'><i className="fas fa-exclamation-triangle"></i> Oops! Something went wrong when loading the list of museums</h1>
                :
                <h1 className='is-size-5 p-4'>Loading museums list...</h1>
              }
            </>
          }
        </div>

      </div>
    </section >

  )

}

export default Map