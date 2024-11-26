import React from 'react'
import "./home.css"
import Topbar from '../../componets/topbar/Topbar'
import Sidebar from '../../componets/sidebar/Sidebar'
import Feed from '../../componets/feed/Feed'
import Rightbar from '../../componets/rightbar/Rightbar'

export default function Home() {
  return (

    <div>
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
              </div>
  )
}
