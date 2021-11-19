import React from 'react'


const Footer = () => {




  return (
    <footer className="footer has-background-black-ter p-2" id="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="pr-3 mt-5" src="https://i.imgur.com/alLlepW.gif" alt="Museum Mapper logo" width="140px" />
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
            &copy;{new Date().getFullYear()} MUSEUM MAPPER INC | All rights reserved | Terms of Service | Privacy
          </p>
        </div>
        <div className="row">
          <p className="col-sm has-text-white is-size-7 has-text-centered">
            Content Creaters: <a className="link is-size-7" id="links" href="https://github.com/iglfranks" rel="noreferrer" target="_blank">Isaac</a>, <a className="link is-size-7" id="links" href="https://github.com/Kumarmehta019" rel="noreferrer" target="_blank">Kumar</a>, <a className="link is-size-7" id="links" href="https://github.com/Olys6" rel="noreferrer" target="_blank">Oliver</a> and <a className="link is-size-7" id="links" href="https://github.com/sapphire-p" rel="noreferrer" target="_blank">Sapphire</a>
          </p>
        </div>
        <div className="row mt-2">
          <div className="col">
            <i className="fab fa-facebook fa-2x mr-5 has-text-link-dark"></i>
            
          </div>
          <div className="col">
            <i className="fab fa-instagram fa-2x mr-5 has-text-danger"></i>
          </div>
          <div className="col">
            <i className="fab fa-twitter fa-2x mr-5 has-text-info"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer