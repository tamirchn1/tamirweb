import React from "react"


function Navbar(){
    return (
      <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
        <div class="container">
          <a class="navbar-brand h1 " href="/">Tamir Chen</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topnav" aria-controls="topnav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse text-center flex-row-reverse" id="topnav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link hover-underline-animation" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-underline-animation" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-underline-animation" href="/technologies">Technologies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-underline-animation" href="/services">Music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link hover-underline-animation" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
}




export default Navbar