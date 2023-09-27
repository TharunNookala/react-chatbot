import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ExitMessage = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
        const intervalId = setInterval(change, 1000, 0);
        setTimeout(()=>{
            clearInterval(intervalId);
        }, 5000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(()=>{
        if(count===0){
            navigate("/second");
        }
    })

    const change = () =>{
        setCount(p=>p-1);
    }
  return (
    <div className='flex items-center justify-center'>
        <h2 className='font-semibold'>{count}...</h2>
    </div>
  )
}

export default ExitMessage