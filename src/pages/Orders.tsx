import React from 'react'
import styled from "styled-components"
import DatagridTable from '../Components/DatagridTable'
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import AddModal from '../Components/AddModal';
import { useQuery } from "@tanstack/react-query"


const UsersContainer = styled.div`
 color: #374151;
 margin: 2em 1.4em;
 min-height: 80vh;
`
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90,   type:"number", headerClassName: 'text-sky-600 text-lg' },
  {
    field:"avatar", headerName: "Img", width: 100,   type:"string", headerClassName: 'text-sky-600 text-lg',
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
 
  {
    field: 'suplier',
    headerName: 'Supplier',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'orderDate',
    headerName: 'Order Date',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'orderNumber',
    headerName: 'Order Number',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'brief',
    headerName: 'Description',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'requestedBy',
    headerName: 'Requested By',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'delivered',
    headerName: 'Delivered',
    width: 120,
    type:"boolean",  
    headerClassName: 'text-sky-600 text-lg'
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

  

    

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Orders</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-sky-500 font-semibold transition hover:bg-sky-600 hover:text-gray-100 hover:opacity-80'> Add New Order</button>
      </div>

      {isLoading? "loading": (
        // @ts-ignore
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