
import './Workout.css';
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
import ArnoldPress from './images/arnoldpress.jpg';
import BarbellRow from './images/barbellrow.jpg';
import BoxJump from './images/boxjump.jpg';
import CableRow from './images/cablerow.png';
import DeclineBench from './images/declinebench.png';
import DragCurls from './images/dragcurls.jpg';
import DumbbellFly from './images/dumbbellfly.jpg';
import DumbbellRow from './images/dumbbellrow.jpg';
import FrontRaise from './images/frontraise.jpg';
import HighCableCross from './images/highcablecross.jpg';
import Lunge from './images/lunge.jpg';
import PreacherCurl from './images/preachercurl.jpg';
import ReverseCurl from './images/reversecurl.png';
import SplitSquat from './images/splitsquat.png';
import RearDeltFly from './images/reardeltfly.jpg';
import Store from './store.js'

import { Button } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import { Card } from 'grommet';

import ExCard from './ExCard.js'


class WorkoutContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
      }


  newChest = () => {
    let chestLength = this.state.chestMoves.length
    let newNum = this.state.chestNum + 1    
    if(newNum > chestLength - 1) {
        newNum = 0
    }
    this.setState({
        chestNum: newNum,
    })
  }

  newLeg = () => {
    let legLength = this.state.legMoves.length
    let newNum = this.state.legNum + 1    
    if(newNum > legLength - 1) {
        newNum = 0
    }
    this.setState({
        legNum: newNum,
    })
  }

  newBack = () => {
    let backLength = this.state.backMoves.length
    let newNum = this.state.backNum + 1    
    if(newNum > backLength - 1) {
        newNum = 0
    }
    this.setState({
        backNum: newNum,
    })
  }

  newShoulder = () => {
    let shoulderLength = this.state.shoulderMoves.length
    let newNum = this.state.shoulderNum + 1    
    if(newNum > shoulderLength - 1) {
        newNum = 0
    }
    this.setState({
        shoulderNum: newNum,
    })
  }
  

  newBicep = () => {
    let bicepLength = this.state.bicepMoves.length
    let newNum = this.state.bicepNum + 1    
    if(newNum > bicepLength - 1) {
        newNum = 0
    }
    this.setState({
        bicepNum: newNum,
    })
  }

  


  

  render() {  
      

    
        

    
    return (
        <div className="workout" >
            <ExCard exercise={Store.chestMoves} number={this.props.chestNum} newEx={this.newChest} />
            <ExCard exercise={Store.legMoves} number={this.props.legNum} newEx={this.newLeg} />
            <ExCard exercise={Store.backMoves} number={this.props.backNum} newEx={this.newBack} />
            <ExCard exercise={Store.shoulderMoves} number={this.props.shoulderNum} newEx={this.newShoulder} />
            <ExCard exercise={Store.bicepMoves} number={this.props.bicepNum} newEx={this.newBicep}  />
        </div>
    );
  
}
}

export default WorkoutContainer;