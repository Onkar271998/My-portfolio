import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import photo from "../../Assets/unsplash.png"
import ProjectCorousel from "./ProjectCard/ProjectCorosel";
function Projects() {
  return (
    <>
    

      <div className="ProjectWrapper" id="projects" style={{ "margin-top": "5rem" }}>
        <div className="Container">
      
          <div className="SectionTitle" style={{ "margin-bottom": "0.5rem" }}>Projects</div>
           

          
          <ProjectCard />

         
        </div>
      </div>
    </>
  );
}

export default Projects;
