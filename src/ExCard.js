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

class ExCard extends Component {
  
  render() {  

    
    return (
        <div className="workout" >
            <div className='exMain'>
                    <img src={this.props.image} ></img>
                    <div>
                        <h2>{this.props.name}</h2>
                        <div>
                            <button className='exBtn' onClick={this.newChest}>New Exercise</button>
                            <button className='exBtn' onClick={this.showChest}>More Info</button>
                        </div>
                    </div>
                </div>
                <div className={(this.state.hiddenChest) ? 'hiddenDesc' : 'exDesc'} id='chestDesc'>
                    <h3>Instructions</h3>
                    <ol>
                        {this.state.chestMoves[this.state.chestNum].instructions.map(instruction => 
                        <li >
                            {instruction}
                        </li>)}
                    </ol>
                    <button className='exBtn' onClick={this.hideChest}>Less Info</button>
                </div>
        </div>
    );
  }
}

export default ExCard;