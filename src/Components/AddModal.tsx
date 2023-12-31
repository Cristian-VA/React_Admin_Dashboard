
import styled from "styled-components"
import {FaWindowClose} from "react-icons/fa"
import { BsFillSendFill } from "react-icons/bs"
import { useQueryClient, useMutation } from '@tanstack/react-query';

const AddModalContainer = styled.div`
width: 99vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background: rgb(31, 41, 55, 0.7);
display: flex;
justify-content: center;
align-items: center;

`

const Modal = styled.div`
background: #f2f2f3;
padding: 45px 45px 45px 45px;
border-radius: 20px;
position: relative;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`

const ContainerForm = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

`


type props ={
    category: string 
    columnData: any
    setOpen: any
    title: string
}




export default function AddModal(props:props) {
    
 const queryClient = useQueryClient();
 const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:3000/api/${props.category}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "Hello",
          firstName: "Test",
          email: "testme@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          createdat: true,
        }),    
      });
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries([`all${props.category}`]);
    }
  });

  
const handleSubmit = (e:any) => {
  e.preventDefault()
  mutation.mutate()
  
}

    const columnData = props.columnData.filter((item:any) => item.field !== "id" && item.field !=="avatar")
    .map( (column:any) => {
        return (
            <div className='flex flex-col m-4'>
                <label className='mb-2 text-gray-700 font-semibold'>{column.headerName}</label>
                <input className='py-2 px-4 shadow-md ' title={column.headerName} type={column.type} placeholder={column.field}/>
            </div>
        )
    })
  return (
    <AddModalContainer >
        <Modal>
        <FaWindowClose onClick={()=>{props.setOpen(false)}} className="w-6 h-6 absolute top-4 right-4 hover:text-gray-500 cursor-pointer transition text-red-500"/>
          <h1 className='mb-3 mt-1 text-3xl text-center text-gray-900 '>Add new {props.title}</h1>
          
          <form>
          <ContainerForm onClick={handleSubmit}>
            {columnData}
          </ContainerForm>
            <button className='  w-full mx-4 mt-4 py-2 text-xl bg-emerald-500 bottom-10  text-white hover:bg-sky-500 transition'>
              <div className="flex justify-center gap-3">
              <h1>Send </h1>
              <BsFillSendFill className="my-auto w-5 h-5"/>
              </div>
              </button>
          
          </form>
        </Modal>

    </AddModalContainer>
  )
}

