import './Workout.css';
import React, { Component } from 'react';

class Workout extends Component {
  state = {
      chestNum: null,
      chestMoves: [
          'Bench Press', 'Push Up', 'Chest Fly', 'incline press', 'pec deck', 'cable crossover', 'decline press', 'dips'
      ],
      legNum: null,
      legMoves: ['squat', 'lunge', 'leg press', 'jump squat', 'step ups', 'leg extensions', 'box jumps'],
      shoulderNum: null,
      shoulderMoves: ['Military Press', 'Front Raise', 'lateral raise', 'barbell shoulder press']
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
                <h1>{this.state.chestMoves[this.state.chestNum]}</h1>
            </div>
            <div className='exercise'>
                <h1>{this.state.legMoves[this.state.legNum]}</h1>
            </div>
            <div className='exercise'>
                <h1>{this.state.shoulderMoves[this.state.shoulderNum]}</h1>
            </div>
        </div>
    );
  }
}

export default Workout;