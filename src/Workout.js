import './Workout.css';
import React, { Component } from 'react';
import Bench from './images/bench.jpg';
import Squat from './images/squat.jpg';
import MiltPress from './images/miltpress.jpg';
import DeadLift from './images/deadlift.jpg';
import Pushup from './images/pushup.jpg';
import LatRaise from './images/latraise.jpg';

class Workout extends Component {
  state = {
      chestNum: null,
      hiddenChest: true,
      chestMoves: [
        {
            name: 'Bench Press',
            image: Bench,
            instructions: 'Raise the bar off the hook, lower it to your chest, and push back up until arms are nearly straight.',
            isHidden: true

        },
        {
            name: 'Pushup',
            image: Pushup,
            instructions: 'From a plank position, bend your elbows and lower your body until you are near the ground. Push back up into plank position.',
            
        },
      ],
      legNum: null,
      hiddenLeg: true,
      legMoves: [
        {
            name: 'Barbell Squat',
            image: Squat,
            instructions: 'Rack a barbell onto your upper back. Bend your knees and push your hips back until your upper leg is nearly parallel with the ground. Drive up through your heels and stand back up just short of locking your knees.'
        },
        {
            name: 'Deadlift',
            image: DeadLift,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
      ],
      shoulderNum: null,
      hiddenShoulder: true,
      shoulderMoves: [
        {
            name: 'Military Press',
            image: MiltPress,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
        {
            name: 'Lateral Raise',
            image: LatRaise,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
      ]
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  newWorkout = () => {
    let chestLength = this.state.chestMoves.length
    let legLength = this.state.legMoves.length
    let shoulderLength = this.state.shoulderMoves.length
    this.setState({
        chestNum: this.getRandomInt(chestLength),
        legNum: this.getRandomInt(legLength),
        shoulderNum: this.getRandomInt(shoulderLength),
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


  

  render() {  
      

    if(this.state.chestNum == null) {
        return (
            <div className="workout">
            <button onClick={this.newWorkout}>New Workout</button>
            <div className='exercise'>
                <h1>Hit the button to get a new workout</h1>
            </div>
        </div>
        )
    }


    return (
        <div className="workout">
            <button onClick={this.newWorkout}>New Workout</button>
            <div className='exercise'>
                <div className='exMain'>
                    <img src={this.state.chestMoves[this.state.chestNum].image} ></img>
                    <div>
                        <h1>{this.state.chestMoves[this.state.chestNum].name}</h1>
                        <div>
                            <button className='exBtn' onClick={this.newChest}>New Exercise</button>
                            <button className='exBtn' onClick={this.showChest}>More Info</button>
                        </div>
                    </div>
                </div>
                <div className={(this.state.hiddenChest) ? 'hiddenDesc' : 'exDesc'} id='chestDesc'>
                    <p>{this.state.chestMoves[this.state.chestNum].instructions}</p>
                    <button className='exBtn' onClick={this.hideChest}>Less Info</button>
                </div>
                
            </div>
            <div className='exercise'>
                <div className='exMain'>
                    <img src={this.state.legMoves[this.state.legNum].image} ></img>
                    <div>
                        <h1>{this.state.legMoves[this.state.legNum].name}</h1>
                        <div>
                            <button className='exBtn' onClick={this.newLeg}>New Exercise</button>
                            <button className='exBtn' onClick={this.showLeg}>More Info</button>
                        </div>
                    </div>
                </div>
                <div className={(this.state.hiddenLeg) ? 'hiddenDesc' : 'exDesc'} >
                    <p>{this.state.legMoves[this.state.legNum].instructions}</p>
                    <button className='exBtn' onClick={this.hideLeg}>Less Info</button>
                </div>
                
            </div>
            <div className='exercise'>
                <div className='exMain'>
                    <img src={this.state.shoulderMoves[this.state.shoulderNum].image} ></img>
                    <div>
                        <h1>{this.state.shoulderMoves[this.state.shoulderNum].name}</h1>
                        <div>
                            <button className='exBtn' onClick={this.newShoulder}>New Exercise</button>
                            <button className='exBtn' onClick={this.showShoulder}>More Info</button>
                        </div>
                    </div>
                </div>
                <div className={(this.state.hiddenShoulder) ? 'hiddenDesc' : 'exDesc'} >
                    <p>{this.state.shoulderMoves[this.state.shoulderNum].instructions}</p>
                    <button className='exBtn' onClick={this.hideShoulder}>Less Info</button>
                </div>
                
            </div>
        </div>
    );
  }
}

export default Workout;