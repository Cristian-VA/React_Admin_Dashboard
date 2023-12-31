
import SinglePage from '../Components/SinglePage'
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"


export default function ProductPage() {
  let params = useParams()

  const { isLoading , data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch(`https://serv-sqgi.onrender.com/api/products/${params.id}`).then(
        (res) => res.json()
      ),
  })



  return (
    <div>
      {isLoading? "Loading": (
        // @ts-ignore
        <SinglePage
      field1 = "Product:"
      field2 = "Brand:"
      field3 = "Price"
      field4 = "Color:"
      field5 = "In Stock:"

      field1Info={data?.title}
      field2Info={data?.Brand}
    
      field3Info={data?.price}
      field4Info={data?.color}
      field5Info ={data?.inStock}
      img = {data?.img}

      type= "products"
      
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
