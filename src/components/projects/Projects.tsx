import { useState } from 'react';
import { Element } from 'react-scroll';
import ProjectElement from './ProjectElement';
import styles from './Projects.module.scss';
import particleFunGif from '../../assets/gifTry6.gif';
import weatherGif from '../../assets/gifWeatherTry3.gif';

const Projects = () => {
    const projectProps = [
        {
            projectLink: "https://github.com/hexaquarks/chess_game",
            projectTitle: "Chess Game",
            projectDescription: `
                Fully functional chess game with respect to chess rules
                with additional features such as : Move list traversal, 
                menu options, mechanical utilities, N-Ary tree data 
                struture for move tree generation, and more.`,
            projectPlaceholder: "../../assets/knightIcon.png"
        },
        {
            projectLink: "https://github.com/hexaquarks/Particle_Fun",
            projectTitle: "Particle Simulation",
            projectDescription: `
                The program simulates gravitational force, 
                electrostatic force and allows for elastic collisions.
                The dynamic quantity of particles can be arranged in shapes 
                such as: circle, square, diamond, spiral, loose spiral, 
                sunflower spiral. Finally, the shapes can then also be 
                divided and rotated.`,
                projectPlaceholder: "../../assets/atomIcon.png"
        },
        {
            projectLink: "https://hexaquarks.github.io/Weather_App/#/",
            projectTitle: "Weather Application",
            projectDescription: `
                The program fetches data from OpenWweatherMap API API and
                displays the daily information overview and detailed 
                information. Further, a 24 hours and 7 days forecast for 
                temperature and precipitation, is displayed in a carousel 
                container along with bar graphs respectively.`,
            projectPlaceholder: "../../assets/weatherIcon.png"
        }
    ]
    
    return (
        <Element id="ProjectsScrollSection" name="ProjectsScrollSection">
            <div className={styles.container}>
                {projectProps.map((value : any, index : number) => (
                    <ProjectElement link={value.projectLink}
                                    title={value.projectTitle}
                                    description={value.projectDescription}
                                    iconPath={value.projectPlaceholder}
                                    index={index}
                                    key={value} />
                ))}
            </div>
        </Element>
    );
}

export default Projects;