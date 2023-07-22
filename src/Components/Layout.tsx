import React from 'react'
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Navbar from './Navbar'
import Footer from './Footer'
import SideMenu from './SideMenu'

const StyledMain = styled.main`
 font-family: "Inter" , sans-serif;
 background: #fafafa;
 color: #0f172a;



`

const Container = styled.div`
 display: flex;
`
const ContentContainer = styled.div`
    padding: 5px 20px;
    width: 100%;
    background: #f4f4f5;
`

const MenuContainer = styled.div`
 width: 250px;
 padding: 0px;
 border-right: 2px green solid;
 background: #3f3f46;
 color: #fafafa;
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
