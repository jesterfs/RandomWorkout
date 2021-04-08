import './Navbar.css';
import React, { Component } from 'react';
import Logo from './images/logo.png';
import AboutBtn from './AboutBtn.js'


class Workout extends Component {
  


  

  render() {  
      

    
    return (
       <div className='navContainer'>
           <div className='navImg'>
                <img className='logo' alt='RandoFit logo' src={Logo}></img>
           </div>
           <div className='navLinks'>
                <AboutBtn />
           </div>
       </div>
    );
  }
}

export default Workout;