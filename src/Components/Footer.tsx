import React from 'react'
import styled from "styled-components"

const StyledFooter = styled.div`
background: #27272a;
display: flex;
justify-content: space-between;
padding: 1em;
`

export default function Footer() {
  return (
    <StyledFooter>
     <h1 className='text-zinc-400 text-sm'> SalesBoard</h1>
     <h2 className='text-zinc-400 text-sm'> SalesBoard Admin Dashboard made by Cristian Vega</h2>
      </StyledFooter>
  )
}
