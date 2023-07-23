import React from 'react'
import styled from "styled-components"

const HomeStyle = styled.div`
display: grid;
gap: 1.5em;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-rows: minmax(180px, auto);

`

const Box5 = styled.div`
 grid-column: span 1;
 grid-row: span 3;
`
const Box8 = styled.div`
 grid-column: span 1;
 grid-row: span 3;
`
const Box9 = styled.div`
 grid-column: span 2;
 grid-row: span 2;
`

export default function Home() {
  return (
    <HomeStyle>

      <div className='p-4 rounded-lg bg-red-300 shadow-md'> Box1</div>
      <div className='p-4 rounded-lg bg-orange-300 shadow-md'> Box2</div>
      <div className='p-4 rounded-lg bg-blue-300 shadow-md'> Box3</div>
      <div className='p-4 rounded-lg bg-green-300 shadow-md'> Box4</div>
      <Box5 className='p-4 rounded-lg bg-white shadow-md'> Box5</Box5>
      <div className='p-4 rounded-lg bg-white shadow-md'> Box6</div>
      <div className='p-4 rounded-lg bg-white shadow-md'> Box7</div>
      <Box8 className='p-4 rounded-lg bg-white shadow-md'> Box8</Box8>
      <Box9 className='p-4 rounded-lg bg-white shadow-md'> Box9</Box9>

    </HomeStyle>
  )
}
