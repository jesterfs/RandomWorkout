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
            image: DumbbellFly,
            instructions: ['Lay on a flat bench holding two dumbbells above your chest', 'Without bending your elbows, slowly lower your arms to parallel', 'Squeezing your pecs, return the weights to the starting position']
        },
        {
            name: 'Chest Dips',
            image: ChestDip,
            instructions: ['Hold your body up on two horizontal bars', 'Leaning forward slightly, lower your body down until your elbows are 90 degrees', 'Push your body back up to start']
        },
        {
            name: 'Incline Bench Press',
            image: InclineBench,
            instructions: ['On an incline bench, lift the bar off the hooks', 'Lower it to your upper chest', 'Push back up until arms are nearly straight']
        },
        {
            name: 'Decline Bench Press',
            image: DeclineBench,
            instructions: ['On a decline bench, lift the bar off the hooks', 'Lower it to your lower chest', 'Push back up until arms are nearly straight']
        },
        {
            name: 'High Cable Crossover',
            image: HighCableCross,
            instructions: ['On a two tower pully system, position each pully above your head', 'Grab the handles at head height', 'Using your pecs, bring your hands together at navel height, squeezing your chest muscles at the bottom', 'Let hands return to start']
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
            instructions: ['Stand with your feet at hip width the the barbell resting on against your shins', 'Lean forward and grasp the bar just outside of leg width', 'Bend your knees, sit back into your hips, and straighten your back, letting the barbell anchor you', 'Stand up by driving your hips forward', 'Reverse the motion and return the bar to the ground']
        },
        {
            name: 'Leg Press',
            image: LegPress,
            instructions: ['Sit with your feet up against the platform and your knees close to 90 degrees', 'Driving through your heels, push the plaform away from you and straighten your legs', 'return the platform to the starting position']
        },
        {
            name: 'Split Squat',
            image: SplitSquat,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Lunge',
            image: Lunge,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Box Jump',
            image: BoxJump,
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
            image: FrontRaise,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Rear Delt Fly',
            image: RearDeltFly,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Arnold Press',
            image: ArnoldPress,
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
            image: CableRow,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Barbell Row',
            image: BarbellRow,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Dumbbell Row',
            image: DumbbellRow,
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
            image: ReverseCurl,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Preacher Curl',
            image: PreacherCurl,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Drag Curl',
            image: DragCurls,
            instructions: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
      ],
}

export default Store;