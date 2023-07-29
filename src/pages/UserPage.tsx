import React from 'react'
import SinglePage from '../Components/SinglePage'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"


export default function UserPage() {
  let params = useParams()

  const { isLoading , data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch(`http://localhost:3000/api/users/${params.id}`).then(
        (res) => res.json()
      ),
  })

  console.log(data?.chart?.dataKeys[0]?.name)

  return (
    <div>
      {isLoading? "Loading": (
        <SinglePage
      title={data?.username}
      lastName={data?.lastName}
      firstName={data?.firstName}
      email={data?.email}
      phone={data?.phone}
      status ={data?.status}
      img = {data?.img}
      
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
