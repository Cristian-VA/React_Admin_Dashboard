import React from 'react'
import styled from "styled-components"
import DatagridTable from '../Components/DatagridTable'
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import AddModal from '../Components/AddModal';
import { useQuery } from "@tanstack/react-query"


const UsersContainer = styled.div`
 color: #374151;
 margin: 2em 1.4em;
 
`
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90,   type:"number" },
  {
    field:"avatar", headerName: "Avatar", width: 100,   type:"string",
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'Brand',
    headerName: 'Brand',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 170,
    editable: true,
    type:"any",
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 170,
    editable: true,
    type:"boolean",
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 170,
    editable: true,
    type:"string",
  },
  
];





export default function Products() {

  const [open, setOpen] = React.useState(false)

  const { isLoading , data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:3000/api/products").then(
        (res) => res.json()
      ),
  })

    console.log(data)

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Products</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-gray-500 font-semibold transition hover:bg-gray-600 hover:text-gray-100 hover:opacity-80'> Add New Product</button>
      </div>

      {isLoading? "loading": (
      <DatagridTable
       columnData={columns}
       rowData={data}
       category = "products"/>
      )
      }

       {open? 
       <AddModal
       setOpen ={setOpen}
       category="Product"
       columnData = {columns}
       />
       : ""}
    </UsersContainer>
  )
}
