
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
import NoseBreaker from './images/nosebreaker.jpg';
import TriPush from './images/tripush.jpg';
import TriKick from './images/trikick.jpg';
import CloseGrip from './images/closegrip.png';
import Store from './store.js'

import { Button } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import { Card } from 'grommet';

import ExCard from './ExCard.js'
import WorkoutContainer from './workoutcontainer.js'


class Workout extends Component {
  state = {
      chestNum: null,
      legNum: null,
      shoulderNum: null,
      backNum: null,
      BicepNum: null,
      tricepNum: null
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  newWorkout = () => {
    let chestLength = Store.chestMoves.length
    let legLength = Store.legMoves.length
    let shoulderLength = Store.shoulderMoves.length
    let backLength = Store.backMoves.length
    let bicepLength = Store.bicepMoves.length
    let tricepLength = Store.tricepMoves.length
    this.setState({
        chestNum: this.getRandomInt(chestLength),
        legNum: this.getRandomInt(legLength),
        shoulderNum: this.getRandomInt(shoulderLength),
        backNum: this.getRandomInt(backLength),
        bicepNum: this.getRandomInt(bicepLength),
        tricepNum: this.getRandomInt(tricepLength),
    })
    
  }


  newChest = () => {
    let chestLength = Store.chestMoves.length
    let newNum = this.state.chestNum + 1    
    if(newNum > chestLength - 1) {
        newNum = 0
    }
    this.setState({
        chestNum: newNum,
    })
  }

  newLeg = () => {
    let legLength = Store.legMoves.length
    let newNum = this.state.legNum + 1    
    if(newNum > legLength - 1) {
        newNum = 0
    }
    this.setState({
        legNum: newNum,
    })
  }

  newBack = () => {
    let backLength = Store.backMoves.length
    let newNum = this.state.backNum + 1    
    if(newNum > backLength - 1) {
        newNum = 0
    }
    this.setState({
        backNum: newNum,
    })
  }

  newShoulder = () => {
    let shoulderLength = Store.shoulderMoves.length
    let newNum = this.state.shoulderNum + 1    
    if(newNum > shoulderLength - 1) {
        newNum = 0
    }
    this.setState({
        shoulderNum: newNum,
    })
  }
  

  newBicep = () => {
    let bicepLength = Store.bicepMoves.length
    let newNum = this.state.bicepNum + 1    
    if(newNum > bicepLength - 1) {
        newNum = 0
    }
    this.setState({
        bicepNum: newNum,
    })
  }

  newTricep = () => {
    let tricepLength = Store.bicepMoves.length
    let newNum = this.state.tricepNum + 1    
    if(newNum > tricepLength - 1) {
        newNum = 0
    }
    this.setState({
        tricepNum: newNum,
    })
  }

  


  

  render() {  
      

    if(this.state.chestNum == null) {
        return (
            <div className="workout">
                <div className='intro'>
                    <h1 className='titleHead'>Welcome to RandoFit!</h1>
                    <p>Are you lost in the gym? Sick of your workout plan? Maybe you just need a change of pace. RandoFit is here to help. Just click the button below, and we'll generate a random, full body work out for you.</p>
                    <Button  className='introBtn' color='red' onClick={this.newWorkout} block>New Workout</Button>
                </div>
                <Card elevation='medium'  className='exercise'>
                    <h2 className='exHeadDef'>Hit the button to get a new workout</h2>
                </Card>
            </div>
        )
    }

    
    return (
        <div className="workout" >
            <div className='intro'>
                <h1 className='titleHead'>Welcome to RandoFit!</h1>
                <p>Are you lost in the gym? Sick of your workout plan? Maybe you just need a change of pace. RandoFit is here to help. Just click the button below, and we'll generate a random, full body work out for you.</p>
                <Button  className='introBtn' color='red' onClick={this.newWorkout} block>New Workout</Button>
            </div>

    
            <ExCard exercise={Store.chestMoves} number={this.state.chestNum} newEx={this.newChest} />
            <ExCard exercise={Store.legMoves} number={this.state.legNum} newEx={this.newLeg} />
            <ExCard exercise={Store.backMoves} number={this.state.backNum} newEx={this.newBack} />
            <ExCard exercise={Store.shoulderMoves} number={this.state.shoulderNum} newEx={this.newShoulder} />
            <ExCard exercise={Store.bicepMoves} number={this.state.bicepNum} newEx={this.newBicep}  />
            <ExCard exercise={Store.tricepMoves} number={this.state.tricepNum} newEx={this.newTricep}  />

            
        </div>
    );
  }
}

export default Workout;