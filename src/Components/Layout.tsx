import React from 'react'
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Navbar from './Navbar'
import Footer from './Footer'
import SideMenu from './SideMenu'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const StyledMain = styled.main`
 font-family: "Inter" , sans-serif;
 background: #f2f2f3;
 color: #0f172a;



`

const Container = styled.div`
 display: flex;
`
const ContentContainer = styled.div`
    padding: 5px 20px;
    width: 100%;
    margin: auto

`

const MenuContainer = styled.div`
 width: 250px;
 padding: 0px;

 background: #f9fafb;
 color: #fafafa;
 
`

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <StyledMain>
       
                <Container>
                     <MenuContainer>
                        <SideMenu/>
                     </MenuContainer>

                        <ContentContainer>
                           <QueryClientProvider client={queryClient}>
                             <Outlet/>
                            </QueryClientProvider>
                        </ContentContainer>
                </Container>    
            <Footer/>
    </StyledMain>
  )
}
