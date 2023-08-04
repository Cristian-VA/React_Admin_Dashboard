
import {FaUserAlt, FaHome, FaShoppingCart, FaClipboardList, FaPenSquare, FaCalendarAlt, FaQuestionCircle  } from "react-icons/fa";
import {  FaChartSimple, FaPen } from "react-icons/fa6"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';

const SideMenuEl = styled.div`
padding: 0px;
min-height:94.6vh;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
max-height: 200vh;
`

const active =  "flex px-6 py-5 text-sky-500 text-sm font-semibold gap-2 transition-all cursor-pointer"
const notActive = "flex px-6 py-5 text-gray-700 text-sm font-semibold gap-2 transition hover:bg-sky-100 cursor-pointer"


export default function SideMenu() {
  return (
    <SideMenuEl>

     <div className='flex gap-2 sm:gap-4 flex-col  p-4'>
        <img className="w-24 h-24 my-auto block mx-auto rounded-full shadow-md border-sky-200  border-2"src="../src/images/Logo 300.png" alt="" />
        <h1 className='text-md sm:text-xl md:text-xl font-semibold my-auto text-gray-700 px-2 pt-8'> SalesBoard  <span className="text-sky-500 border-gray-600 border-b-2"> UI</span> </h1>
      </div>
    
    <NavLink to="/"
    className= {({isActive}) => isActive ? active : notActive }>
      <FaHome className="my-auto w-5 h-5"/>
      <h1 className='my-auto'> Home</h1>
    </NavLink>

 

   

          <NavLink to="/users"
           className= {({isActive}) => isActive ? active : notActive }>      
                <FaUserAlt className="my-auto w-5 h-5"/>
                <h1 className='my-auto'> Users</h1> 
          </NavLink>

          <NavLink to="/products"
           className= {({isActive}) => isActive ? active : notActive }>
                <FaShoppingCart className="my-auto w-5 h-5"/>
                <h1 className='my-auto'> Products</h1>
          </NavLink>

          <NavLink to="/orders"
           className= {({isActive}) => isActive ? active : notActive }>
            <FaClipboardList className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Orders</h1>
          </NavLink>

          <NavLink to="/posts"
           className= {({isActive}) => isActive ? active : notActive }>
            <FaPenSquare className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Posts</h1>
            </NavLink>

    

    

          <NavLink to="/calendar"
           className= {({isActive}) => isActive ? active : notActive }>
            <FaCalendarAlt className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Calendar</h1>
            </NavLink>

    
   
          
          <NavLink to="/charts"
           className= {({isActive}) => isActive ? active : notActive }>
            <FaChartSimple className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> Charts</h1>
            </NavLink>

            <NavLink to="/FAQ"
           className= {({isActive}) => isActive ? active : notActive }>
            <FaQuestionCircle className="my-auto w-5 h-5"/>
            <h1 className='my-auto'> FAQ</h1>
            </NavLink>
    
    </SideMenuEl>
  )
}
