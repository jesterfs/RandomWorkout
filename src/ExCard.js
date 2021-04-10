import './ExCard.css';
import React, { Component } from 'react';
import Bench from './images/bench.jpg';
import Squat from './images/squat.jpg';
import MiltPress from './images/miltpress.jpg';
import DeadLift from './images/deadlift.jpg';
import Pushup from './images/pushup.jpg';
import LatRaise from './images/latraise.jpg';
import LatPull from './images/latpull.jpg';
import PullUp from './images/pullup.jpg';
import EZBar from './images/ezbar.jpeg';
import ConcCurls from './images/conccurls.jpeg';
import Placeholder from './images/placeholder.png';
import InclineBench from './images/inclinebench.jpg';
import LegPress from './images/legpress.jpg';
import ChestDip from './images/chestdip.jpg';
import Store from './store.js'

import { Button } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import { Card } from 'grommet';

class ExCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
      }

    state = {
        hidden: true,
        number: this.props.number
    }

    showInstructions = () => {
        this.setState({hidden: false})
      }
    
    hideInstructions = () => {
        this.setState({hidden: true})
      }

    // newEx = () => {
    //     let length = this.props.exercise.length
    //     let newNum = this.state.number + 1    
    //     if(newNum > length - 1) {
    //         newNum = 0
    //     }
    //     this.setState({
    //         number: newNum,
    //     })
    // }

    componentWillReceiveProps() {
        this.setState({number: this.props.number})
    }

  render() {  

    
    return (
        
            <Card className='workout' elevation='medium' round='small'  className='exercise' onMouseOver={this.showInstructions} onMouseLeave={this.hideInstructions}>
                <div className='exMain'>
                    <img className='exImg' alt='picture of the exercise' src={this.props.exercise[this.props.number].image} ></img>
                    <div className='exText'>
                        <h2 className='exHead'>{this.props.exercise[this.props.number].name}</h2>
                        <div className='block-buttons'>
                            <Button  color='red' className='exBtn block-buttons' label='New Exercise' onClick={this.props.newEx} block>New Exercise</Button>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.showInstructions} block>More Info</Button>
                        </div>
                        
                    </div>
                </div>
                <div className={(this.state.hidden) ? 'hiddenDesc' : 'exDesc'} id='chestDesc'>
                    <h3>Instructions</h3>
                    <ol>
                        {this.props.exercise[this.props.number].instructions.map(instruction => 
                        <li >
                            {instruction}
                        </li>)}
                    </ol>
                    <Button appearance='ghost' color='red' className='exBtn' onClick={this.hideInstructions}>Less Info</Button>
                </div>
                
            </Card>
       
    );
  }
}

export default ExCard;