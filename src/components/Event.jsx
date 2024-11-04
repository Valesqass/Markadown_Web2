import { React, useEffect, useState } from "react";
import wikiThumbnail from "../assets/Wikipedia-logo-v2-pixel-art.png";

function Event() {
  // création du tableau events et son setteur
  const [events, setEvents] = useState([]);

  function dailyEvent() {
    fetch("https://history.muffinlabs.com/date")
      .then((res) => res.json())
      // màj de l'event
      .then((data) => {
        // On stocke les event dans une nouvelle liste
        const eventsList = data.data.Events;
        // On garde 3 évènements depuis 1888
        const myEvents = eventsList
          .filter((event) => parseInt(event.year) < 2000)
          .slice(0, 3);
        // màj des événements filtrés
        setEvents(myEvents);
      })
      .catch((err) => console.error(err));
  }

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    dailyEvent();
  }, []);

  return (
    <>
      {events.map((event, index) => (
        <li key={index} className="cards__item">
          <div className="card">
            <img src={wikiThumbnail} alt="" />

            <div className="card__content">
              <div className="card__title">Year : {event.year}</div>
              <p className="card__text">{event.text}</p>
              <button onClick={() => openLink("https://www.google.com")}>
                View on wikipedia
              </button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default Event;
