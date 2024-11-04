import dateIcon from "../assets/calendar-0.svg";
import timeIcon from "../assets/clock-1.svg";

// Importation des modules React

import { React, useEffect, useState, require } from "react";

// Composant date

function Mydate() {
  // today = date.toString()
  // Stockage de la date initiale
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const time = date.getHours() + ":" + date.getMinutes();
  // Stockage du temps à partir de "date"
  // Gestion de l'état (useState) de la date pour la màj
  const [currenttime, setTime] = useState(time);

  // Système de màj toute les minutes (useEffect)
  useEffect(() => {
    const objetInterval = setInterval(() => {
      // On relance la fonction Date()
      const upDate = new Date();
      const newTime = upDate.getHours() + ":" + upDate.getMinutes();
      setTime(newTime);
    }, 60000);

    return () => {
      clearInterval(objetInterval);
    };
  }, []);

  return (
    <div className="callendar">
      <div className="date">
        <img src={dateIcon} alt="" />
        Today is {month} / {day} / {year}
      </div>
      <div className="time">
        <img src={timeIcon} />
        Time is {time}
      </div>
    </div>
  );
}

export default Mydate;
