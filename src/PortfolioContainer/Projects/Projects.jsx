import React, {useEffect} from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from '../../Utilities/Animations';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import projects from '../../assets/data/projects';
import ProjectItem from "./ProjectItem";
import 'swiper/css/bundle';

const ProjectStyle = styled.div`
font-family: 'Roboto', sans-serif;
margin:20px 20px;
.projects__allItems {
    gap: 0rem;
    
  }
  .container {
      background-color: var(--drk-space);
      border-radius: 25px;
      box-shadow: 5px 5px 20px 4px var(--gray);
  }
  .swiper-container {
    padding-top: 0rem;
    max-width: 100%;
    background-color: var(--drk-space);
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 45px;
    width: 45px;
    background-color: var(--gray);
    color: var(--orange);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 8px;
    bottom: 0px;
    transform: translateY(50%);
    border-radius: 25px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1.5rem;
    opacity: 70%;
  }
  .swiper-pagination-bullet {
    background-color: var(--gray-orange);
    opacity: 70%;
  }
 .swiper-pagination-bullet-active {
    background-color: var(--orange);
    opacity: 100%;
  }

  @media only screen and (max-width: 768px) {
    .swiper-slide {
        width: 300px;
    }
    
    .projects__allItems {
        max-width: 550px;
        margin: 0 auto;
        margin-bottom: 10rem;
        gap: 5rem;
        .projectItem__img {
          width: 100%;
        }
    }
  }
`;

export default function Projects(props){
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
    <div className="project-component fade-in"  id={props.id || ""}> 
         <ProjectStyle>
           <ScreenHeading
             title={'PROJECTS'}
             subHeading={'Applications from my GitHub Profile'}
            /> 
        
      <div className="container">
        <div className="projects__allItems">
          <Swiper
          modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{enabled: true, delay: 5000}}
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
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= projects.length - 1) return;
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
            })};
          </Swiper>
        </div>
      </div> 
    </ProjectStyle> 
  </div>
   
       
    );
}