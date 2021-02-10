import {useEffect, useState} from 'react';

import "./Projects.css"

function Project(props) {
    const {name, description} = props;
    const [collapsed, setCollapsed] = useState(true);

    const someDesc = (<p>
        {description}
    </p>);

    const handleClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <a className="project-link" href={"/" + name}>{name}</a>
            <div className="description" onClick={handleClick}>
                Toggle Description
            </div>
            {!collapsed && someDesc}
        </div>
    )
}

function Projects() {
    const [projects, setProjects] = useState([]);
    const api = "https://radiant-ravine-76341.herokuapp.com/api/projects";

    useEffect(() => {
        fetch(api).then((value) => {
            return value.json();
        }, () => {
            console.log("failed to fetch");
        }).then((value) => {
            if (value) {
                setProjects(value);
            }
        });
    }, []);

    const projectElems = projects.map((value) => {
        return <Project name={value[0]} description={value[1]} key={value}/>;
    });

    return (
        <div>
            <h4>Projects</h4>
            {projectElems.length > 0 ? projectElems : "Loading..."}
        </div>
    );
}

export default Projects;