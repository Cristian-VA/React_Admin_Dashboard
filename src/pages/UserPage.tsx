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

  console.log(data)

  return (
    <div>
      <SinglePage
      title={data?.firstName}/>
    </div>
  )
}
