import React from 'react'
import styled from "styled-components"
import DatagridTable from '../Components/DatagridTable'
import {  GridColDef, } from '@mui/x-data-grid';
import AddModal from '../Components/AddModal';
import { useQuery } from "@tanstack/react-query"


const UsersContainer = styled.div`
 color: #374151;
 margin: 2em 1.4em;
 min-height: 80vh;
`
const columns: GridColDef[] = [
  { field: 'id', headerName: ' ID', width: 90,   type:"number",  headerClassName: 'text-sky-600 text-lg' },
  {
    field:"avatar", headerName: "Img", width: 100,   type:"string",  headerClassName: 'text-sky-600 text-lg',
    renderCell: (params) =>{
      return <img className='w-12 h-12 p-2 rounded-full object-cover' src={params.row.img || "../src/images/userboxProfiles/anonImage.jpg"} alt=""/>
    }
  },
  {
    field: 'activity',
    headerName: "Activity",
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'Date',
    headerName: 'Date',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'organizer',
    headerName: 'Organizer',
    width: 170,
    editable: true,
    type:"string",
    headerClassName: 'text-sky-600 text-lg'
  },
  {
    field: 'mandatory',
    headerName: 'Mandatory',
    width: 120,
    type:"boolean",  
    headerClassName: 'text-sky-600 text-lg'
  },
  
];





export default function Posts() {

  const [open, setOpen] = React.useState(false)

  const { isLoading , data } = useQuery({
       queryKey: ["allposts"],
       queryFn: () =>
         fetch("https://serv-sqgi.onrender.com/api/posts").then(
           (res) => res.json()
         ),
     })

     

    

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Announcements</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-sky-500 font-semibold transition hover:bg-sky-600 hover:text-gray-100 hover:opacity-80'> Add New Post</button>
      </div>

      {isLoading? "loading": (
        // @ts-ignore
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
       category="posts"
       columnData = {columns}
       title = "Post"
       />
       : ""}
    </UsersContainer>
  )
}