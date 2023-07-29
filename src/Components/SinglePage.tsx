import React from 'react'
import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaCheck } from "react-icons/fa"
import { FiX } from "react-icons/fi";
const SinglePContainer = styled.div`


`

const ViewContianer = styled.div`
display:flex;
gap: 5em;
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


//const columnData = props.columnData.filter((item:any) => item.field !== "id" && item.field !=="avatar")
//.map( (column:any) => {
//    return (
//        <div className='flex flex-col m-4'>
//            <label className='mb-2'>{column.headerName}</label>
//            <input className='py-2 px-4 shadow-md rounded-lg' title={column.headerName} type={column.type} placeholder={column.field}/>
//        </div>
//    )
//})

export default function SinglePage(props:any) {

 const ActivityFeedActions = props.activities?.map((item:any) =>{
  return (
  <li key={props.title}>
    <div>
        <p> {item.text} </p>
    <time> {item.time}</time>
   </div>
</li>
  )
 })

  console.log(props)
  return (
    <SinglePContainer>
      <ViewContianer>
        <InfoContainer>
            <div className='flex gap-5'>
              {props.img && <img className='w-40 h-40 object-cover rounded-xl' src={props.img} alt="" />}
                
                
                  <h1 className='text-2xl my-auto bg-red-400 py-2 px-4 text-gray-100'> {props.title}</h1>
                  
           
            </div>
            <Details>
              <div className='my-3 flex gap-2 '>
                <h1 className='text-sky-800 font-semibold'> Username:</h1>
                <h1> {props.title}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Fullname:</h1>
                <h1> {`${props.firstName} ${props.lastName}`}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Email:</h1>
                <h1> {props.email}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Phone:</h1>
                <h1> {props.phone}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> Verified:</h1>
                 {props.status? <FaCheck className="text-emerald-600 my-auto w-6 h-6"/>: 
                 <FiX className="text-rose-600 my-auto w-6 h-6"/>}
              </div>

            </Details>
              <ChartBox>
                            <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        width={500}
                        height={300}
                        data={props.chartdata}
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
                        <Line type="monotone" dataKey={props.datakey1} stroke="#f59e0b" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={props.datakey2} stroke="#10b981" />
                      </LineChart>
                    </ResponsiveContainer>
              </ChartBox>
        </InfoContainer>
        
        <ActivityFeed>
          <h1 className='text-emerald-700 text-2xl font-semibold'> Activity Feed</h1>
          <ul>
                      {ActivityFeedActions}

          </ul>
        </ActivityFeed>

      </ViewContianer>
    </SinglePContainer>
  )
}
