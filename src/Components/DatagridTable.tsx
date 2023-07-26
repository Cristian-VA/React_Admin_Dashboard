import React from 'react'
import { DataGrid,  GridToolbar } from '@mui/x-data-grid';





export default function DatagridTable(props:any) {
  return (
    <div>
    <DataGrid className='bg-white p-3'
        rows={props.rowData}
        columns={props.columnData}
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
