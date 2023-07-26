import React from 'react'
import {FaSearch, FaBell, FaSignOutAlt} from "react-icons/fa";

import styled from "styled-components"

const StyledNav = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5em;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background: #fafafa;
`

export default function Navbar() {
  return (
    <StyledNav>
      <div className='flex gap-2 sm:gap-4'>
        <img className="w-6 h-6 md:w-12 md:h-12 my-auto"src="../src/images/Logo 300.png" alt="" />
        <h1 className='text-md sm:text-xl md:text-2xl font-semibold my-auto'> SalesBoard </h1>
      </div>

      <div className='flex gap-6 md:gap-12'>
          <div className='flex gap-2 md:gap-4 text-zinc-500'>
              <FaSearch className="w-4 h-4 sm:w-6 sm:h-6 my-auto"/>
              <FaBell className="w-4 h-4 sm:w-6 sm:h-6 my-auto"/>
              
          </div>

          <div className='flex gap-2 '>
            <div className='w-5 h-5 sm:w-8 sm:h-8 bg-red-500 rounded-full my-auto'></div>
            <h1 className='text-sm md:text-md my-auto'>user</h1>
           
          </div>

          <div className='flex gap-2'>
        
          <FaSignOutAlt className="w-4 h-4 sm:w-6 sm:h-6 my-auto"/>
          </div>

      </div>

      </StyledNav>
  )
}
