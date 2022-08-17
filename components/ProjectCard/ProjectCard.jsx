import React from 'react';
import classes from "./ProjectCard.module.sass";
import {AiFillGithub, AiFillApi} from "react-icons/ai";
import {FcServices, FcOk} from "react-icons/fc";


const ProjectCard = ({img, logoIcon, title, details, projectInfo, github, icons, closed, projectLink}) => {
    return (
        <div className={classes.projectCard}>
            <div className={classes.projectCard__logo}>
                {img ? <img src={img} alt="projectLogo"/> : logoIcon}
            </div>
            <div className={classes.projectCard__details}>
                <h1> {projectLink ? <a href={projectLink}>{title}</a> : title} {closed ? <FcOk/> : <FcServices/>}</h1>
                <h3>{details}</h3>
                <h4>{projectInfo}</h4>
                <div className={classes.projectCard__details__icons}>
                    <a href={github}><AiFillGithub size={60} color={'#5051f9'}/></a>
                    <div className={classes.projectCard__details__icons__stack}>
                        {icons}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;