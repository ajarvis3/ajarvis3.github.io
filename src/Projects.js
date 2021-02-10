import {useEffect, useState} from 'react';

import "./Projects.css"

function Project(props) {
    const {name, description} = props;
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="project">
            <a className="project-link" href={"/" + name}>{name}</a>
            <div className="description" onClick={handleClick}>
                {collapsed ? "Expand Description" : description}
            </div>
        </div>
    )
}

function Projects(props) {
    const {header} = props;
    const [projects, setProjects] = useState([]);
    const api = `https://radiant-ravine-76341.herokuapp.com/api/${header}`

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
    }, [api]);

    const projectElems = projects.map((value) => {
        return <Project name={value[0]} description={value[1]} key={value}/>;
    });

    return (
        <div>
            <h3>{header}</h3>
            {projectElems.length > 0 ? projectElems : "Loading..."}
        </div>
    );
}

export default Projects;