import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styled, {keyframes} from "styled-components"
import { FaCode } from "react-icons/fa"

const PieBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

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






export default function PieCahtContainer(props:any) {

  const Legend = props.data.map((item:any) =>{
    return (
      <LegendContainer key={item.name}>
        <div className='flex gap-2'>
            <div className='w-5 h-5 rounded-full my-auto' style={{background:item.color}}></div>
            <h1 className='my-auto'>{item.name}</h1>
        </div>
  
        <h1 className=''>{item.value}</h1>
  
      </LegendContainer>
    )
  })

  return (
    <PieBox>
      {props.anchor? (
        <div className='flex justify-between bg-sky-100 rounded-md p-2'>
            <h1 className={` p-1 my-auto text-2xl  text-gray-600`}>Pie Chart</h1>
            <a href={props.link} target="_blank" rel="noopener" className='my-auto'>
              <div className=' bg-white flex my-auto gap-1 border-2 border-gray-300 px-2 py-2 shadow-sm text-gray-600 rounded-md transition hover:bg-slate-200 '>
              <FaCode className="my-auto"/>
              <h1 className="my-auto">Code</h1>
              </div>
              
              </a>
        </div>
      ) : <h1 className='text-2xl text-gray-600 p-1'>Leeds by Source</h1> }

    <div className={`${props.dimensions} block mx-auto`} >
    <ResponsiveContainer width="99%" height="100%">
    <PieChart>
      <Tooltip/>
    <Pie
      data={props.data}
   
      innerRadius={"60%"}
      outerRadius={"80%"}
      paddingAngle={5}
      dataKey="value"
    >
      {props.data.map((item:any) => (
        <Cell key={item.name} fill={item.color} />
      ))}
    </Pie>
  </PieChart>
  </ResponsiveContainer>
  </div>  

  {props.anchor? "" : (
    <div className='flex justify-around mt-16'>
    {Legend}
   </div>
  )}
  

  </PieBox>
  )
}
