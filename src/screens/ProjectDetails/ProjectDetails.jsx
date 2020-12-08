import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import NavBar from '../../components/NavBar/NavBar';
import GitHub from '../../assets/github.png';
import ExternalLink from '../../assets/external-link.png';
import Footer from '../../components/Footer/Footer';

function ProjectDetails(props) {
  const params = useParams()
  const project = props.listItems.find((r) => r.fields.name === params.name)

  return (
    <div>
      <NavBar />

      <div className='project-details'>

        <h2 className='proj-name'>{project && project.fields.name}</h2>

        <div className='project-details-container'>
          <section className="column column-a">
            <h3 className='subtext'>MOBILE VIEW</h3>
            <a rel="noreferrer" target="_blank" href={project && project.fields.website}><img id='mobile-img' alt="mobile-view" src={project && project.fields.mobileimg} /></a>
          </section>
          <section className="column column-b">
            <h3 className='subtext'>DESCRIPTION</h3>
            <p className='text'>{project && project.fields.description}</p>
            <h3 className='subtext'>BUILT WITH</h3>
            <p className='text'>{project && project.fields.languages}</p>
            <div className='details-button-container'>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href={project && project.fields.github}>SEE CODE <img id='github' src={GitHub} alt="github" alt="github"/></a>
            <a className='details-button-containers' rel="noreferrer" target="_blank" href={project && project.fields.website}>VISIT WEBSITE <img id='external-link' src={ExternalLink} alt="website" /></a>
            </div>
            
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetails;