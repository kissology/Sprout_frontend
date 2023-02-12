import React, {useEffect, useState, useContext} from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { UserContext } from "./Context/UserContext";


function Care() {
    const { user } = useContext(UserContext)
  const userGardens = user.gardens

  const waterEvents = userGardens.map((event) => ({
    title: `💧${event.plant_name}`,
    date: event.update_next_water_date,
    }))

const rotateEvents = userGardens.map((event) => ({
        title: `🔁${event.plant_name}`,
        date: event.update_next_rotate_date,
    }))

const pottingEvents = userGardens.map((event) => ({
    title: `🌱${event.plant_name}`,
    date: event.update_next_soil_date,
}))







    return (
        <div className="care">
            <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={'dayGridMonth'}
            headerToolbar={{
                start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
              }}
              height={"90vh"}
              events={waterEvents}
              
            
            
            />
        </div>
    )
}
export default Care;