import React from 'react'
// import axios from 'axios'

const Profile = () => {

  const myDate = new Date()
  const hrs = myDate.getHours()

  let greet = null

  if (hrs < 12) {
    greet = 'Good Morning'
  } else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon'
  } else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening'
  }

  // const [user, setUser] = useState([])

  // useEffect(() => {

  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get('/api/museums')
  //       console.log(data)
  //       setUser(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [])

  return (
    <>
      <section className="hero is-black is-medium">
        <div className="hero-body">
          <p className="title has-text-centered">
            {greet} Oli
          </p>
        </div>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default Profile