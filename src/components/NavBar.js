import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar(props) {
   
  return (
    <div>
        <nav className={`navbar navbar-expand-lg border-bottom border-body bg-${props.mode} `}>
  <div className={`container-fluid `}>
    <a className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} href="/">TextUtil</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='dark'?'light':'dark'}`} to="/about">About</Link>
        </li> 
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'} `}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToggleMode} />
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
  
</nav>
    </div>
  )

}


