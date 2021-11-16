import React from 'react'
import Logo from '../AssetsTest/logo.gif'

const Footer = () => {




  return (
    <footer className="footer has-background-black-ter p-2" id="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="pr-3" src={Logo} alt="Museum Mapper logo" width="140px" />
          </div>
          <div className="col">
            <h4 className="has-text-white is-size-6 has-text-centered">Museum Mapper</h4>
            <ul className="list-unstyled has-text-white is-size-7">
              <li>Cromwell Rd,</li>
              <li>South Kensington,</li>
              <li>London,</li>
              <li>SW7 5BD</li>
            </ul>
          </div>
        </div>
        <hr className="has-background-grey mt-2 mb-2" />
        <div className="row">
          <p className="col-sm has-text-white is-size-7 has-text-centered mb-1">
            &copy;{new Date().getFullYear()} MUSEUM MAPPERS INC | All rights reserved | Terms of Service | Privacy
          </p>
        </div>
        <div className="row">
          <p className="col-sm has-text-white is-size-7 has-text-centered">
            Content Creaters: <a className="link is-size-7" href="https://github.com/iglfranks" rel="noreferrer" target="_blank">Isaac</a>, <a className="link is-size-7" href="https://github.com/Kumarmehta019" rel="noreferrer" target="_blank">Kumar</a>, <a className="link is-size-7" href="https://github.com/Olys6" rel="noreferrer" target="_blank">Oliver</a> and <a className="link is-size-7" href="https://github.com/sapphire-p" rel="noreferrer" target="_blank">Sapphire</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer