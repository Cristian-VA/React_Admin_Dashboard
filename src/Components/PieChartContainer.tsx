import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styled, {keyframes} from "styled-components"


const PieBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap:2em;
`

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const LegendContainer = styled.div`
animation: 1.5s ${fadeIn} ease-in;
display: flex;
flex-direction: column;
font-size: 0.875rem;
line-height: 1.25rem;
font-weight: 600;
gap: 0.5rem;
color: #4b5563;
`


const data = [
    { name: 'PC', value: 500, color:"#fca5a5" },
    { name: 'Laptop', value: 300, color: "#fdba74" },
    { name: 'Tablet', value: 400, color: "#86efac" },
    { name: 'Cellphone', value: 500, color: "#7dd3fc" },
  ];


const Legend = data.map(item =>{
  return (
    <LegendContainer key={item.name}>
      <div className='flex gap-2'>
          <div className='w-5 h-5 rounded-full my-auto' style={{background:item.color}}></div>
          <h1 className='my-auto'>{item.name}</h1>
      </div>

      <h1 className='text-center'>{item.value}</h1>

    </LegendContainer>
  )
})

export default function PieCahtContainer() {
  return (
    <PieBox>
      <h1 className='text-2xl text-gray-600 p-1'>Leads by Source</h1>

    <div className='w-96 h-96' >
    <ResponsiveContainer width="99%" height="100%">
    <PieChart>
      <Tooltip/>
    <Pie
      data={data}
   
      innerRadius={"60%"}
      outerRadius={"80%"}
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((item) => (
        <Cell key={item.name} fill={item.color} />
      ))}
    </Pie>
  </PieChart>
  </ResponsiveContainer>
  </div>  

  <div className='flex justify-around'>
   {Legend}
  </div>

  </PieBox>
  )
}
