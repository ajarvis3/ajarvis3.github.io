import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: String,
    description: String
}, {collection: "projects"});

const Projects = new mongoose.model("Projects", projectSchema);

export default Projects;
