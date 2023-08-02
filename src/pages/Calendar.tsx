import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from '@fullcalendar/core'
import { useQuery } from "@tanstack/react-query"
import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "styled-components"
import CalendarModal from "../Components/CalendarModal.tsx"

const CalendarContainer = styled.div`
margin: 2em 1.4em;

`

export default function Calendar() {


    const [currentEvents, setCurrentEvents] = useState([])
    


   
    const handleDateClick = (selected:any) => {
      const title = prompt("Please enter a new title for your event")
    const calendarApi= selected.view.calendar
    calendarApi.unselect()

if (title) {
    calendarApi.addEvent({
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
}

      };

      const handleEventClick = (selected:any) => {
        if (
          window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          )
        ) {
          selected.event.remove();
        }
      }

  const mapEvents = currentEvents.map((event:any) =>(
    <ListItem className="bg-sky-200 mb-4 shadow-sm"  key={event.id}>
        <ListItemText
        primary={event.title}
        secondary={
          <h1>{formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric"
          })}
          </h1>
        }
        />
    </ListItem>
  ))


  return (
    <CalendarContainer>
      
        <h1 className="text-gray-700 my-6 text-4xl"> Calendar</h1>

        <div className="flex justify-between mt-5">
            <div className="grow shrink p-4 w-1/5 bg-white mr-3 shadow-md ">

              <h1 className="text-cyan-900 font-semibold text-xl"> Events</h1>

              <List >
                {mapEvents}
      
              </List>

            </div>
              
         <div className="grow shrink p-4 w-full  bg-white shadow-md text-gray-700">
        <FullCalendar 
             height="70vh"      
             plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
             ]}
             headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events:any) => setCurrentEvents(events)}
            
            initialEvents={[
            {
              id: "1",
              title: "Sales Meeting",
              date: "2023-10-14",
            },
            {
              id: "2",
              title: "HR event",
              date: "2023-10-28",
            },
            {
              id: "3",
              title: "Product Research Meeting",
              date: "2023-10-07",
            },
            {
              id: "4",
              title: "Management Meeting",
              date: "2023-10-06",
            },
            {
              id: "5",
              title: "Finance Meeting",
              date: "2023-10-12",
            },   
            {
              id: "6",
              title: "Marketing Meeting",
              date: "2023-10-04",
            },            
            ]
          }
             />
          

         </div>

        </div>


    </CalendarContainer>









  )
}


//const title = prompt("Enter new title for event")
//const calendarApi= selected.view.calendar
//calendarApi.unselect()
//
//if (title) {
//    calendarApi.addEvent({
//      id: `${selected.dateStr}-${title}`,
//      title,
//      start: selected.startStr,
//      end: selected.endStr,
//      allDay: selected.allDay,
//    });
//}
//}

