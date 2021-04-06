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

let Store = {
    chestMoves: [
        {
            name: 'Bench Press',
            image: Bench,
            instructions: ['Raise the bar off the hook', 'Lower it to your chest', 'Push back up until arms are nearly straight'],
            isHidden: true

        },
        {
            name: 'Pushup',
            image: Pushup,
            instructions: ['Start in a plank position', 'Lower your body until you are near the ground', 'Push back up into plank position'],
            
        },
        {
            name: 'Dumbbell Fly',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Chest Dips',
            image: ChestDip,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Incline Bench Press',
            image: InclineBench,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Decline Bench Press',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'High Cable Crossover',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
    ],
    legMoves: [
        {
            name: 'Barbell Squat',
            image: Squat,
            instructions: ['Rack a barbell onto your upper back', 'Bend your knees and push your hips back until your upper leg is nearly parallel with the ground', 'Drive up through your heels and stand back up']
        },
        {
            name: 'Deadlift',
            image: DeadLift,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Lunge',
            image: LegPress,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Split Squat',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Leg Press',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Box Jump',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
      ],
      shoulderMoves: [
        {
            name: 'Military Press',
            image: MiltPress,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Lateral Raise',
            image: LatRaise,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Front Raise',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Rear Delt Fly',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Arnold Press',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
      ],
      backMoves: [
        {
            name: 'Lat Pulldown',
            image: LatPull,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Pull Up',
            image: PullUp,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Cable Row',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Barbell Row',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Dumbbell Row',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
      ],
      bicepMoves: [
        {
            name: 'EZ Bar Curl',
            image: EZBar,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Concentration Curl',
            image: ConcCurls,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Reverse Curl',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Preacher Curl',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Drag Curl',
            image: Placeholder,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
      ],
}

export default Store;