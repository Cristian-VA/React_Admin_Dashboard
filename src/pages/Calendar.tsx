import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from '@fullcalendar/core'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

export default function Calendar() {

    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected:any) => {
        const title = prompt("Enter new title for event")
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
    }

    const handleEventClick = (selected:any) => {
        if (
          window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          )
        ) {
          selected.event.remove();
        }
      };



  return (
    <div>
        <h1> Calendar</h1>

        <div className="flex justify-between">

        </div>
    </div>









  )
}
