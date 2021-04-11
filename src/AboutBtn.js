import React, { Component } from 'react';
import './AboutBtn.css';

import { Button, ButtonToolbar, Drawer, Paragraph } from "rsuite"
import 'rsuite/dist/styles/rsuite-default.css';

class AboutBtn extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        show: false
      };
      this.close = this.close.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    close() {
      this.setState({
        show: false
      });
    }
    toggleDrawer() {
      this.setState({ show: true });
    }
    render() {
      return (
        <div>
          <ButtonToolbar>
            <Button appearance='ghost' color='red' onClick={this.toggleDrawer}>About</Button>
          </ButtonToolbar>
          <Drawer className='drawer'
            show={this.state.show}
            onHide={this.close}
            size='md'
          >
            <Drawer.Header>
              <Drawer.Title>Frequently Asked Questions</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <h3>What is RandoFit?</h3>
                <p>RandoFit is a tool to help you change up your workout. Everytime you click the button, we randomly select exercises to generate a new full body workout.</p>
                <hr></hr>
                <h3>Can RandoFit Replace a Professional Trainer?</h3>
                <p>
                    Unfortunately, no. A trainer can tailor a workout plan specifically to you.
                    We don't know your goals, your body, your limitations, or even what equipment you have.
                    While our workouts will give you a fullbody pump, it can't replace a professional.
                </p>
                <hr></hr>
                <h3>I Keep Getting the Same Exercise Twice in a Row. What happened?</h3>
                <p>
                    RandoFit essentially works like a dice roll. With a six sided die, you might get 4 twice in a row pretty often. As we add
                    add exercises, that six sided die becomes a 20 sided die, then a 40 sided die, etc, and your chances of a hitting 4 twice in a row shrinks.
                    In the mean time, if you ahve an exercise you hate that keeps popping up, just hit the "New Exercise" button to change it up.
                </p>
                <hr></hr>
                <h3>Can I Get a Different Style of Workout?</h3>
                <p>
                    We're working on it! Soon, you'll have the option to select common split days (Like Push/Pull, Legs, or Arms). We're also
                    working on a HIIT circuit generator and specified rep ranges for your goals.
                </p>
                <hr></hr>
                <h3>Disclaimer: We're Not Doctors.</h3>
                <p>
                    Please consult a physician before attempting any of these workouts. If they give you the good to go but tell you to limit 
                    certain exercises, hit the "New Exercise" button to swap it out. Exercise at your own risk. We're not responsible for any
                    injuries that occur.
                </p>
            </Drawer.Body>
          </Drawer>
        </div>
      );
    }
  
  }
  
export default AboutBtn;