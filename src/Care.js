import React, {useContext, useState, useEffect} from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { UserContext } from './Context/UserContext';


function Care() {
  const { user } = useContext(UserContext);
  const [waterDates, setWaterDates] = useState([]);
  const [rotateDates, setRotateDates] = useState([]);
  const [soilDates, setSoilDates] = useState([]);

  useEffect(() => {
    setWaterDates(user.gardens.flatMap(garden => garden.water_dates));
    setRotateDates(user.gardens.flatMap(garden => garden.rotate_dates));
    setSoilDates(user.gardens.flatMap(garden => garden.soil_dates));
  }, [user.gardens]);

  const events = [];

  user.gardens.forEach((garden) => {
    garden.water_dates.forEach((date) => {
      events.push({
        title: `💧${garden.plant_name}`,
        date: date,
      });
    });
  
    garden.rotate_dates.forEach((date) => {
      events.push({
        title: `🔁${garden.plant_name}`,
        date: date,
      });
    });
  
    garden.soil_dates.forEach((date) => {
      events.push({
        title: `🪴${garden.plant_name}`,
        date: date,
      });
    });
  });

  function getNextCareDate(user) {
    const allDates = user.gardens.flatMap(garden => [
      ...garden.water_dates,
      ...garden.rotate_dates,
      ...garden.soil_dates,
    ]);
  
    const sortedDates = allDates.sort((a, b) => new Date(a) - new Date(b));
    const today = new Date();
  
    const upcomingDates = sortedDates.filter(date => new Date(date) > today);
  
    if (upcomingDates.length === 0) {
      return null;
    }
  
    const nextCareDate = new Date(upcomingDates[0]);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = nextCareDate.toLocaleDateString(undefined, options);
  
    return formattedDate;
  }
  
  const hasGardens = user.gardens.length > 0

  return (
    <div className="care">
      {hasGardens ? (
        <>
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            height={"90vh"}
            events={events}
          />
          <br />
          <h1 style={{color: "black", position: "relative", top: "200px", left:"100px", textAlign: "center"}}>
            Your next scheduled care date is<br />{getNextCareDate(user)}
          </h1>
        </>
      ) : (
        <h2 style={{textAlign: "center", marginTop: "50px"}}>
          Add plants to your garden to see your personalized care calendar.
        </h2>
      )}
    </div>
  );
}


export default Care;