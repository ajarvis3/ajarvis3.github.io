import "./Projects.css"

function Project(props) {
    const {name} = props;

    return (
        <div>
            <a className="project-link" href={"/" + name}>{name}</a>
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
            {projects}
        </div>
    );
}

export default Projects;