import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
 margin: 30px 30px;
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 25px;
    margin-top: 35px;
    overflow: hidden;
    display: inline-block;
    border: 2px solid var(--sky-blue);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--drk-space);
    padding: 0.2rem;
    color: var(--blue-white);
    border-radius: 25px;
  }
  .projectItem__title {
    font-size: 1.35rem;
    font-family: 'Montserrat-Bold', sans-serif;
    color: var(--orange);
  }
  .projectItem__desc {
    font-size: 0.9rem;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 600;
    letter-spacing: 0.01rem;
    line-height: 1.4rem;
    margin-top: 0.5rem;
  }
  .projectItem__stack {
    margin-right: 0.65rem;
    height: 1.5rem;
    width: -webkit-fill-available;
    display: flex;
    background: var(--sky-blue);
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
  }
  .projectItem__stackcontainer {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = {},
  title = 'Project Name',
  techstack = [],
  source = 'Repo link',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) 
{
  var techstacks = techstack.map(stack => <div  className='projectItem__stack'> {stack} </div>)
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project" />
      </div>
      <div className="projectItem__info">
       
          <h3 className="projectItem__title">{title}</h3>
        <div className='projectItem__stackcontainer'> {techstacks} </div>
        <p className="projectItem__desc">{desc}</p>

        <div className='projectItem__source' > 
          <a href={source} alt='source code'>SOURCE CODE</a>
        </div> 
      </div>
    </ProjectItemStyles>
  );
}