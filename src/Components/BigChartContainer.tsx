import React from 'react'
import styled from "styled-components"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BigBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap:2em;
`


  type props = {
    
    title: string;
    dataKey: string;
    dataKey2: string;
    dataKey3: string;
    chartData: object[]; 
  
  }

export default function BigChartContainer(props:props) {
  return (
    <BigBox>
       <h1 className='text-2xl text-center text-gray-600 p-1'>{props.title}</h1>

       <div className=' h-72 w-full'>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={props.chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={props.dataKey}stackId="1" stroke="#dc2626" fill="#fca5a5" />
          <Area type="monotone" dataKey={props.dataKey2}stackId="1" stroke="#0284c7" fill="#7dd3fc" />
          <Area type="monotone" dataKey={props.dataKey3} stackId="1" stroke="#059669" fill="#6ee7b7" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </BigBox>
  )
}
