import React from 'react'
import SinglePage from '../Components/SinglePage'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"


export default function OrderPage() {
  let params = useParams()

  const { isLoading , data } = useQuery({
    queryKey: ["allorders"],
    queryFn: () =>
      fetch(`http://localhost:3000/api/orders/${params.id}`).then(
        (res) => res.json()
      ),
  })

  

  return (
    <div>
      {isLoading? "Loading": (
        // @ts-ignore
        <SinglePage
      field1 = "Suplier:"
      field2 = "Order Number:"
      field3 = "Order Date"
      field4 = "Description:"
      field5 = "Received:"

      field1Info={data?.suplier}
      field2Info={data?.orderNumber}
    
      field3Info={data?.orderDate}
      field4Info={data?.brief}
      field5Info ={data?.delivered}
      img = {data?.img}

      type= "orders"
      
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
