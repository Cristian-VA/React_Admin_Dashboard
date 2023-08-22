
import { BarChart, Bar,  Tooltip,  ResponsiveContainer } from 'recharts';
import styled from "styled-components"
import { FaCode } from "react-icons/fa"

const BarBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`

type props = {
    
  title: string
  height: string
  dataKey: string
  chartData: object[]
  anchor: boolean
  link: string
  fill: string

}




export default function BarChartContainer(props:props) {
  return (
    <BarBox>
      {props.anchor? (
        <div className='flex justify-between bg-rose-100 rounded-md p-2'>
            <h1 className={` p-1 my-auto text-2xl  text-gray-600`}>{props.title}</h1>
            <a href={props.link} target="_blank" rel="noopener" className='my-auto'>
              <div className=' bg-white flex my-auto gap-1 border-2 border-gray-300 px-2 py-2 shadow-sm text-gray-600 rounded-md transition hover:bg-slate-200 '>
              <FaCode className="my-auto"/>
              <h1 className="my-auto">Code</h1>
              </div>
              
              </a>
        </div>
      ) : <h1 className='text-lg text-center text-sky-50 bg-sky-500 p-2 mb-4 rounded-t-lg shadow-md'>{props.title}</h1> }
      
   

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
