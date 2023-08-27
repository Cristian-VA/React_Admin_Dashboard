import React from 'react'
import styled from "styled-components"
import DatagridTable from '../Components/DatagridTable'
import { GridColDef } from '@mui/x-data-grid';
import AddModal from '../Components/AddModal';
import { useQuery } from "@tanstack/react-query"


const ProductsContainer = styled.div`
 color: #374151;
 margin: 2em 1.4em;
 min-height: 80vh;
 
`
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90,   type:"number", headerClassName: 'text-sky-600 text-lg', },
  {
    field:"avatar", headerName: "Avatar", width: 100,   type:"string", headerClassName: 'text-sky-600 text-lg',
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg',
  },
  {
    field: 'Brand',
    headerName: 'Brand',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg',
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 170,
    editable: true,
    type:"any",
    headerClassName: 'text-sky-600 text-lg',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 170,
    editable: true,
    type:"boolean",
    headerClassName: 'text-sky-600 text-lg',
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg',
    
  },
  
];





export default function Products() {

  const [open, setOpen] = React.useState(false)

  const { isLoading , data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("https://serv-sqgi.onrender.com/api/products").then(
        (res) => res.json()
      ),
  })

    

  return (
    <ProductsContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Products</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-sky-500 font-semibold transition hover:bg-sky-600 hover:text-gray-100 hover:opacity-80'> Add New Product</button>
      </div>

      {isLoading? "loading": (
        // @ts-ignore
      <DatagridTable
       columnData={columns}
       rowData={data}
       category = "products"
       />
      )
      }

       {open? 
       <AddModal
       setOpen ={setOpen}
       category="Products"
       columnData = {columns}
       title="Product"
       />
       : ""}
    </ProductsContainer>
  )
}
