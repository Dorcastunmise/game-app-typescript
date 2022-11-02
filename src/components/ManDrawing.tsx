const head = (
    <div className="head-portion"/>
);
const body = (
    <div className="straight-portion"/>
);
const rightLimb = (
   <div className="right-limb"/>
);
const leftLimb = (
    <div className="left-limb"/>
);
const rightLeg = (
    <div className="right-leg"/>
 );
const leftLeg = (
    <div className="left-leg"/>
);
const bodyPart = [head, body, rightLimb, leftLimb,
    rightLeg, leftLeg];

type ManDrawingProps = {
    guessAmount: number
}
const ManDrawing = ({ guessAmount } : ManDrawingProps) => {
  return (
    <div className='diagram-wrapper'>
        {bodyPart.slice(0, guessAmount)}
        <div className='drop-line'/>
        <div className='top-line'/>
        <div className='middle-line'/>
        <div className='bottom-line'/>
    </div>
  )
}

export default ManDrawing;