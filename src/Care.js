import React, {useEffect, useState, useContext} from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { GardenContext } from "./Context/GardenContext";
import { UserContext } from './Context/UserContext';


function Care() {
  const { gardens } = useContext(GardenContext)
  const { user } = useContext(UserContext)

  const userGardens = user.gardens

  
//   const gardenArray = gardens.map(garden => {
//     if (garden.user_id === user.id) {
//       return user.gardens;
//     }
//   })

//   const datesArray = gardenArray.map(dates => console.log(dates[1].next_water_date))
  
//  console.log(datesArray)

  const events = userGardens.map((date) => ({
    title: `💧🔁${date.plant_name}`, 
    date: date.update_next_water_date

   }));


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
            events={events}
            />
        </div>
    )
}
export default Care;