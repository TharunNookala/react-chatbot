import { useEffect, useState } from 'react'

const StartBtn = (props) => {
  const [getItDone, setGetItDone] = useState(false);
  const handleClick = () => {
    props.actions.initialAction();
    document.getElementById('startBtn').style.display = 'none';
    setGetItDone(true);
  }

  const afterGotIt = () => {
    props.actions.afterGotIt();
  }

  useEffect(()=>{
    if(getItDone===true){
      afterGotIt();
    }
  }, [getItDone])

  return (
    <button id='startBtn' className='px-3 py-1 rounded-2xl bg-gray-200 border-none ml-60' onClick={()=>handleClick()}>Got it!</button>
  )
}

export default StartBtn