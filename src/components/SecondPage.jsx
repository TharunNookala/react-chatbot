import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const SecondPage = () => {
  const navigate = useNavigate();
  const  {name, age} = useSelector((store)=>store.data);
  const handleExit = () => {
    navigate('/');
  }
  return (
    <div className='bg-green-200 h-screen w-screen flex flex-col items-center justify-center gap-12 p-2'>
        <h2 className='text-5xl font-extrabold w-3/5'>Your name <span>{name}</span>, aged <span>{age}</span> has been added to student system. You may now exit.</h2>
        <button className='px-4 py-2 bg-gray-100 rounded text-4xl font-bold hover:bg-gray-200' onClick={()=>handleExit()}>Exit</button>
    </div>
  )
}

export default SecondPage