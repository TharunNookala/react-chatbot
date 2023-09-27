import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../features/dataSlice';

const AgeField = (props) => {
    const {name} = useSelector((store)=>store.data)
    const initialAge = 18;
    const maxAge = 40;
    const [age, setAge] =   useState(initialAge);
    const dispatch = useDispatch();
    const ageOptions = [];
    for(let i=initialAge; i<=maxAge; i++) {
        ageOptions.push(
            <option key={i} value={i}>{i}</option>
        );
    }

    const submitAge = () => {
        dispatch(setData({name:name, age:age}));
        props.actions.exitMessage();
    }

  return (
    <div className='flex items-center justify-evenly gap-1'>
        <select id="age" name='age' value={age} onChange={(e)=>setAge(e.target.value)}>
            {ageOptions}
        </select>
        <button className='bg-gray-100 p-1' onClick={submitAge}>Submit</button>
    </div>
  )
}

export default AgeField