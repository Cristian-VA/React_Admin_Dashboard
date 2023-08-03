import styled from "styled-components"
import UserBox from '../Components/UserBox'
import Chart from '../Components/charts/Chart'
import BarChartContainer from '../Components/charts/BarChartContainer'
import PieCahtContainer from '../Components/charts/PieChartContainer'
import BigChartContainer from '../Components/charts/AreaChartContainer'
import LineChartContainer from "../Components/charts/LineChartContainer"
import RadarChartContainer from "../Components/charts/RadarChartContainer"
import StackedBarChartContainer from "../Components/charts/StackedBarChartContainer"
import ScatterChartContainer from "../Components/charts/ScatterChartContainer"
import ComposedChartContainer from "../Components/charts/ComposedChartContainer"
import PositiveNegativeBarContainer from "../Components/charts/PositiveNegativeBarContainer"
import {pnData, composedData, data02, data01,stackedData, Radardata, LineData, BigChartData, pieData, BarDataVisits} from  "../ChartsMockData/ChartCharts"

const HomeStyle = styled.div`
display: grid;
gap: 1.5em;
grid-template-columns: 1fr 1fr 1fr ;
grid-auto-rows: minmax(250px, auto);
margin: 1.5em 1em;

`


export default function Charts() {
  return (
    <HomeStyle>

      <div className='rounded-lg bg-white shadow-md flex flex-col justify-between '> 

      <BarChartContainer
      title = "Simple Bar Chart"
      fill = "#fca5a5"
      dataKey = "Test"
      chartData= {BarDataVisits}
      height = "h-44"
      anchor= {true}
      link = "https://recharts.org/en-US/examples/TinyBarChart"
      
      
      />
     
      </div>

      <div className='rounded-lg bg-white shadow-md'>
      <PieCahtContainer
      anchor = {true}
      dimensions = "w-44 h-44"
      data= {pieData}
      link = "https://recharts.org/en-US/examples/PieChartWithPaddingAngle"
      />
      </div>

      <div className=' rounded-lg bg-white shadow-md'>  
      <BigChartContainer
      dimensions="w-full h-44"
      chartData={BigChartData}
      title = "Area Chart"
      dataKey = "Test1"
      dataKey2 = "Test2"
      dataKey3 = "Test3"
      anchor = {true}
      link = "https://recharts.org/en-US/examples/StackedAreaChart"
      />
  
      </div>

      <div className='rounded-lg bg-white shadow-md'>  
       <LineChartContainer
       dimensions= "w-full h-44 mt-3"
       chartdata = {LineData}
      datakey1 = {"Test1"}
      datakey2 = {"Test2"}
      title = "Line Chart"
      anchor = {true}
      link = "https://recharts.org/en-US/examples/SimpleLineChart"
      />
      </div>

      <div className=' rounded-lg bg-white shadow-md'>
        <RadarChartContainer
         dimensions= "w-full h-44 mt-2"
         chartdata = {Radardata}
         title= "Radar Chart"
         anchor= {true}
         link = "https://recharts.org/en-US/examples/SimpleRadarChart"/>
    </div>

      <div className='rounded-lg bg-white shadow-md'> 
      <ScatterChartContainer
      dimensions= " h-48 mt-2"
      chartData1 = {data01}
      chartData2 = {data02}
      title= " Scatter Chart"
      anchor= {true}
      link = "https://recharts.org/en-US/examples/JointLineScatterChart"/>
     
      </div>

    <div className=' rounded-lg bg-white shadow-md'>
      <StackedBarChartContainer
      dimensions= "w-full h-44 mt-2"
      chartData = {stackedData}
      title= "Stacked Bar Chart"
      anchor= {true}
      link = "https://recharts.org/en-US/examples/StackedBarChart"/>
    </div>

    <div className=' rounded-lg bg-white shadow-md'>
    <PositiveNegativeBarContainer
      dimensions= "w-full h-44 mt-2"
      chartData = {pnData}
      title= "Positive Negative Bar Chart"
      anchor= {true}   
      link = "https://recharts.org/en-US/examples/PositiveAndNegativeBarChart" />
  
    </div>

      <div className='rounded-lg bg-white shadow-md'>
      <ComposedChartContainer
     dimensions= "w-full h-44 mt-2"
     chartData = {composedData}
     title= "Composed Chart"
     anchor= {true}
     link = "https://recharts.org/en-US/examples/LineBarAreaComposedChart"/>
    </div>

   
    </HomeStyle>
  )
}