import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts'
import styled from "styled-components"
import { FaCode } from "react-icons/fa"

const RadarBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`



type props = {
    
  title: string
  dimensions: string
  anchor: boolean
  link: string
  chartData: object[]
  
}



export default function LineChartContainer(props:props) {
  return (
    <RadarBox>
      {props.anchor? (
        <div className='flex justify-between bg-lime-100 rounded-md p-2'>
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
        <BarChart
          width={500}
          height={300}
          data={props.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#86efac" />
          <Bar dataKey="uv" fill="#fde047" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    
      </RadarBox>
      
     
  )
}
