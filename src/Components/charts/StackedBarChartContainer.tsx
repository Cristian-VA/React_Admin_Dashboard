import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components"
import { FaCode } from "react-icons/fa"

const StackedBox = styled.div`
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
    <StackedBox>
      {props.anchor? (
        <div className='flex justify-between bg-teal-100 rounded-md p-2'>
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
            top: 20,
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
          <Bar dataKey="Test" stackId="a" fill="#cbd5e1" />
          <Bar dataKey="Test2" stackId="a" fill="#5eead4" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    
      </StackedBox>
      
     
  )
}
