import React from "react";
import "./about.scss";
import Hamza from "../../images/hamza.jpeg";
import { BiRightArrow } from "../../../node_modules/react-icons/bi";

function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="main">
          <p className="main1"> Who am I? </p>
          <p className="main-heading">
            {" "}
            I am <span>Hamza Saeed </span> a Frontend Developer and Graphic
            Desinger.
          </p>
          <p className="aboutme">About me</p>
          <hr />
          <p className="redHeading">
            Techonology leads, society follows. The move towards increasin
            inclusivity and diversity in the industry through representation is
            of importance to me.
            <br />
            I'm excited to make the leap and continue refining my skills with
            the right company. Feel free to contact me. I am willing to put my
            all efforts and concentrations to make you feel proud about giving
            me a chance.
          </p>
          <ul>
            <li>
              <BiRightArrow className="red" /> Html5
            </li>
            <li>
              <BiRightArrow className="red" /> CSS3
            </li>
            <li>
              <BiRightArrow className="red" /> Bootstrap
            </li>
            <li>
              <BiRightArrow className="red" /> React.JS
            </li>
            <li>
              <BiRightArrow className="red" /> Node.JS
            </li>
            <li>
              <BiRightArrow className="red" /> MongoDB
            </li>
          </ul>
          <hr />
          <div className="aboutDown">
            <p className="name">
              <b> Name : </b> Hamza Saeed
            </p>
            <p className="email">
              <b> Email: </b> saeedhamza268@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Hamza} alt="Hamza" />
      </div>
    </div>
  );
}
export default About;
