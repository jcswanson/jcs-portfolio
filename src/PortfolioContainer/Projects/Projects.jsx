import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import projects from "../../assets/data/projects";
import ProjectItem from "./ProjectItem";
import "swiper/css/bundle";

const ProjectStyle = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 0px 0px;
  .projects__allItems {
    gap: 0rem;
  }
  .container {
    background-color: var(--light-tan);
    border-radius: 25px;
    border: 3px solid var(--brown);
    margin-top: 50px;
  }
  .swiper-container {
    max-width: 100%;
    background-color: var(--light-tan);
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: var(--charcoal);
    color: var(--peach);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 8px;
    bottom: 0px;
    font-size: 1.5rem;
    transform: translateY(55%);
    border-radius: 25px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    opacity: 0.8;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1.4rem;
    opacity: 1;
  }
  .swiper-pagination-bullet {
    background-color: var(--brown);
    opacity: 70%;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--peach);
    opacity: 100%;
  }

  @media only screen and (max-width: 768px) {
    .swiper-slide {
      width: 300px;
    }

    .projects__allItems {
      max-width: 550px;
      margin: 0 auto;
      margin-bottom: 0rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);
    return (
        <div className="project-component fade-in" id={props.id || ""}>
            <ProjectStyle>
                <ScreenHeading
                    title={"Projects"}
                    subHeading={"Recent projects I've worked on"}
                />

                <div className="container">
                    <div className="projects__allItems">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            loop={true}
                            speed={800}
                            autoplay={{ enabled: true, delay: 8000 }}
                            navigation
                            pagination={{ dynamicBullets: true, clickable: true }}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                                // when window width is >= 1200px
                                1280: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {projects.map((project, index) => {
                                if (index >= projects.length) return;
                                return (
                                    <SwiperSlide key={project.id}>
                                        <ProjectItem
                                            title={project.name}
                                            img={project.img}
                                            techstack={project.techStack}
                                            source={project.source}
                                            desc={project.desc}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </ProjectStyle>
        </div>
    );
}
