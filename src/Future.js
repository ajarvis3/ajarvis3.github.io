import {useState} from 'react';

import "./Future.css"

function Project(props) {
    const {name} = props;
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="project">
            {name}
        </div>
    )
}

function Future() {
    const prjs = ["Whiteboard",
                "Scheduling"];

    const projects = prjs.map((value) => {
        return <Project name={value} key={value} />;
    });

    return (
        <div>
            <h4>Future</h4>
            {projects}
        </div>
    )
}

export default Future;