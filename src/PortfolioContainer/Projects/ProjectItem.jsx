import React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";

const ProjectItemStyles = styled.div`
  margin: 20px 5px;
  font-family: "Roboto-Regular", sans-serif;
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 25px;
    margin-top: 35px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--peach);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 0.5rem;
    background-color: var(--light-tan);
    padding: 0.2rem;
  }
  .projectItem__title {
    font-size: 1.3rem;
    font-family: "Montserrat-Black", sans-serif;
    color: var(--charcoal);
  }
  .projectItem__desc {
    font-size: 0.89rem;
    text-align: justify;
    line-height: 1.25rem;
    margin-top: 0.5rem;
  }
  .projectItem__stack {
    margin-right: 0.35rem;
    height: 1.3rem;
    width: -webkit-fill-available;
    min-width: fit-content;
    display: flex;
    background: var(--brown);
    color: var(--light-tan);
    font-size: 0.78rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .projectItem__source {
    font-size: 1rem;
  }
  .projectItem__stackcontainer {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 320px;
      border-radius: 20px;
    }
    .projectItem__stack {
      margin-right: 0.15rem;
      height: 1.3rem;
      font-size: 0.65rem;
      border-radius: 7px;
    }
    .projectItem__desc {
      font-size: 0.75rem;
    }
    .projectItem__title {
      font-size: 1rem;
    }
    .projectItem__source {
      font-size: 0.75rem;
    }
  }
`;

export default function ProjectItem({
                                      img = {},
                                      title = "Project Name",
                                      techstack = [],
                                      source = "Repo link",
                                      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                    }) {
  const techstacks = techstack.map((stack) => (
      <div className="projectItem__stack"> {stack} </div>
  ));
  return (
      <ProjectItemStyles>
        <div className="projectItem__img">
          <img src={img} alt="project" />
        </div>
        <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>

          <div className="projectItem__stackcontainer"> {techstacks} </div>
          <p className="projectItem__desc">{desc}</p>

          <div className="projectItem__source">
            <a href={source} alt="source code">
              LINK TO SOURCE
            </a>
          </div>
        </div>
      </ProjectItemStyles>
  );
}
