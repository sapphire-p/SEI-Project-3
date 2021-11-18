import React from 'react'
import useSound from 'use-sound'
import Moonlight from '../AssetsTest/moonlight.mp3'


const Sounds = () => {

  const [play] = useSound(Moonlight)

  return (
    <>
      <button className="button is-black" onClick={play}><i className="fas fa-music mr-1 has-text-warning-dark"></i>PlayMe!</button>
    </>

  )
}

export default Sounds