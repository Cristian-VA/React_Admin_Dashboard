
import styled from "styled-components"
import {FaUsers, FaCashRegister, FaShoppingBag, FaPercentage} from "react-icons/fa"
import {Link} from "react-router-dom"
import { LineChart, Line,  Tooltip, ResponsiveContainer } from 'recharts';
const BoxContainer = styled.div`
 padding: 0.3em;
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 height: 150px
`



const ChartBox = styled.div`
${({color})=>{
  
  if(color==="red"){
    return (
      `
      color: #7f1d1d;
      `
    )
  } else if( color === "orange"){
    return (
      `
      color: #7c2d12;
      `
    )
  }else if( color === "blue"){
    return (
      `
      color: #0c4a6e;
      `
    )
  }else if( color === "green"){
    return (
      `
      color: #064e3b;
      `
    )
  }
}};
display: flex;
justify-content: space-between;
`

const ChartContainer = styled.div`
padding: 0.3em;
display: flex;
justify-content: space-between;

flex-direction: column;
height: 150px

`

type props = {
  color: string;
  iconDisplayed: string;
  title: string;
  dataKey: string;
  value: number | string;
  percentage: any;
  chartData: object[]; 

}


export default function Chart(props:props) {
    
  return (
    <ChartBox  color={props.color}>
      <BoxContainer>
         <div className='flex gap-3'>

          {props.iconDisplayed === "FaUsers"? <FaUsers className="w-7 h-7 my-auto"/> : 
           props.iconDisplayed === "FaCashRegister"? <FaCashRegister className="w-7 h-7 my-auto"/>:
           props.iconDisplayed === "FaShoppingBag"? <FaShoppingBag className="w-7 h-7 my-auto"/> :
           <FaPercentage className="w-7 h-7 my-auto"/>} 

            
            <h1 className='font-semibold my-auto text-lg '>{props.title}</h1>
        </div>
        <h1 className='text-3xl font-semibold '> {props.value}</h1>
       <Link to="/"
       className='text-gray-700 font-medium'>View all</Link>
      </BoxContainer>

       <ChartContainer>
                <div className='flex h-full w-44'>
                <ResponsiveContainer width="99%" height="100%">
               
                     <LineChart data={props.chartData}>
                        <Tooltip
                        contentStyle={{background:"transparent", border:"none", fontWeight:"bold" , color:"#52525b"}}
                        labelStyle={{display:"none"}}
                        position={{x:-35, y:68}}
                        />
                        <Line type="monotone" dataKey={props.dataKey} stroke="#374151" strokeWidth={2} />
                        </LineChart>
                     </ResponsiveContainer>
                </div>

                <div className='block ml-auto'>
                    <p className='text-2xl font-semibold '>{props.percentage}%</p>
                    <p className='text-gray-700 font-medium'>This month</p>
                </div>
            
       </ChartContainer> 
    </ChartBox>
  )
}
