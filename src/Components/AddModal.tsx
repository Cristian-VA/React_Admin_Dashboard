import React from 'react'
import styled from "styled-components"
import {FaWindowClose} from "react-icons/fa"

const AddModalContainer = styled.div`

`

const Modal = styled.div`

`

type Props ={
    //category,
    //columnData, gridcoldef
    //setOpen, hover over element to see its type
}




export default function AddModal(props:any) {
    const columnData = props.columnData.filter((item:any) => item.field !== "id" && item.field !=="avatar")
    .map( (column:any) => {
        return (
            <div>
                <label>{column.headerName}</label>
                <input title={column.headerName} type={column.type} placeholder={column.field}/>
            </div>
        )
    })
  return (
    <AddModalContainer>
        <Modal>
        <FaWindowClose onClick={()=>{props.setOpen(false)}} className="w-6 h-6"/>
          <h1>Add new {props.category}</h1>
          
          <form>
            {columnData}
          </form>

        </Modal>

    </AddModalContainer>
  )
}

