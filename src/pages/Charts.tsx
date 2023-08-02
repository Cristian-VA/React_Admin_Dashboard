import styled from "styled-components"
import UserBox from '../Components/UserBox'
import Chart from '../Components/Chart'
import BarChartContainer from '../Components/BarChartContainer'
import PieCahtContainer from '../Components/PieChartContainer'
import BigChartContainer from '../Components/BigChartContainer'

const HomeStyle = styled.div`
display: grid;
gap: 1.5em;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-rows: minmax(250px, auto);
margin: 1.5em 1em;

`
const BarDataVisits = [
  {name:"Sun", Test: 30},
  {name:"Mon", Test: 44},
  {name:"Tue", Test: 55},
  {name:"Wed", Test: 69},
  {name:"Thu", Test: 60},
  {name:"Fri", Test: 79},
  {name:"Sat", Test: 70},
]

export default function Charts() {
  return (
    <HomeStyle>

      <div className='p-4 rounded-lg bg-white shadow-md flex flex-col justify-between'> 

      <BarChartContainer
      title = "Simple Bar Chart"
      fill = "#fca5a5"
      dataKey = "Test"
      chartData= {BarDataVisits}
      height = "h-40"
      anchor= {true}
      
      />
     
      </div>

      <div className='p-4 rounded-lg bg-white shadow-md'>
       
      </div>

      <div className='p-4 rounded-lg bg-white shadow-md'>  
      
      </div>

      <div className='p-4 rounded-lg bg-white shadow-md'>  
       
      </div>

      <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

      <div className='p-4 rounded-lg bg-white shadow-md'> 
      </div>

    <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

    <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

      <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

      <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

    <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

    <div className='p-4 rounded-lg bg-white shadow-md'>
    </div>

    </HomeStyle>
  )
}