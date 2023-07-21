import React from 'react'
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Navbar from './Navbar'
import Footer from './Footer'
import SideMenu from './SideMenu'

const StyledMain = styled.main`
 font-family: "Inter" , sans-serif;
 background: red;
 color: blue;



`

const Container = styled.div`
 display: flex;
`
const ContentContainer = styled.div`
    padding: 5px 20px;
    width: 100%;
`

const MenuContainer = styled.div`
 width: 250px;
 padding: 5px;
 border-right: 2px green solid;
`

export default function Layout() {
  return (
    <StyledMain>
        <Navbar/>
                <Container>
                     <MenuContainer>
                        <SideMenu/>
                     </MenuContainer>

                        <ContentContainer>
                            <Outlet/>
                        </ContentContainer>
                </Container>    
            <Footer/>
    </StyledMain>
  )
}
