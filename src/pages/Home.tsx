
import styled from "styled-components"
import UserBox from '../Components/UserBox'
import Chart from '../Components/charts/Chart'
import BarChartContainer from '../Components/charts/BarChartContainer'
import PieCahtContainer from '../Components/charts/PieChartContainer'
import BigChartContainer from '../Components/charts/AreaChartContainer'
import {pieData, BarDataProfits, BigChartData, BarDataVisits, chartDataRatio, chartDataProducts, chartDataRevenue, chartDataUsers} from "../ChartsMockData/HomeCharts"

const HomeStyle = styled.div`
display: grid;
gap: 1.5em;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-rows: minmax(180px, auto);


`

const Box5 = styled.div`
 grid-column: span 1;
 grid-row: span 3;
`
const Box8 = styled.div`
 grid-column: span 1;
 grid-row: span 3;
`
const Box9 = styled.div`
 grid-column: span 2;
 grid-row: span 2;
`




export default function Home() {
  return (
    
    <HomeStyle>

      <div className='p-4 rounded-lg bg-red-300 shadow-md'> 
         <Chart color="red" 
         iconDisplayed="FaUsers"
         title = "Users Online"
         value = "7,312"
         percentage= "47"
         dataKey= "Users"
         chartData= {chartDataUsers}
         />
      </div>

      <div className='p-4 rounded-lg bg-orange-300 shadow-md'>
         <Chart color="orange" 
         iconDisplayed="FaCashRegister"
         title = "Revenue"
         value = "$44,291"
         percentage= "32"
         dataKey="$"
         chartData= {chartDataRevenue}
         
         />
      </div>

      <div className='p-4 rounded-lg bg-blue-300 shadow-md'>  
        <Chart color="blue" 
        iconDisplayed="FaShoppingBag"
        title = "Total Products"
        value = "186"
        percentage= "21"
        dataKey="Products"
        chartData= {chartDataProducts}
        />
      </div>

      <div className='p-4 rounded-lg bg-emerald-300 shadow-md'>  
        <Chart color="green" 
        iconDisplayed="FaPercentage"
        title = "Ratio"
        value = "2.1"
        percentage= "11"
        dataKey="Ratio"
        chartData= {chartDataRatio}
        />
      </div>

      <Box5 className=' rounded-lg bg-white shadow-md'> 
         <UserBox/>
      </Box5>

      <div className=' rounded-lg bg-white shadow-md'> 
      <BarChartContainer
      title = "Visits per Day (Last Week)"
      fill = "#6ee7b7"
      dataKey = "Visits"
      chartData= {BarDataVisits}
      height = "h-36"
      anchor =  {false}
      link = ""
      />
      </div>

    <div className=' rounded-lg bg-white shadow-md'>
    <BarChartContainer
    title = "Profit earned (Per Month)"
    fill = "#a5b4fc"
    dataKey = "Profit"
    chartData= {BarDataProfits}
    height = "h-36"
    anchor =  {false}
      link = ""
    />
    </div>

      <Box8 className='rounded-lg bg-white shadow-md'> 
       <PieCahtContainer
       dimensions= "w-96 h-96"
       data= {pieData}
       anchor =  {false}
       link = ""/>
       
      </Box8>

      <Box9 className=' rounded-lg bg-white shadow-md'> 
      
      <BigChartContainer
      chartData={BigChartData}
      title = "Most Popular Categories (Last 7 months)"
      dataKey = "Headphones"
      dataKey2 = "Speakers"
      dataKey3 = "SoundBars"
      dimensions= "h-72 w-full  mt-4"
      anchor = {false}
      link = ""
      />
      </Box9>

    </HomeStyle>
    
  )
}


