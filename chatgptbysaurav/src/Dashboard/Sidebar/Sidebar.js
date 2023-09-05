import React from 'react'
import NewChatButton from './NewChatButton'
import ListItem from './ListItem'
import DeleteCoversationButton from './DeleteCoversationButton'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedConversationId } from '../dashboardSlice'

function Sidebar() {

  const dispatch = useDispatch();

  const conversations = useSelector((state)=>state.dashboard.conversations);

  const handleSetSelectedChat = (id) => {
    dispatch(setSelectedConversationId(id));
  }
  return (
    <div className='sidebar_container'>
        <NewChatButton handleSetSelectedChat={handleSetSelectedChat}/>
        {
          conversations.map((c) => (<ListItem
          key = {c.id}
          title={c.messages[0].content}
          chatId={c}
          />))
        }
        <DeleteCoversationButton />
    </div>
  )
}

export default Sidebar