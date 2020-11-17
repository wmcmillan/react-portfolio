import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Navbar() {
    return (
        <div>
            <nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">Wesley McMillan</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <nav class="navbar sticky-top navbar-dark bg-dark"></nav>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/"
                >About Me</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio">Portfolio</Link>
            </li>

          </ul>
        </div>
      </nav>
    </nav>
        </div>
    )
}
