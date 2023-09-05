import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid";
import { addMessage } from '../dashboardSlice';

function NewMessageInput() {

  const [content, setContent] = useState("");
  const selectedConversationId = useSelector((state)=>state.dashboard.selectedConversationId)
  const dispatch = useDispatch();
  const proceedMessage = () => {
    const messsage = {
      aiMessage: false,
      content,
      id: uuid(),
      animate:false,
    };

    console.log(messsage)

    const conversationId = selectedConversationId==="new"?uuid():selectedConversationId;
    //append this message to our local store
    dispatch(addMessage({
      conversationId,
      messsage,
    }))

    //send message to local server


    //reset the value of the input
    setContent('');
 
  };
  const handleSendMessage = () => {
    if(content.length>0){
      proceedMessage();
    }
  };

  const handleKeyPressed = (e) =>{
    if(e.code === "Enter" && content.length>0){
      proceedMessage();
    }
  };

  return (
    <div className='new_message_input_container'>
         <input 
            className='new_message_input'
            placeholder='send a message'
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            onKeyDown={handleKeyPressed}
        />
        <div className='new_message_icon_container' onClick={handleSendMessage}>
            <BsSend color='grey'/>
        </div>
    </div>
  )
}

export default NewMessageInput