import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from "react-toastify";
import imgBack from "../../assets/images/mailz.jpeg";
import load1 from "../../assets/images/load2.gif";
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
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Company" {...register("Company", { maxLength: 150})} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Phone Number" {...register("Phone Number", { maxLength: 12})} />
//       <select {...register("Contact Reason", { required: true })}>
//         <option value="Job Offer">Job Offer</option>
//         <option value="Networking">Networking</option>
//         <option value="Project Collaboration">Project Collaboration</option>
//         <option value="Say Hello">Say Hello</option>
//       </select>
//       <textarea {...register("Message", {required: true})} />

//       <input type="submit" />
//     </form>
//   );
// }
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
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
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




  
  
 