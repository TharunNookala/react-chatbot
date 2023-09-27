import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from '../components/Avatar';
import StartBtn from '../components/StartBtn';
import SlotPicker from '../components/SlotPicker';
import AgeField from '../components/AgeField';
import ExitMessage from '../components/ExitMessage';

const config = {
    botName : "Student Enrollment helper",
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
        widget : "startBtn" 
    })],
    customComponents: {
        botAvatar : (props) => <Avatar {...props} />
    },
    widgets: [
        {
            widgetName : "startBtn",
            widgetFunc : (props) => <StartBtn {...props} />
        },
        {
            widgetName : "slotPicker",
            widgetFunc : (props) => <SlotPicker {...props} />
        },
        {
            widgetName : "ageField",
            widgetFunc : (props) => <AgeField {...props} />
        },
        {
            widgetName : "exitMessage",
            widgetFunc : (props) => <ExitMessage {...props} />
        }
    ]
};

export default config;