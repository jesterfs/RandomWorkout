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
import Store from './store.js'

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

  showChest = () => {
    this.setState({hiddenChest: false})
  }

  hideChest = () => {
    this.setState({hiddenChest: true})
  }

  showLeg = () => {
    this.setState({hiddenLeg: false})
  }

  hideLeg = () => {
    this.setState({hiddenLeg: true})
  }

  showShoulder = () => {
    this.setState({hiddenShoulder: false})
  }

  hideShoulder = () => {
    this.setState({hiddenShoulder: true})
  }

  showBack = () => {
    this.setState({hiddenBack: false})
  }

  hideBack = () => {
    this.setState({hiddenBack: true})
  }

  showBicep = () => {
    this.setState({hiddenBicep: false})
  }

  hideBicep = () => {
    this.setState({hiddenBicep: true})
  }


  

  render() {  
      

    if(this.state.chestNum == null) {
        return (
            <div className="workout">
                <div className='intro'>
                    <h1>Welcome to RandoFit!</h1>
                    <p>Are you lost in the gym? Sick of your workout plan? Maybe you just need a change of pace. RandoFit is here to help. Just click the button below, and we'll generate a random, full body work out for you.</p>
                    <button onClick={this.newWorkout}>New Workout</button>
                </div>
                <div className='exercise'>
                    <h2>Hit the button to get a new workout</h2>
                </div>
            </div>
        )
    }

    
    return (
        <div className="workout" >
            <div className='intro'>
                <h1>Welcome to RandoFit!</h1>
                <p>Are you lost in the gym? Sick of your workout plan? Maybe you just need a change of pace. RandoFit is here to help. Just click the button below, and we'll generate a random, full body work out for you.</p>
                <button onClick={this.newWorkout}>New Workout</button>
            </div>
           
            <div className='exercise' onMouseOver={this.showChest} onMouseLeave={this.hideChest}>
                <div className='exMain'>
                    <img src={this.state.chestMoves[this.state.chestNum].image} ></img>
                    <div>
                        <h2>{this.state.chestMoves[this.state.chestNum].name}</h2>
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
            <div className='exercise' onMouseOver={this.showLeg} onMouseLeave={this.hideLeg}>
                <div className='exMain'>
                    <img src={this.state.legMoves[this.state.legNum].image} ></img>
                    <div>
                        <h2>{this.state.legMoves[this.state.legNum].name}</h2>
                        <div>
                            <button className='exBtn' onClick={this.newLeg}>New Exercise</button>
                            <button className='exBtn' onClick={this.showLeg}>More Info</button>
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
                    <button className='exBtn' onClick={this.hideLeg}>Less Info</button>
                </div>
                
            </div>
            <div className='exercise' onMouseOver={this.showShoulder} onMouseLeave={this.hideShoulder}>
                <div className='exMain'>
                    <img src={this.state.shoulderMoves[this.state.shoulderNum].image} ></img>
                    <div>
                        <h2>{this.state.shoulderMoves[this.state.shoulderNum].name}</h2>
                        <div>
                            <button className='exBtn' onClick={this.newShoulder}>New Exercise</button>
                            <button className='exBtn' onClick={this.showShoulder}>More Info</button>
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
                    <button className='exBtn' onClick={this.hideShoulder}>Less Info</button>
                </div>
                
            </div>
            <div className='exercise' onMouseOver={this.showBack} onMouseLeave={this.hideBack}>
                <div className='exMain'>
                    <img src={this.state.backMoves[this.state.backNum].image} ></img>
                    <div>
                        <h2>{this.state.backMoves[this.state.backNum].name}</h2>
                        <div>
                            <button className='exBtn' onClick={this.newBack}>New Exercise</button>
                            <button className='exBtn' onClick={this.showBack}>More Info</button>
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
                    <button className='exBtn' onClick={this.hideBack}>Less Info</button>
                </div>
                
            </div>
            <div className='exercise' onMouseOver={this.showBicep} onMouseLeave={this.hideBicep}>
                <div className='exMain'>
                    <img src={this.state.bicepMoves[this.state.bicepNum].image} ></img>
                    <div>
                        <h2>{this.state.bicepMoves[this.state.bicepNum].name}</h2>
                        <div>
                            <button className='exBtn' onClick={this.newBicep}>New Exercise</button>
                            <button className='exBtn' onClick={this.showBicep}>More Info</button>
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
                    <button className='exBtn' onClick={this.hideBicep}>Less Info</button>
                </div>
                
            </div>
        </div>
    );
  }
}

export default Workout;