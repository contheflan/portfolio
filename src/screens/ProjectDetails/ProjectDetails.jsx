import React from 'react';
import './ProjectDetails.css';
import { useParams } from 'react-router-dom';

function ProjectDetails(props) {
  const params = useParams()
  const detail = props.listProjects.find((r) => r.fields.name === params.name)
  return (
    <div>
      <div className='project-details'>
        <h2 className='project-name'>{detail && detail.fields.name}</h2>
        <div className='project-details-container'>
          <section className="column column-a">
            <a rel="noreferrer" target="_blank" href={detail && detail.fields.website}><img id='project-img' alt="project-img" src={detail && detail.fields.thumbnail} /></a>
          </section>
          <section className="column column-b">
            <p className='text'>{detail && detail.fields.description}</p>
            <h3 className='subtext'>BUILT WITH</h3>
            <p className='text'>{detail && detail.fields.languages}</p>
            <div className='details-button-container'>
            <a className='details-button code' rel="noreferrer" target="_blank" href={detail && detail.fields.github}>CODE </a>
            <a className='details-button web' rel="noreferrer" target="_blank" href={detail && detail.fields.website}>WEBSITE</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;