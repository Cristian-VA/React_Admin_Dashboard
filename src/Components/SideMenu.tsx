import React from 'react'
import {FaUserAlt, FaHome, FaShoppingCart, FaClipboardList, FaPenSquare, FaBorderAll, FaStickyNote, FaWpforms, FaCalendarAlt, FaServer, } from "react-icons/fa";
import { FaGear, FaChartSimple, FaPen } from "react-icons/fa6"
import styled from "styled-components"

const SideMenuEl = styled.div`
padding: 0px;
`
const TitleDiv = styled.div`
 padding: 0.75rem 1.25rem;
 color: rgb(161 161 170);
 background-color: #313135;
 font-weight: 600;
`


export default function SideMenu() {
  return (
    <SideMenuEl>

    <TitleDiv> 
      <h1>Main</h1>
    </TitleDiv>

    <div className='flex px-5 py-3 text-zinc-400 text-sm  gap-2 transition hover:bg-zinc-800 cursor-pointer'>
      <FaHome className="my-auto w-5 h-5"/>
      <h1 className='my-auto'> Home</h1>
    </div>

    <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
      <FaUserAlt className="my-auto w-5 h-5"/>
      <h1 className='my-auto'> Profile</h1>
    </div>

    <TitleDiv> 
      <h1>Lists</h1>
    </TitleDiv>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaUserAlt className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Users</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaShoppingCart className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Products</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaClipboardList className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Orders</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaPenSquare className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Posts</h1>
          </div>

    

    <TitleDiv> 
      <h1>General</h1>
    </TitleDiv>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaBorderAll className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Elements</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaStickyNote className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Notes</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaWpforms className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Forms</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaCalendarAlt className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Calendars</h1>
          </div>
    
    <TitleDiv> 
      <h1>Maintenance</h1>
    </TitleDiv>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaGear className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Settings</h1>
          </div>


          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaServer className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Backup</h1>
          </div>

    <TitleDiv> 
      <h1>Analytics</h1>
    </TitleDiv>
          
          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaChartSimple className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Charts</h1>
          </div>

          <div className='flex px-5 py-3 text-zinc-400 text-sm gap-2 transition hover:bg-zinc-800 cursor-pointer'>
            <FaPen className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Logs</h1>
          </div>
    
    </SideMenuEl>
  )
}
