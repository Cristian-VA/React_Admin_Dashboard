import React from 'react'
import styled from "styled-components"
import {FaWindowClose} from "react-icons/fa"
import { BsFillSendFill } from "react-icons/bs"

const ModalContainer = styled.div`
width: 99vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background: rgb(31, 41, 55, 0.7);
display: flex;
justify-content: center;


`

const Modal = styled.div`
background: #f2f2f3;
padding: 30px;
border-radius: 20px;
position: relative;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
height: 280px;
width:300px;
margin-top: 1em;
display: flex;
flex-direction: column;
justify-content: space-between;

`




type Props ={
    //category,
    //columnData, gridcoldef
    //setOpen, hover over element to see its type
}




export default function AddModalCalendar(props:any) {
    
 console.log(props)

  
const handleSubmit = (e:any) => {
  e.preventDefault()
 
  

  
}
  return (
    <ModalContainer >
        <Modal>
        <FaWindowClose onClick={()=>{props.setOpen(false)}} className="w-6 h-6 absolute top-4 right-4 hover:text-gray-500 cursor-pointer transition text-red-500"/>
          <h1 className='mb-3 mt-1 text-2xl text-center text-gray-900 '>Add new Event</h1>
          
          <form className='flex flex-col '  onSubmit={handleSubmit}>
         <input   placeholder='Enter new event title' className='w-full px-2 py-2' onChange={e => props.createTitle(e.target.value)}/>

         <button className='mt-20 w-full py-2 text-xl bg-emerald-500 bottom-10  text-white hover:bg-sky-500 transition'>
              <div className="flex justify-center gap-3">
              <h1>Send </h1>
              <BsFillSendFill className="my-auto w-5 h-5"/>
              </div>
              </button>
          </form>
        </Modal>

    </ModalContainer>
  )
}

//onChange={e => setTitle(e.target.value)}