import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
function DeleteCoversationButton() {
  return (
        <div className= 'list_item delete_conv_button' onClick={()=>{}}>
            <div className= 'list_item_icon'><AiOutlineDelete color='white'/></div>
            <p className= 'list_item_text'>Delete Coversations</p>
        </div>
  )
}

export default DeleteCoversationButton