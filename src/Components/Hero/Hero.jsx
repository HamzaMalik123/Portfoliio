import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import hero from "../../images/hero.png";
import { init } from "ityped";
import HeroData from "./HeroData";
import { FaArrowRight } from "../../../node_modules/react-icons/fa";

function Hero() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Graphic Designer", "React Developer", "UI Designer"],
    });
  }, []);
  return (
    <div className="hero" id="hero">
      <div className="left">
        <div className="wrapper1">
          <ul>
            {HeroData.map((val, idx) => {
              return (
                <li>
                  {" "}
                  <a href={val.slink} target="_blank">
                    {val.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="wrapper2">
          <p className="welcome"> Hello, Welcome to my Portfolio </p>
          <h1> Hamza Saeed </h1>
          <p>
            <FaArrowRight />
            <span className="change" ref={textRef}></span>
          </p>
          <p className="intro">
            Hello World! I'm Hamza Saeed a Front-end Web Developer based in
            Germany.I love combining the words of logic and creative design to
            make eye-catching, accessible and user friendly websites and
            applications. <br />
          </p>
          <button>
            <a href="#contact"> I want to hire </a>
          </button>
        </div>
      </div>
      <div className="right">
        <img className="hero-image" src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
