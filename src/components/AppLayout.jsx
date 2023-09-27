import '../App.css';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "../chatbot-utils/config";
import MessageParser from "../chatbot-utils/MessageParser";
import ActionProvider from "../chatbot-utils/ActionProvider";
import { useState } from "react";

const AppLayout = () => {
    const [isEnroll, setisEnroll] = useState(false);

  return (
    <div className="bg-green-300 h-screen w-screen flex flex-col justify-center items-center gap-12 p-2">
      <h1 className='text-7xl font-extrabold'>Enter into Student's info system..!</h1>
      <button className='px-4 py-2 bg-gray-100 rounded text-4xl font-bold hover:bg-gray-200' onClick={()=>setisEnroll(!isEnroll)}>
        {isEnroll ? "Done!" : "Enroll"}
      </button>
      {
        isEnroll && <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      }
    </div>
  )
}

export default AppLayout