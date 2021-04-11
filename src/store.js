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
            instructions: ['Stand with one foot slightly in front of you, and the other raised up on a bench behind you', 'Bend your front knee, trying to only use the back leg for balance', 'Lower until your front knee is near 90 degrees', 'Drive up using your quads and glutes until back at start']
        },
        {
            name: 'Lunge',
            image: Lunge,
            instructions: ['Start with your fit hip width apart', 'Step one foot forward and bend that knee until it is near 90 degrees', 'Drive up through your quads and glutes as you step the back foot forward', 'Repeat on the other side']
        },
        {
            name: 'Box Jump',
            image: BoxJump,
            instructions: ['Stand in front of a plyometric box or another sturdy platform', 'Move your hips backwards until you feel your hamstrings tighten', 'Drive your hips forward as you jump into the air to land on the box', 'Step down and repeat']
        },
      ],
      shoulderMoves: [
        {
            name: 'Military Press',
            image: MiltPress,
            instructions: ['Set up a barbell on the hooks of a squat rack about shoulder height', 'Step up to the bar and put both hands on the bar about shoulder width apart', 'Lift the bar and hold it about chest high','Press upward keeping your elbows from flaring out','Lift upward until arms are straight above your head', 'Be careful not to arch your back']
        },
        {
            name: 'Lateral Raise',
            image: LatRaise,
            instructions: ['Pick up a pair of dumbbells and hold them with your arms towards the floor and somewhat in front of your body', 'Lift the weights to the side and 20-30 degrees in front of your body keeping your arms straight', 'As you approach parallel to the ground turn your thumbs slightly towards the ceiling','Lower the weights to the original spot and repeat']
        },
        {
            name: 'Front Raise',
            image: FrontRaise,
            instructions: ['Pick up two dumbbells of appropriate weight', 'Stand with your arms hanging down and your feet shoulder width apart', 'With your arms straight and holding the dumbbells with your palms facing your body, lift the weight in front of you until your arms are parallel with the floor', 'Slowly bring your arms back to the starting position']
        },
        {
            name: 'Rear Delt Fly',
            image: RearDeltFly,
            instructions: ['Pick up a pair of dumbbells and hold them with your feet about shoulder width apart', 'Hinge at your waist until your torso is almost parallel with the floor', 'With your arms bent slightly contract your rear deltoid and bring the dumbbells up and out to your sides until your arms are parallel to the floor ','Slowly bring your arms back to the starting position']
        },
        {
            name: 'Arnold Press',
            image: ArnoldPress,
            instructions: ['Pick two dumbbells of appropriate weight', 'Hold the dumbbells at shoulder level with your palms facing your body', 'Begin lifting the dumbbells and at the same time rotate your hands outward so the when you reach the top of the move, your palms are facing outward','Lower the dumbbells rotating your hands inward so that when you reach the starting position your palms are once again facing your body']
        },
      ],
      backMoves: [
        {
            name: 'Lat Pulldown',
            image: LatPull,
            instructions: ['Using a wide pully attachment, grasp the bar slightly wider than shoulder width', 'Bend your elbows to move the bar down and toward your chest', 'lean back slightly as you squeeze the bar', 'ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']
        },
        {
            name: 'Pull Up',
            image: PullUp,
            instructions: ['Grab a pullup bar with an overhand grip, just wider than your shoulders', 'Pull yourself up towards the bar, making sure to primarily pull your your upperback', 'Once your chin is above the bar, squeeze your shoulder blades together', 'Slowly lower yourself down, but do not let your feet touch the ground']
        },
        {
            name: 'Cable Row',
            image: CableRow,
            instructions: ['Either seated or standing, set a pully to navel height', 'Grab the pully attachmentwith your arms fully extended', 'Pull towards your mid torso, making sure to primarily pull your your upperback', 'Once the handle is nearly touching your torso, squeeze your shoulder blades together', 'Slowly let the pully return to the starting position']
        },
        {
            name: 'Barbell Row',
            image: BarbellRow,
            instructions: ['Hinge at your waist and grab a barbell on the floor or slightly raised platform at shoulder width', 'Keeping your back flat, pull the bar off the floor using your upperback', 'Pull until the the bar nearly touches your mid torso and squeeze your shoulder blades together', 'Slowly lower the weight, but do not let the bar touch the ground']
        },
        {
            name: 'Dumbbell Row',
            image: DumbbellRow,
            instructions: ['Grab a dumbbell in one hand, hinge at your waist, and rest your other hnd on a bench to support your weight', 'Using your upper back, bend your elbow and pull the weight up', 'Keep your body square to the ground while pulling until your arm is fully bent', 'Slowly lower the weight back to start']
        },
      ],
      bicepMoves: [
        {
            name: 'Barbell Curl',
            image: EZBar,
            instructions: ['With an underhand grip, grab a barbell at hust wider than hips width', 'Start with your arms hanging down and the bar touching your thighs', 'Bend your elbows while keeping them stationary', 'Bring the bar up until your arms are fully bent', 'Lower back to start, stopping just short of locking out.']
        },
        {
            name: 'Concentration Curl',
            image: ConcCurls,
            instructions: ['Sit on the edge of a bench with a dumbbell hanging in one hand between your legs', 'Rest your arm along the innter thigh to keep it stationary', 'Bend your elbow while keeping it stationary', 'Bring the dumbbell up until your arm is fully bent', 'Lower back to start, stopping just short of locking out.']
        },
        {
            name: 'Reverse Curl',
            image: ReverseCurl,
            instructions: ['With an overhand grip, grab a barbell at hust wider than hips width', 'Start with your arms hanging down and the bar touching your thighs', 'Bend your elbows while keeping them stationary', 'Bring the bar up until your arms are fully bent', 'Lower back to start, stopping just short of locking out.']
        },
        {
            name: 'Preacher Curl',
            image: PreacherCurl,
            instructions: ['Sit on a preacher curl bench with your arms resting on the front pad, holding a barbell with an underhand grip', 'Keeping your upper arms against the pad, bend your elbows and bring the bar up towards your chin', 'Lower back to start, stopping just short of locking out.']
        },
        {
            name: 'Drag Curl',
            image: DragCurls,
            instructions: ['Hold two dumbbells with your arms fully extended down, palms facing forward', 'Bend your elbows, but let them move behind your body', 'Allow the weights to "drag" up your body until your arms are fully bent', 'Lower back to start, stopping just short of locking out.']
        },
      ],
      tricepMoves: [
        {
            name: 'Nose Breaker',
            image: NoseBreaker,
            instructions: ['Always use a spotter or bench with safety bars','Grab a small barbell at shoulder width', 'Lay down on a bench with the bar extended above you', 'Without moving your upper arms, slowly bend your elbows until the bar is a few enches above your head', 'straighten your arms and return to start']
        },
        {
            name: 'Tricep Push Down',
            image: TriPush,
            instructions: ['Set a pully to about a foot above your head', 'Grab the attachment with either a neutral or overhand grip and pull down until your upper arms are against your sides', 'Without moving your upper arms, push down and straighten your arms', 'Let the pully move back up, but stop before your upper arms leave your sides']
        },
        {
            name: 'Tricep Kickback',
            image: TriKick,
            instructions: ['Hinge at your waist and with a dumbbell in each hand', 'Keeping your back straight, position your arms at a 90 degree angle with your upper arms parallel to the florr', 'Without moving your upper arms, straighten your elbows', 'Return your elbows to a 90 degree angle']
        },
        {
            name: 'Close Grip Bench',
            image: CloseGrip,
            instructions: ['On a normal bench press bench, grab the bar with your hands slightly wider than your head', 'Lift the bar off the hooks and lower it to your upper chest', 'When the bar is a few inches about your chest, push up and extend your arms back to start']
        }
      ],
}

export default Store;