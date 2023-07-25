import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components"


const BarBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`






export default function BarChartContainer(props:any) {
  return (
    <BarBox>
      <h1 className='text-lg text-center text-gray-600 p-1'>{props.title}</h1>
   

      <div className=' h-32'>
    <ResponsiveContainer width="99%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
        <Tooltip
                        contentStyle={{ color:"white", border:"none", fontWeight:"bold"  }}
                        labelStyle={{display:"none"}}
                        position={{x:0, y:0}}
                        
                        
                        />
          <Bar dataKey={props.dataKey} fill={props.fill} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    
      </BarBox>
      
     
  )
}
