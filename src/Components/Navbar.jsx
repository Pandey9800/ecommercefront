import React from 'react'
import { Link } from 'react-router-dom'
import Imgrefresher from "./images/logo1.png";

const Navbar = () => {
  return (
      <div>
          <div className="navbar_div">
              <div>
                  <input type="text" placeholder="Search here" />
                  {/* searchIcon */}
                  {/* closeIcon */}

              </div>
              <div>
                  <div className="navbar_main">
                      <div>
                          <div>
                              {/* search Icon */}
                          </div>
                          {/* Menu Icon */}
                      </div>
                      <div>
                          <img src="" alt="" />
                      </div>
                  </div>
              </div>
          </div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/loginform">Login</Link>
          <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar