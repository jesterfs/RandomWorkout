import './Navbar.css';
import React, { Component } from 'react';
import Logo from './images/logo.png';


class Workout extends Component {
  


  

  render() {  
      

    
    return (
       <div className='navContainer'>
           <div className='navImg'>
                <img src={Logo}></img>
           </div>
           <div className='navLinks '>
                <a>Help</a>
                <a>About</a>
           </div>
       </div>
    );
  }
}

export default Workout;