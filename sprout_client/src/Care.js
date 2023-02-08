import React, {useEffect, useState, useContext} from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { GardenContext } from "./Context/GardenContext";


function Care() {
    const { gardens } = useContext(GardenContext);
  

const events = gardens.map((events) => ({
    title: `💧${events.plant.name}`,
    date: events.update_next_water_date,
    color: "blue",
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
              eventClick={
                function(arg){
                    alert(arg.events.title)
                    alert(arg.events.date)
                }
              }
              height={"90vh"}
              events={events}
            
            
            />
        </div>
    )
}
export default Care;