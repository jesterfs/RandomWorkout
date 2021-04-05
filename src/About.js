import './About.css';
import React, { Component } from 'react';



class Workout extends Component {
  


  

  render() {  
      

    
    return (
       <div className='about' id='about'>
            <h2>Frequently Asked Questions</h2>
            <h3>What is RandoFit?</h3>
            <p>RandoFit is a tool to help you change up your workout. Everytime you click the button, we randomly select exercises to make generate a new full body workout.</p>
            <hr></hr>
            <h3>Can RandoFit Replace a Professional Trainer?</h3>
            <p>
                Unfortunately, no. A trainer can tailor a workout plan specifically to you.
                We don't know your goals, your body, your limitations, or even what equipment you have.
                While our workouts will give you a fullbody pump, it can't replace a professional.
            </p>
            <hr></hr>
            <h3>Can I Get a Different Style of Workout?</h3>
            <p>
                We're working on it! Soon, you'll have the option to select common split days (Like Push/Pull, Legs, or Arms). We're also
                working on a HIIT circuit generator and specified rep ranges for your goals.
            </p>
            <hr></hr>
            <h2>Disclaimer:</h2>
            <h3>We're Not Doctors.</h3>
            <p>
                Please consult a physician before attempting any of these workouts. If they give you the good to go but tell you to limit 
                certain exercises, hit the "New Exercise" button to swap it out. Exercise at your own risk. We're not responsible for any
                injuries that occur.
            </p>
       </div>
    );
  }
}

export default Workout;