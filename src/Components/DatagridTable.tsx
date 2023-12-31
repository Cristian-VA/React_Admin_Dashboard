
import { DataGrid,  GridColDef,  GridToolbar } from '@mui/x-data-grid';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';



type props = {
  title:string
  category: string
  noView: boolean
  columnData: any
  rowData: any

}

export default function DatagridTable(props:props) {

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:3000/api/${props.category}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries([`all${props.category}`]);
    }
  });


  const handleDelete = (id: number) => {

     mutation.mutate(id)
  };


  const actionsColumn:GridColDef =  {
  
    field: 'actions',
    headerName: 'Actions',
    headerClassName: 'text-sky-600 text-lg',
    width: 120,
    renderCell: (params) =>{
      return (
      <div className='flex gap-2'>
        {props.noView? "" : (
          <Link to={`/${props.category}/${params.row.id}`}>
          <FaEdit className="w-5 h-5 text-emerald-400"/>
        </Link>
        )}
        
        <FaTrashAlt onClick={() => handleDelete(params.row.id)} className="w-5 h-5 text-red-400 cursor-pointer"/>
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
