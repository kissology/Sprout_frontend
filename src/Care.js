import React, {useContext} from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { UserContext } from './Context/UserContext';


function Care() {
  const { user } = useContext(UserContext)

console.log(user)
  
const events = user.gardens.map((date) => ({
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