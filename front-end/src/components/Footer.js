import React from 'react'
import Logo from '../AssetsTest/logo3.png'


const Footer = () => {




  return (
    <footer className="footer has-background-black p-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="Museum Mapper logo" width="150px" />
          </div>
          <div className="col">
            <h4 className="has-text-white is-size-5">Museum Mapper</h4>
            <ul className="list-unstyled has-text-white is-size-7">
              <li>Cromwell Rd,</li>
              <li>South Kensington,</li>
              <li>London,</li>
              <li>SW7 5BD</li>
            </ul>
          </div>
        </div>
        {/* <p>
          © 2021 Museum Mapper<br/>Content created by: <a className="link is-size-6 has-text-weight-bold is-italic" href="https://github.com/iglfranks">Isaac</a>, <a className="link is-size-6 has-text-weight-bold is-italic" href="https://github.com/Kumarmehta019">Kumar</a>, <a className="link is-size-6 has-text-weight-bold is-italic" href="https://github.com/Olys6">Oliver</a> and <a className="link is-size-6 has-text-weight-bold is-italic" href="https://github.com/sapphire-p">Sapphire</a>.
        </p> */}
      </div>
    </footer>
  )
}

export default Footer