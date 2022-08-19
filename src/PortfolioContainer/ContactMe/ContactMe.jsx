import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactBg from "../../assets/images/ContactMe/neon-contact.png";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import * as FaIcons from "react-icons/fa";
import { Footer } from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  //Subission Message
  const [successMessage, setSuccessMessage] = useState("");
  //emailjs API
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5uijpyj",
        "template_2mbz1vg",
        form.current,
        "g9xLO38GYdCefDzM3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent! I will contact you soon.");
          console.log("Message was successful!");
          e.target.reset();
          setTimeout(() => setSuccessMessage(""), 8000);
        },
        (error) => {
          console.log(error.text);
          setTimeout(
            () => setSuccessMessage("Message Failed! Error is " + error.text),
            8000
          );
        }
      );
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's get in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            Fill out the form below or reach out on social media with any
            opportunities.
          </h2>
          <a href="https://www.facebook.com/johnchristianswanson" alt="facebook link" target="_blank"rel="noreferrer">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/johncswanson"alt="instagram link" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/johncswanson/"alt="linkedin link" target="_blank"rel="noreferrer" >
          <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://github.com/jcswanson"alt="github link" target="_blank" >
          <i className="fa fa-github-square"></i>
          </a>
          <a href="https://hackerrank.com/jcswanson"alt="hackerrank link" target="_blank"rel="noreferrer" >
            <i><FaIcons.FaHackerrank /></i>
          </a>
          <a href="https://leetcode.com/jcswanson"alt="leetcode link" target="_blank"rel="noreferrer" >
         <i className="fa fa-file-code-o" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/the_jcswanson"alt="twitter link" target="_blank" rel="noreferrer">
          <i className="fa fa-twitter-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <img src={ContactBg} alt="img not found" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />

            <label>Email</label>
            <input type="email" name="user_email" required />

            <label>Message</label>
            <textarea type="text" name="message" required />
            <div className="send-button-and-message">
              <div className="send-btn">
                <button type="submit" value="Send">
                  Send Message
                </button>

                <span className="message">{successMessage}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
