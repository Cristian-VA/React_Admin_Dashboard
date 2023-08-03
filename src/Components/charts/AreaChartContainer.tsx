import React from 'react'
import styled from "styled-components"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaCode } from "react-icons/fa"

const BigBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

`


  type props = {
    
    title: string
    dataKey: string
    dataKey2: string
    dataKey3: string
    chartData: object[]
    dimensions: string
    anchor: boolean
    link: string
  
  }

export default function BigChartContainer(props:props) {
  return (
    <BigBox>
      {props.anchor? (
        <div className='flex justify-between bg-emerald-100 rounded-md p-2'>
            <h1 className={` p-1 my-auto text-2xl  text-gray-600`}>{props.title}</h1>
            <a href={props.link} target="_blank" rel="noopener" className='my-auto'>
              <div className=' bg-white flex my-auto gap-1 border-2 border-gray-300 px-2 py-2 shadow-sm text-gray-600 rounded-md transition hover:bg-slate-200 '>
              <FaCode className="my-auto"/>
              <h1 className="my-auto">Code</h1>
              </div>
              
              </a>
        </div>
      ) : <h1 className='text-lg text-center text-gray-600 p-1'>{props.title}</h1> }

       <div className={props.dimensions}>
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
