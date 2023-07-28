import React from 'react'
import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SinglePContainer = styled.div`


`

const ViewContianer = styled.div`
display:flex;
gap: 2em;
`
const InfoContainer = styled.div`
margin-left: 2em;
color: #374151;
margin-top: 1.5em
`




const Details = styled.div`
margin: 1em 0;
font-size: 20px;
`

const ChartBox = styled.div`

height: 400px;
width: 700px;
`

const ActivityFeed = styled.div`
margin-top: 1.5em;


ul{
  li{
    list-style-type: none;
    position: relative;
    width: 1px;
    padding-top: 5px;
    background-color: #f97316;
    margin: 1em 0;

    &::after{
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #fb923c;
      transform: translateX(-50%)
    }
  }

  div{
    min-width: 480px;
    background-color: #fb923c10;
    color: #374151;
    padding: 1em
  }
}
`

const data = [
  {
    name: 'Mon',
    Clicks: 4000,
    Visits: 2400,
    
  },
  {
    name: 'Tue',
    Clicks: 3000,
    Visits: 1398,
    
  },
  {
    name: 'Wed',
    Clicks: 2000,
    Visits: 9800,
               
  },
  {
    name: 'Thu',
    Clicks: 2780,
    Visits: 3908,
     
  },
  {
    name: 'Fri',
    Clicks: 1890,
    Visits: 4800,
    
  },
  {
    name: 'Sat',
    Clicks: 2390,
    Visits: 3800,
    
  },
  {
    name: 'Sun',
    Clicks: 3490,
    Visits: 4300,
   
  },
];

type Props ={
  id: number
  img?: string
  title: string
  info: object
  chart?: {
    datakeys: {name:string, color: string}
    data: object[]
  }
  activies?: {time: string; text:string}
}




export default function SinglePage(props:any) {
  return (
    <SinglePContainer>
      <ViewContianer>
        <InfoContainer>
            <div className='flex gap-5'>
              {props.img && <img className='w-40 h-40 object-cover rounded-xl' src="{props.img}" alt="" />}
                
                
                  <h1 className='text-2xl my-auto bg-red-400 py-2 px-4 text-gray-100'> {props.title}</h1>
                  
           
            </div>
            <Details>
              <div className='my-3 flex gap-2 '>
                <h1 className='text-sky-800 font-semibold'> Username:</h1>
                <h1> JohnDoe89</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Fullname:</h1>
                <h1> John Doe</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Email:</h1>
                <h1> JhonDoe@gmail.com</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Phone:</h1>
                <h1> 123 542 289</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Status:</h1>
                <h1> Verified</h1>
              </div>

            </Details>
              <ChartBox>
                            <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
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
                        <Line type="monotone" dataKey="Clicks" stroke="#f59e0b" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Visits" stroke="#10b981" />
                      </LineChart>
                    </ResponsiveContainer>
              </ChartBox>
        </InfoContainer>
        
        <ActivityFeed>
          <h1 className='text-emerald-700 text-2xl font-semibold'> Activity Feed</h1>
          <ul>
            <li>
              <div>
                <p> John Doe purchased Bluetooth SoundLink Flex </p>
                <time> 3 days ago</time>
              </div>
            </li>
            <li>
              <div>
                <p> John Doe added 1 item to his wishlist </p>
                <time> 1 week ago</time>
              </div>
            </li>
            <li>
              <div>
                <p> John Doe purchased reviewed one product </p>
                <time> 2 weeks ago</time>
              </div>
            </li>
            <li>
              <div>
                <p> John Doe purchased reviewed one product </p>
                <time> 3 weeks ago</time>
              </div>
            </li>

          </ul>
        </ActivityFeed>

      </ViewContianer>
    </SinglePContainer>
  )
}
