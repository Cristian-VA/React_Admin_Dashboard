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
  { field: 'id', headerName: 'Supplier ID', width: 90,   type:"number" },
  {
    field:"avatar", headerName: "Img", width: 100,   type:"string",
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
  {
    field: 'suplier',
    headerName: 'Order Number',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'suplier',
    headerName: 'Suplier',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'orderDate',
    headerName: 'Order Date',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'orderNumber',
    headerName: 'Order Number',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'brief',
    headerName: 'Description',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'requestedBy',
    headerName: 'Requested By',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'delivered',
    headerName: 'Delivered',
    width: 120,
    type:"boolean",  
  },
  
];





export default function Orders() {

  const [open, setOpen] = React.useState(false)

  const { isLoading , data } = useQuery({
       queryKey: ["allorders"],
       queryFn: () =>
         fetch("http://localhost:3000/api/orders").then(
           (res) => res.json()
         ),
     })

     console.log(data)

    

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Orders</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-gray-500 font-semibold transition hover:bg-gray-600 hover:text-gray-100 hover:opacity-80'> Add New Order</button>
      </div>

      {isLoading? "loading": (
      <DatagridTable
       columnData={columns}
       rowData={data}
       category = "orders"/>
      )
      }

       {open? 
       <AddModal
       setOpen ={setOpen}
       category="orders"
       columnData = {columns}
       title="Order"
       />
       : ""}
    </UsersContainer>
  )
}