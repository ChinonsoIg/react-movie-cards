import React, { Component } from 'react';

class NavBar extends Component {
 
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          <i className="fas fa-film"></i>&nbsp;&nbsp; ReactMovies      
        </a>
        <a href="#news">View</a>
        <a href="#contact">Login</a>
        <a href="#about">Logout</a>
        <a href="#about">Register</a>
        <a href="#" className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    );
  }
}

// Responsive Navbar
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

export default NavBar