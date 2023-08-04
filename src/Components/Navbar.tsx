import React from 'react'
import {FaSearch, FaBell, FaSignOutAlt} from "react-icons/fa";

import styled from "styled-components"

const StyledNav = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5em;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background: #4b556390;
`

export default function Navbar() {
  return (
    <StyledNav>
      <div className='flex gap-2 sm:gap-4'>
        <img className="w-6 h-6 md:w-12 md:h-12 my-auto"src="../src/images/Logo 300.png" alt="" />
        <h1 className='text-md sm:text-xl md:text-2xl font-semibold my-auto text-gray'> SalesBoard </h1>
      </div>


      </StyledNav>
  )
}
