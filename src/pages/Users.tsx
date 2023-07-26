import React from 'react'
import styled from "styled-components"
import DatagridTable from '../Components/DatagridTable'
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import AddModal from '../Components/AddModal';



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
    field: 'firstName',
    headerName: 'First name',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 170,
    editable: true,
    type:"string"
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    type:"string",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'createdat',
    headerName: 'Created At',
    width: 170,
    editable: true,
    type:"string",
  },
  {
    field: 'status',
    headerName: 'Verified',
    width: 120,
    type:"boolean",  
  },
  
];

const rows = [
  { id: 1, lastName: 'Brown', firstName: 'Kate', email: "brownk@gmail.com", img:"../src/images/userboxProfiles/female4.jpg", status: true, phone: "+1 505-892-2361", createdat: "01.02.2023" },
  { id: 2, lastName: 'Williams', firstName: 'Beth',email: "BethWilliams5@gmail.com", img: "../src/images/userboxProfiles/femaleP1.jpg", status: false, phone: "+1 208-274-6962",  createdat: "01.02.2023"},
  { id: 3, lastName: 'Allen', firstName: 'Megan',email: "Allen123@gmail.com",img: "../src/images/userboxProfiles/femaleP2.jpg", status: true, phone: "+1 505-680-7804",    createdat: "01.02.2023"},
  { id: 4, lastName: 'Abney', firstName: 'Thomas',email: "TomAbney94@gmail.com",img: "../src/images/userboxProfiles/Male2.jpg", status: true, phone: "+1 207-823-4274",         createdat: "01.02.2023"},
  { id: 5, lastName: 'Green', firstName: 'Phil',email: "Philgreen96@gmail.com",img: "../src/images/userboxProfiles/male3.jpg", status: false, phone: "+1 505-646-8683", createdat: "01.02.2023"},
  { id: 6, lastName: 'Elliot', firstName: "Ryan",email: "elliot123@gmail.com",img: "../src/images/userboxProfiles/MaleProfile1.jpg", status: true, phone: "+1 505-839-1238",      createdat: "01.02.2023" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: "clifford97@gmail.com",img: "../src/images/userboxProfiles/dogProfuke.jpg", status: true, phone: "+1 505-656-2329",   createdat: "01.02.2023" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: "Frossini@gmail.com" , status: true, phone: "+1 505-644-2476",   createdat: "01.02.2023" },
  { id: 9, lastName: 'Sanchez', firstName: 'Pablo', email: "Psanchez@gmail.com",img: "../src/images/userboxProfiles/male4.jpg", status: true, phone: "+1 223-755-5970",       createdat: "01.02.2023" },
  { id: 10, lastName: 'Clifford', firstName: 'Ferrara', status: true, phone: "+1 505-622-5153",  createdat: "01.02.2023" },
  { id: 11, lastName: 'Frances', firstName: 'Rossini', status: true, phone: "+1 505-892-2361",   createdat: "01.02.2023" },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', status: true,phone: "+1 505-892-2361",       createdat: "01.02.2023" },
];




export default function Users() {

  const [open, setOpen] = React.useState(false)

  return (
    <UsersContainer>
      <div className='flex gap-10 my-5'>
          <h1 className='text-4xl'>Users</h1>
          <button onClick={()=> setOpen(true)} className='my-auto bg-white px-4 py-2 border-2 border-gray-500 font-semibold transition hover:bg-gray-600 hover:text-gray-100 hover:opacity-80'> Add New User</button>
      </div>

      <DatagridTable
       columnData={columns}
       rowData={rows}
       category = "users"/>

       {open? 
       <AddModal
       setOpen ={setOpen}
       category="Users"
       columnData = {columns}
       />
       
       : ""}
    </UsersContainer>
  )
}
