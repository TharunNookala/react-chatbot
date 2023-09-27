import React from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../features/dataSlice';

const MessageParser = ({ children, actions }) => {
    const dispatch = useDispatch()
  const parse = (message) => {
   if(children.props.state.checker==="age"){
    dispatch(setData({name: message}))
    actions.ageMessage();
   }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;