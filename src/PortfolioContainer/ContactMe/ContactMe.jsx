import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from "react-toastify";
import imgBack from "../../assets/images/ContactMe/mailz.jpeg";
import load1 from "../../assets/images/ContactMe/load2.gif";
import map from "../../assets/images/ContactMe/map-location.png"
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import {Footer} from "../Footer/Footer";
import "./ContactMe.css";


export default function ContactMe(props) {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"I Want to Hear From You"} title={"CONTACT ME"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            Fill out the form below and submit to hire me or inquire about collaboration.
          </h2>{" "}
          <a href="https://www.facebook.com/johnchristianswanson">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/johncswanson">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/johncswanson/">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://github.com/jcswanson">
            <i className="fa fa-github-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            
            <h4>I'm located in Palm Desert, CA</h4>
            <img src={map} alt="map not found" />
          </div>
          {/* {submitEmail} */}
          <form onSubmit={submitForm}> 
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Submit
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
