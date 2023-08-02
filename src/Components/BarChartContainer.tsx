import React from 'react'
import { BarChart, Bar,  Tooltip,  ResponsiveContainer } from 'recharts';
import styled from "styled-components"
import { FaCode } from "react-icons/fa";

const BarBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`






export default function BarChartContainer(props:any) {
  return (
    <BarBox>
      {props.anchor? (
        <div className='flex justify-between'>
            <h1 className='text-lg  text-gray-600 p-1 my-auto'>{props.title}</h1>
            <a href="https://recharts.org/en-US/" target="_blank">
              <div className=' flex my-auto gap-1 border-2 border-gray-300 px-2 py-2 shadow-sm text-gray-600 rounded-md transition hover:bg-slate-100 mb-3'>
              <FaCode className="my-auto"/>
              <h1 className="my-auto">Code</h1>
              </div>
              
              </a>
        </div>
      ) : <h1 className='text-lg text-center text-gray-600 p-1'>{props.title}</h1> }
      
   

      <div className={props.height}>
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
