import React from 'react'
import styled from "styled-components"
import DatagridTable from '../Components/DatagridTable'
import {  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddModal from '../Components/AddModal';
import { useQuery } from "@tanstack/react-query"


const UsersContainer = styled.div`
 color: #374151;
 margin: 2em 1.4em;
 min-height: 80vh;
`
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20,   type:"number", headerClassName: 'text-sky-600 text-lg' },
  {
    field:"avatar", headerName: "Avatar", width: 70,   type:"string", headerClassName: 'text-sky-600 text-lg',
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 130,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 130,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    type:"string",
    headerClassName: 'text-sky-600 text-lg',
    width: 140,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'createdat',
    headerName: 'Created At',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'status',
    headerName: 'Verified',
    width: 120,
    type:"boolean",  
    headerClassName: 'text-sky-600 text-lg'
  },
  
];





export default function Users() {

  const [open, setOpen] = React.useState(false)

  const { isLoading , data } = useQuery({
       queryKey: ["allusers"],
       queryFn: () =>
         fetch("http://localhost:3000/api/users").then(
           (res) => res.json()
         ),
     })

   

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Users</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-sky-500 font-semibold transition hover:bg-sky-600 hover:text-gray-100 hover:opacity-80'> Add New User</button>
      </div>

      {isLoading? "loading": (
        // @ts-ignore                                                                                           
  <DatagridTable
   columnData={columns}
   rowData={data}
   category = "users"
   />
  )
  }

       {open? 
       <AddModal
       setOpen ={setOpen}
       category="Users"
       columnData = {columns}
       title="User"
       />
       : ""}
    </UsersContainer>
  )
}


