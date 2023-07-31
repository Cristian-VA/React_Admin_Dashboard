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
  { field: 'id', headerName: 'Meeting ID', width: 90,   type:"number" },
  {
    field:"avatar", headerName: "Img", width: 100,   type:"string",
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
  {
    field: 'activity',
    headerName: "Activity",
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'organizer',
    headerName: 'Organizer',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'mandatory',
    headerName: 'Mandatory',
    width: 120,
    type:"boolean",  
  },
  
];





export default function Posts() {

  const [open, setOpen] = React.useState(false)

  const { isLoading , data } = useQuery({
       queryKey: ["allposts"],
       queryFn: () =>
         fetch("http://localhost:3000/api/posts").then(
           (res) => res.json()
         ),
     })

     console.log(data)

    

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Orders</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-gray-500 font-semibold transition hover:bg-gray-600 hover:text-gray-100 hover:opacity-80'> Add New User</button>
      </div>

      {isLoading? "loading": (
      <DatagridTable
       columnData={columns}
       rowData={data}
       category = "posts"
       noView = {true}
       />
      )
      }

       {open? 
       <AddModal
       setOpen ={setOpen}
       category="Meeting"
       columnData = {columns}
       />
       : ""}
    </UsersContainer>
  )
}