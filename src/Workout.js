
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


class Workout extends Component {
  state = {
      chestNum: null,
      hiddenChest: true,
      chestMoves: Store.chestMoves,
      
      legNum: null,
      hiddenLeg: true,
      legMoves: Store.legMoves,
      shoulderNum: null,
      hiddenShoulder: true,
      shoulderMoves: Store.shoulderMoves,
      backNum: null,
      hiddenBack: true,
      backMoves: Store.backMoves,
      BicepNum: null,
      hiddenBicep: true,
      bicepMoves: Store.bicepMoves,
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  newWorkout = () => {
    let chestLength = this.state.chestMoves.length
    let legLength = this.state.legMoves.length
    let shoulderLength = this.state.shoulderMoves.length
    let backLength = this.state.backMoves.length
    let bicepLength = this.state.bicepMoves.length
    this.setState({
        chestNum: this.getRandomInt(chestLength),
        legNum: this.getRandomInt(legLength),
        shoulderNum: this.getRandomInt(shoulderLength),
        backNum: this.getRandomInt(backLength),
        bicepNum: this.getRandomInt(bicepLength),
    })
    
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
            <ExCard exercise={this.state.chestMoves} number={this.state.chestNum} newEx={this.newChest} />
            <ExCard exercise={this.state.legMoves} number={this.state.legNum} newEx={this.newLeg} />
            <ExCard exercise={this.state.backMoves} number={this.state.backNum} newEx={this.newBack} />
            <ExCard exercise={this.state.shoulderMoves} number={this.state.shoulderNum} newEx={this.newShoulder} />
            <ExCard exercise={this.state.bicepMoves} number={this.state.bicepNum} newEx={this.newBicep}  />
            {/* <div className='intro'>
                <h1 className='titleHead'>Welcome to RandoFit!</h1>
                <p>Are you lost in the gym? Sick of your workout plan? Maybe you just need a change of pace. RandoFit is here to help. Just click the button below, and we'll generate a random, full body work out for you.</p>
                <Button className='introBtn' color='red' onClick={this.newWorkout} block>New Workout</Button>
            </div>
           
            <Card elevation='medium' round='small'  className='exercise' onMouseOver={this.showChest} onMouseLeave={this.hideChest}>
                <div className='exMain'>
                    <img className='exImg' alt='picture of the exercise' src={this.state.chestMoves[this.state.chestNum].image} ></img>
                    <div className='exText'>
                        <h2 className='exHead'>{this.state.chestMoves[this.state.chestNum].name}</h2>
                        <div className='block-buttons'>
                            <Button  color='red' className='exBtn block-buttons' label='New Exercise' onClick={this.newChest} block>New Exercise</Button>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.showChest} block>More Info</Button>
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
                    <Button appearance='ghost' color='red' className='exBtn' onClick={this.hideChest}>Less Info</Button>
                </div>
                
            </Card>
            <Card elevation='medium' className='exercise' onMouseOver={this.showLeg} onMouseLeave={this.hideLeg}>
                <div className='exMain'>
                    <img className='exImg' alt='picture of the exercise' src={this.state.legMoves[this.state.legNum].image} ></img>
                    <div className='exText'>
                        <h2 className='exHead'>{this.state.legMoves[this.state.legNum].name}</h2>
                        <div className='block-buttons'>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.newLeg} block>New Exercise</Button>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.showLeg} block>More Info</Button>
                        </div>
                    </div>
                </div>
                <div className={(this.state.hiddenLeg) ? 'hiddenDesc' : 'exDesc'} >
                    <h3>Instructions</h3>
                    <ol>
                        {this.state.legMoves[this.state.legNum].instructions.map(instruction => 
                        <li >
                            {instruction}
                        </li>)}
                    </ol>
                    <Button appearance='ghost' color='red' className='exBtn' onClick={this.hideLeg}>Less Info</Button>
                </div>
                
            </Card>
            <Card elevation='medium' className='exercise' onMouseOver={this.showShoulder} onMouseLeave={this.hideShoulder}>
                <div className='exMain'>
                    <img className='exImg' alt='picture of the exercise' src={this.state.shoulderMoves[this.state.shoulderNum].image} ></img>
                    <div className='exText'>
                        <h2 className='exHead'>{this.state.shoulderMoves[this.state.shoulderNum].name}</h2>
                        <div className='block-buttons'>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.newShoulder} block>New Exercise</Button>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.showShoulder} block>More Info</Button>
                        </div>
                    </div>
                </div>
                <div className={(this.state.hiddenShoulder) ? 'hiddenDesc' : 'exDesc'} >
                    <h3>Instructions</h3>
                        <ol>
                            {this.state.shoulderMoves[this.state.shoulderNum].instructions.map(instruction => 
                            <li >
                                {instruction}
                            </li>)}
                        </ol>
                        <Button appearance='ghost' color='red' className='exBtn' onClick={this.hideShoulder}>Less Info</Button>
                </div> 
            </Card>
            <Card elevation='medium' className='exercise' onMouseOver={this.showBack} onMouseLeave={this.hideBack}>
                <div className='exMain'>
                    <img className='exImg' alt='picture of the exercise' src={this.state.backMoves[this.state.backNum].image} ></img>
                    <div className='exText'>
                        <h2 className='exHead'>{this.state.backMoves[this.state.backNum].name}</h2>
                        <div className='block-buttons'>
                            <Button  color='red' className='exBtn block-buttons'  onClick={this.newBack} block>New Exercise</Button>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.showBack} block>More Info</Button>
                        </div>
                             
                    </div>
                </div>
                <div className={(this.state.hiddenBack) ? 'hiddenDesc' : 'exDesc'} >
                    <h3>Instructions</h3>
                    <ol>
                        {this.state.backMoves[this.state.backNum].instructions.map(instruction => 
                        <li >
                            {instruction}
                        </li>)}
                    </ol>
                    <Button appearance='ghost' color='red' className='exBtn' onClick={this.hideBack}>Less Info</Button>
                </div> 
                
            </Card>
            <Card elevation='medium' className='exercise' onMouseOver={this.showBicep} onMouseLeave={this.hideBicep}>
                <div className='exMain'>
                    <img className='exImg' alt='picture of the exercise' src={this.state.bicepMoves[this.state.bicepNum].image} ></img>
                    <div className='exText'>
                        <h2 className='exHead'>{this.state.bicepMoves[this.state.bicepNum].name}</h2>
                        <div className='block-buttons'>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.newBicep} block>New Exercise</Button>
                            <Button  color='red' className='exBtn block-buttons' onClick={this.showBicep} block>More Info</Button>
                        </div>
                        
                    </div>
                </div>
                <div className={(this.state.hiddenBicep) ? 'hiddenDesc' : 'exDesc'} >
                    <h3>Instructions</h3>
                    <ol>
                        {this.state.bicepMoves[this.state.bicepNum].instructions.map(instruction => 
                        <li >
                            {instruction}
                        </li>)}
                    </ol>
                    <Button appearance='ghost' color='red' className='exBtn' onClick={this.hideBicep}>Less Info</Button>
                </div>
                
            </Card> */}
        </div>
    );
  }
}

export default Workout;