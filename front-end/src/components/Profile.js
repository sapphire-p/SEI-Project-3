import React from 'react'
import { getTokenFromLocalStorage2 } from './helpers/auth'
// import axios from 'axios'



const Profile = () => {

  const username = getTokenFromLocalStorage2()
  const myDate = new Date()
  const hrs = myDate.getHours()
  // const [token, setToken] = useState()

  // const [mappedFaves, setMappedFaves] = useState([])

  let greet = null

  if (hrs < 12) {
    greet = '🌞 Good Morning,'
  } else if (hrs >= 12 && hrs <= 17) {
    greet = '☀️ Good Afternoon,'
  } else if (hrs >= 17 && hrs <= 24) {
    greet = '🌜 Good Evening,'
  }

  // useEffect(() => {
  //   const getTokenFromLocalStorage = () => {
  //     setToken(window.localStorage.getItem('token'))
  //   }
  //   getTokenFromLocalStorage()
  // }, [])

  // const [user, setUser] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         '/api/profile',
  //         {
  //           headers: { Authorization: `Bearer ${token}` }
  //         }
  //       )
  //       setUser(data.favourites)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [token])

  // useEffect(() => {
  //   const userMap = async () => user.map(item => {
  //     try {
  //       const { data } = await axios.get(`/api/museums/${item.favouriteMuseums[0]}`)
  //       console.log(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })
  // }, [user])

  // console.log(user)

  return (
    <>
      <section className="hero is-black is-small">
        <div className="hero-body">
          <p className="title has-text-centered">
            {greet} {username}!
          </p>
        </div>
      </section>
    </>
  )
  // {/* //     <section className='section'>
  // //       <div className='container'>
  // //         <div className='columns is-multiline'>
  // //           {user.map(museum => { */}


  // const getData = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/museums/${museum.favouriteMuseums[0]}`)
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // getData()

  // console.log()
  //       </div>
  //     </div>
  //   </section>
  // </>
//   )
} 

export default Profile