import React from 'react'
import "./dashboard.css"
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

export default function Dashboard() {
  return (
    <div className='dashboard_container'>
        <Sidebar/>
        <Chat/>
    </div>
  )
}
