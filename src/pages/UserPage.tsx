
import SinglePage from '../Components/SinglePage'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"


export default function UserPage() {
  let params = useParams()

  const { isLoading , data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch(`https://serv-sqgi.onrender.com/api/users/${params.id}`).then(
        (res) => res.json()
      ),
  })

 

  return (
    <div>
      {isLoading? "Loading": (
        // @ts-ignore
        <SinglePage
        field1 = "Username:"
        field2 = "Fullname:"
        field3 = "Email"
        field4 = "Phone:"
        field5 = "Verified:"

        field1Info={data?.username}
        field2Info={data?.lastName}
        field15Info={data?.firstName}
        field3Info={data?.email}
        field4Info={data?.phone}
        field5Info ={data?.status}
        img = {data?.img}

        type= "users"
      
      chartdata = {data?.chart?.data}
      datakey1 = {data?.chart?.dataKeys[0]?.name}
      datakey2 = {data?.chart?.dataKeys[1]?.name}
      activities = {data?.activities}

      />
      )
      
      }

      
    </div>
  )
}
