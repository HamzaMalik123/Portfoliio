import React from "react";
import "./contact.scss";
import { AiFillHome } from "../../../node_modules/react-icons/ai";
import { MdCall } from "../../../node_modules/react-icons/md";
import { FaEnvelope } from "../../../node_modules/react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <p className="disc1"> Get in Touch </p>
        <p className="disc2">
          You are welcome to contact me through following of my information :)
        </p>
      </div>
      <div className="main-contact">
        <div className="contact-card">
          <div className="iconn">
            <AiFillHome />
          </div>
          <div className="discription">Kaiserslautern, Germany</div>
        </div>
        <div className="contact-card">
          <div className="iconn">
            <MdCall />
          </div>
          <div className="discription" href="https://wa.me/+923056086871">
            <a href=" https://wa.me/+491778741500" target="_blank">
              {" "}
              +49 177 8741500{" "}
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="iconn">
            <FaEnvelope />
          </div>
          <div className="discription">saeedhamza268@gmail.com</div>
        </div>
      </div>
      {/* <div className="footer">
                Hello
          </div> */}
    </div>
  );
}

export default Contact;
