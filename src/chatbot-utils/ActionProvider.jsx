import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () =>{
        const message = createClientMessage('Got it!')
        updateState(message);
    };

    const afterGotIt = () =>{
        const message = createChatBotMessage('Pick a slot !',{
            widget : "slotPicker" 
        })
        updateState(message);
    }

    const timingMessage = (time) => {
        const message = createClientMessage(time.date+" "+time.time);
        updateState(message);
        nameMessage();
    }

    const nameMessage = () => {
        const message = createChatBotMessage('Enter you name')
        updateState(message, "age");
    };

    const ageMessage = () => {
        const message = createChatBotMessage('Enter you age', {
            widget : "ageField"
        });
        updateState(message, "exit");
    };

    const exitMessage = () => {
        const message = createChatBotMessage('Thank you. In 5 seconds, bot will exit',{
            widget : "exitMessage"
        });
        updateState(message);
    };

    const updateState = (message, checker="") => {
        setState((prev)=>({
            ...prev,
            messages : [...prev.messages, message],
            checker
        }))
    };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterGotIt,
            timingMessage,
            nameMessage,
            ageMessage,
            exitMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;