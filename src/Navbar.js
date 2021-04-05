import './Navbar.css';
import React, { Component } from 'react';
import Logo from './images/logo.png';


class Workout extends Component {
  


  

  render() {  
      

    
    return (
       <div className='navContainer'>
          <div className='navLinks ' id='fillerLink'>
                
                <a href="#about">About</a>
           </div>
           <div className='navImg'>
                <img src={Logo}></img>
           </div>
           <div className='navLinks '>
                
                <a href="#about">About</a>
           </div>
       </div>
    );
  }
}

export default Workout;