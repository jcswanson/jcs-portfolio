import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    autoHeight: true,
    nav: true,
    animateIn: "bounceInLeft",
    animateOut: "bounceOutLeft",
    dots: true,
    autoplay: true,
    smartSpeed: 10000,
    responsive: {
      0: {
        items: 1,
      },
      970: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  };

  return (
    <div className="fade-in" id={props.id || ""}>
      <section className="testimonial-section">
        <ScreenHeading
          title={"Testimonials"}
          subHeading={"What do employers and colleagues think of me?"}
        />{" "}
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options} 
            >

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      John worked for me as a machined parts QC inspector in the
                      aerospace industry. He was eager to learn and followed
                      directions well. His personality allowed him to easily fit
                      in with the rest of our team. He performed well and was
                      punctual with his schedule.{" "}
                      {/* <i className="fa fa-quote-right" /> */}
                    </p>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <h5>- Glen Olson </h5>{" "}
                    <p>Head of Quality at DASCO Engineering </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      As Deputy Project Manager for the FGDC
                       GeoPathways Program's participation in the OGC's 2023 Disaster Pilot,
                        John proved an exceptional leader and role
                         model. He effortlessly represented our
                        team in meetings with multiple stakeholders,
                        leaving a lasting positive impression and 
                        securing multiple high-level partnerships.  {" "}
                      {/* <i className="fa fa-quote-right" /> */}
                    </p>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <h5>- Pooja Muthuraj </h5>{" "}
                    <p>Communications Lead Intern at FGDC GeoPathways </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              
              
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      John is an extremely talented software developer. At Penn
                      State we developed a full stack loan application using
                      Java and Spring Boot and I learned that he is someone who
                      is reliable, hard working and carries himself in a polite
                      and respectable manner.{" "}
                      {/* <i className="fa fa-quote-right" /> */}
                    </p>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <h5>- Jordan Loudis </h5>{" "}
                    <p> Full Stack Developer at Xpanxion </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      As a quality engineer and John's supervisor, I observed
                      him performing well for our company daily by verifying
                      complex aircraft hardware, including completion of
                      associated paperwork and working closely with our
                      customers.
                      {/* <i className="fa fa-quote-right" /> */}
                    </p>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <h5>- Ken Patterson </h5>{" "}
                    <p> Quality Engineer at DASCO Engineering </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      John Swanson is one of the most honest employees I've seen
                      and he puts his all into his work. He was always positive
                      and a people person. John will be a great asset to any
                      company. 
                      {/* <i className="fa fa-quote-right" /> */}
                    </p>{" "}
                  </div>{" "}
                  <div className="client-info">
                    <h5>- Joshua Feland </h5>{" "}
                    <p> Store Manager at Pacific Coast Hobbies </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </OwlCarousel>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <div className="footer-image"></div>{" "}
    </div>
  );
}
