
import styled, {keyframes} from "styled-components"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaCheck } from "react-icons/fa"
import { FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const SinglePContainer = styled.div`
`

const ViewContianer = styled.div`
display:flex;
gap: 5em;
`
const InfoContainer = styled.div`

color: #374151;
margin-top: 1em;
animation: 1s ${fadeIn} ease-in;
background: #7dd3fc40;
padding: 1em;
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
animation: 1s ${fadeIn} ease-in;
padding: 1em;



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
  activities: any
  type: string
  field1: string
  field1Info: string

  field15: string
  field15Info: string

  field2: string
  field2Info: string

  field3: string
  field3Info: string

  field4: string
  field4Info: string

  field5: string
  field5Info: string

  chartdata: object[]

  datakey1: string
  datakey2: string
}



export default function SinglePage(props:Props) {

 const ActivityFeedActions = props.activities?.map((item:any) =>{
  return (
  <li key={props.title}>
    <div>
        <p className='font-semibold mb-2'> {item.text} </p>
    <time className='text-sm'> {item.time}</time>
   </div>
</li>
  )
 })

  
  return (
    <SinglePContainer>
      <ViewContianer>
        <InfoContainer>
            <div className='flex justify-between'>
              {props.img && <img className='w-40 h-40 object-cover rounded-xl' src={props.img} alt="" />}
                
              <Link to={`/${props.type}`}>
               <button className='mb-auto bg-emerald-500 px-4 py-1 text-white transition hover:bg-sky-500 capitalize'> Back to {props.type}</button> 
              </Link>
                  
           
            </div>
            <Details>
              <div className='my-3 flex gap-2 '>
                <h1 className='text-sky-800 font-semibold'> {props.field1}</h1>
                <h1> {props.field1Info}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> {props.field2}</h1>
                {props.field15Info? (
                   <h1> {`${props.field15Info} ${props.field2Info}`}</h1>
                ) : <h1> {`${props.field2Info}`}</h1> }
               
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> {props.field3}:</h1>
                <h1> {props.field3Info}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> {props.field4}</h1>
                <h1> {props.field4Info}</h1>
              </div>
              <div className='my-3 flex gap-2'>
                <h1 className='text-sky-800 font-semibold'> {props.field5}</h1>
                 {props.field5Info? <FaCheck className="text-emerald-600 my-auto w-6 h-6"/>: 
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
