import React from 'react'
import { DataGrid,  GridColDef,  GridToolbar } from '@mui/x-data-grid';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



const handleDelete = (id:number) =>{
  console.log(id)
}

export default function DatagridTable(props:any) {

  const actionsColumn:GridColDef =  {
  
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params) =>{
      return (
      <div className='flex gap-2'>
         <Link to={`/${props.category}/${params.row.id}`}>
          <FaEdit className="w-5 h-5 text-emerald-400"/>
        </Link>
        <FaTrashAlt onClick={()=>handleDelete(params.row.id)} className="w-5 h-5 text-red-400 cursor-pointer"/>
      </div>
      )
  }

}


  return (
    <div>
    <DataGrid className='bg-white p-3'
        rows={props.rowData}
        columns={[...props.columnData, actionsColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
          showQuickFilter: true,
          quickFilterProps: {debounceMs:500}
        }
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
