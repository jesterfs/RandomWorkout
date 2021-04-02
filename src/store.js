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

let Store = {
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
      ],
      backMoves: [
        {
            name: 'Lat Pulldown',
            image: LatPull,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
        {
            name: 'Pull Up',
            image: PullUp,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
      ],
      bicepMoves: [
        {
            name: 'EZ Bar Curls',
            image: EZBar,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
        {
            name: 'Concentration Curls',
            image: ConcCurls,
            instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
        },
      ],
}

export default Store;