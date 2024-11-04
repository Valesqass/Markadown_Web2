import Mydate from "./Mydate";
import Quote from "./Quote";
import Myjoke from "./MyJoke";
import Event from "./Event";
import Myrecipe from "./Myrecipe";
import Mocktail from "./Mocktail";
import "./Dashboard.css";
import closeIcon from "../assets/Close.svg";
import maximiseIcon from "../assets/Maximize.svg";
import minimiseIcon from "../assets/Minimize.svg";
import heticLogo from "../assets/hetic.png";
import wordpadLogo from "../assets/write_wordpad-1.svg";
import { Link } from "react-router-dom";

// Dashboard
function Dashboard() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="top">
        <Mydate />
        <Quote />
        <Myjoke />
      </div>
      <div className="bottom">
        <div className="recent-files">
          <div className="banner">
            <h3>Welcome to MDtic</h3>
            <div>
              <img src={minimiseIcon} alt="" />
              <img src={maximiseIcon} alt="" />
              <img src={closeIcon} alt="" />
            </div>
          </div>
          <h3>
            Start editing your Markdown files instantly – online, easy, and 100%
            free!
          </h3>
          <Link to="/editor">
            <button className="newFile">
              <img src={wordpadLogo} alt="" />
              <h2>Create a new file+</h2>
            </button>
          </Link>
        </div>
        <ul className="cards">
          <Myrecipe />
          <Mocktail />
          <Event />
          <li className="cards__item">
            <div className="card">
              <img src={heticLogo} alt="" />
              <div className="card__content">
                <div className="card__title">HETIC</div>
                <p className="card__text">
                  This website is sponsored by hetic ! A brand new school
                  founded this year.
                </p>
                <button onClick={() => openLink("https://www.hetic.net/")}>
                  See more
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
