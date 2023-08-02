import React from 'react'
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
grid-auto-rows: minmax(180px, auto);
margin: 0.8em 0;

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


const chartDataUsers = [
  {name:"Sun", Users: 300},
  {name:"Mon", Users: 400},
  {name:"Tue", Users: 500},
  {name:"Wed", Users: 200},
  {name:"Thu", Users: 400},
  {name:"Fri", Users: 200},
  {name:"Sat", Users: 600},
]

const chartDataRevenue = [
  {name:"Sun", $: 1100},
  {name:"Mon", $: 1340},
  {name:"Tue", $: 2300},
  {name:"Wed", $: 5600},
  {name:"Thu", $: 3100},
  {name:"Fri", $: 2100},
  {name:"Sat", $: 4500},
]

const chartDataProducts = [
  {name:"Sun", Products: 60},
  {name:"Mon", Products: 90},
  {name:"Tue", Products: 80},
  {name:"Wed", Products: 76},
  {name:"Thu", Products: 130},
  {name:"Fri", Products: 140},
  {name:"Sat", Products: 120},
]

const chartDataRatio = [
  {name:"Sun", Ratio: 1.1},
  {name:"Mon", Ratio: 1.3},
  {name:"Tue", Ratio: 1.7},
  {name:"Wed", Ratio: 1.3},
  {name:"Thu", Ratio: 2.0},
  {name:"Fri", Ratio: 1.2},
  {name:"Sat", Ratio: 1.6},
]

const BarDataVisits = [
  {name:"Sun", Visits: 30},
  {name:"Mon", Visits: 44},
  {name:"Tue", Visits: 55},
  {name:"Wed", Visits: 69},
  {name:"Thu", Visits: 60},
  {name:"Fri", Visits: 79},
  {name:"Sat", Visits: 70},
]

const BarDataProfits = [
  {name:"Sun", Profit: 1100},
  {name:"Mon", Profit: 2000},
  {name:"Tue", Profit: 3000},
  {name:"Wed", Profit: 2800},
  {name:"Thu", Profit: 3100},
  {name:"Fri", Profit: 3600},
  {name:"Sat", Profit: 3500},
]

const BigChartData = [
  {
    name: 'January',
    Headphones: 4000,
    Speakers: 2400,
    SoundBars: 2400,
  },
  {
    name: 'February',
    Headphones: 3000,
    Speakers: 1398,
    SoundBars: 2210,
  },
  {
    name: 'March',
    Headphones: 2000,
    Speakers: 9800,
    SoundBars: 2290,
  },
  {
    name: 'April',
    Headphones: 2780,
    Speakers: 3908,
    SoundBars: 2000,
  },
  {
    name: 'May',
    Headphones: 1890,
    Speakers: 4800,
    SoundBars: 2181,
  },
  {
    name: 'June',
    Headphones: 2390,
    Speakers: 3800,
    SoundBars: 2500,
  },
  {
    name: 'July',
    Headphones: 3490,
    Speakers: 4300,
    SoundBars: 2100,
  },
];


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

      <Box5 className='p-4 rounded-lg bg-white shadow-md'> 
         <UserBox/>
      </Box5>

      <div className='p-4 rounded-lg bg-white shadow-md'> 
      <BarChartContainer
      title = "Visits per Day (Last Week)"
      fill = "#6ee7b7"
      dataKey = "Visits"
      chartData= {BarDataVisits}
      height = "h-32"
      />
      </div>

    <div className='p-4 rounded-lg bg-white shadow-md'>
    <BarChartContainer
    title = "Profit earned (Per Month)"
    fill = "#a5b4fc"
    dataKey = "Profit"
    chartData= {BarDataProfits}
    height = "h-32"
    />
    </div>

      <Box8 className='p-4 rounded-lg bg-white shadow-md'> 
       <PieCahtContainer/>
      </Box8>

      <Box9 className='p-4 rounded-lg bg-white shadow-md'> 
      
      <BigChartContainer
      chartData={BigChartData}
      title = "Most Popular Categories (Last 7 months)"
      dataKey = "Headphones"
      dataKey2 = "Speakers"
      dataKey3 = "SoundBars"
      />
      </Box9>

    </HomeStyle>
  )
}


