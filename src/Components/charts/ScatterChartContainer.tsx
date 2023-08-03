import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts'
import styled from "styled-components"
import { FaCode } from "react-icons/fa"

const ScatterBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`






export default function ScatterChartContainer(props:any) {
  return (
    <ScatterBox>
      {props.anchor? (
        <div className='flex justify-between bg-orange-100 rounded-md p-2'>
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
      <ResponsiveContainer>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={props.chartData1} fill="#fdba74" line shape="cross" />
          <Scatter name="B school" data={props.chartData2} fill="#f9a8d4" line shape="diamond" />
        </ScatterChart>
      </ResponsiveContainer>
      </div>
    
      </ScatterBox>
      
     
  )
}
