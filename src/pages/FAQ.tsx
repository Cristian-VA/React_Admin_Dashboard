import React from 'react'
import { Accordion } from '@mui/material'
import {AccordionSummary, AccordionDetails} from '@mui/material'
import {FaAngleDown} from "react-icons/fa6"
import styled from "styled-components"

export default function FAQ() {

    const FAQContainer = styled.div`
    min-height: 80vh;
    margin: 2em 1.4em;
    `

  return (
    <FAQContainer>
        <h1 className='text-4xl my-5'> FAQ</h1>
        
        
        <Accordion  
        sx={{
            background: "#e0f2fe",
            margin: "0 0 1em",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        }}>
        <AccordionSummary  expandIcon={<FaAngleDown className="text-sky-700"/>} className='bg-sky-100'>
        <h1 className='text-sky-700 font-semibold '>How do I add new products to the website through the admin panel?</h1>
        </AccordionSummary>
        <AccordionDetails>
            <h1 className='text-gray-600  font-semibold'>Answer: To add new products navigate to the "Products" section, and click on "Add New Product." Fill in the required details such as product name, description, price, and upload images before saving the changes. However this function is in testing stages</h1>
        </AccordionDetails>
        </Accordion>

        <Accordion  
        sx={{
            background: "#e0f2fe",
            margin: "0 0 1em",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        }}>
        <AccordionSummary  expandIcon={<FaAngleDown className="text-sky-700"/>} className='bg-sky-100'>
        <h1 className='text-sky-700 font-semibold'>How can I manage the inventory for the headphones and speakers available in the store?</h1>
        </AccordionSummary>
        <AccordionDetails>
            <h1 className='text-gray-600  font-semibold'>Answer: To manage inventory, go to the "Products" section in the admin panel. Here, you can view the current stock of the product and user interaction</h1>
        </AccordionDetails>
        </Accordion>

        <Accordion  
        sx={{
            background: "#e0f2fe",
            margin: "0 0 1em",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        }}>
        <AccordionSummary  expandIcon={<FaAngleDown className="text-sky-700"/>} className='bg-sky-100'>
        <h1 className='text-sky-700 font-semibold'>How can I monitor sales and revenue performance for headphone and speaker products?</h1>
        </AccordionSummary>
        <AccordionDetails>
            <h1 className='text-gray-600  font-semibold'>Answer: The admin panel provides a dashboard with sales analytics and revenue performance. You can track revenue generated over specific periods to make data-driven business decisions.</h1>
        </AccordionDetails>
        </Accordion>

        <Accordion  
        sx={{
            background: "#e0f2fe",
            margin: "0 0 1em",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        }}>
        <AccordionSummary  expandIcon={<FaAngleDown className="text-sky-700"/>} className='bg-sky-100'>
        <h1 className='text-sky-700 font-semibold'>Is there a way to track website traffic and user behavior for product pages?</h1>
        </AccordionSummary>
        <AccordionDetails>
            <h1 className='text-gray-600  font-semibold'>Answer: Yes, the admin panel can integrate with web analytics tools. By adding the tracking code from platforms like Google Analytics, you can monitor website traffic, user behavior, and product page performance to optimize the online shopping experience. Info is displayed per user in the "Users" page</h1>
        </AccordionDetails>
        </Accordion>

        <Accordion  
        sx={{
            background: "#e0f2fe",
            margin: "0 0 1em",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        }}>
        <AccordionSummary  expandIcon={<FaAngleDown className="text-sky-700"/>} className='bg-sky-100'>
        <h1 className='text-sky-700 font-semibold'>How do I process supplier orders and view order details using the admin panel?</h1>
        </AccordionSummary>
        <AccordionDetails>
            <h1 className='text-gray-600 font-semibold'>Answer: Orders can be processed in the "Orders" section of the admin panel. Here, you can view and manage all supplier orders and track shipment details.</h1>
        </AccordionDetails>
        </Accordion>

        <Accordion  
        sx={{
            background: "#e0f2fe",
            margin: "0 0 1em",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        }}>
        <AccordionSummary  expandIcon={<FaAngleDown className="text-sky-700"/>} className='bg-sky-100'>
        <h1 className='text-sky-700 font-semibold'>Is it possible to export sales and product data to analyze outside the admin panel?</h1>
        </AccordionSummary>
        <AccordionDetails>
            <h1 className='text-gray-600  font-semibold'>Answer: Yes, the MUI datagrid allows you to export sales and product data in various formats, such as CSV or Excel. By exporting this data, you can perform in-depth analysis using external tools and spreadsheets.</h1>
        </AccordionDetails>
        </Accordion>
        
    </FAQContainer>
  )
}
