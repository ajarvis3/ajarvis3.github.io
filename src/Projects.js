import {useState} from 'react';

import "./Projects.css"

function Project(props) {
    const {name} = props;
    const [collapsed, setCollapsed] = useState(true);

    const someDesc = (<div>
        Placeholder until I decide how I want to store descriptions
    </div>);

    const handleClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="project">
            <a className="project-link" href={"/" + name}>{name}</a>
            <div className="description" onClick={handleClick}>
                Toggle Description
            </div>
            {!collapsed && someDesc}
        </div>
    )
}

function Projects() {
    const projectNames = ["React-Chat", "congress"];
    const projects = projectNames.map((value) => {
        return <Project name={value} key={value}/>;
    });

    return (
        <div>
            <h4>Projects</h4>
            {projects}
        </div>
    );
}

export default Projects;