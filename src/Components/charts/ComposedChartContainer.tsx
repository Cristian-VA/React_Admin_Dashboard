import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts'
import styled from "styled-components"
import { FaCode } from "react-icons/fa"

const ScatterBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`



type props = {
    
  title: string
  chartData: object[]
  dimensions: string
  anchor: boolean
  link: string
 

}


export default function ScatterChartContainer(props:props) {
  return (
    <ScatterBox>
      {props.anchor? (
        <div className='flex justify-between bg-pink-100 rounded-md p-2'>
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
        <ComposedChart
          width={500}
          height={400}
          data={props.chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#e5e5e5" stroke="#f9a8d4" />
          <Bar dataKey="pv" barSize={20} fill="#f472b6" />
          <Line type="monotone" dataKey="uv" stroke="#93c5fd" />
          <Scatter dataKey="cnt" fill="#93c5fd" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    
      </ScatterBox>
      
     
  )
}
