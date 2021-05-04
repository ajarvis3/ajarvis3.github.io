import {
   CardActions,
   Link,
   Typography,
   CardContent,
   Button,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { useState } from "react";

const Project = (props) => {
   const { name, repository, site, description } = props;
   const [expanded, setExpanded] = useState(false);

   const toggleExpanded = () => {
      setExpanded(!expanded);
   };

   return (
      <Card variant="outlined">
         <CardContent>
            <Typography variant="h5">{name}</Typography>
            {repository && (
               <CardActions>
                  <Link href={repository}>Repository</Link>
               </CardActions>
            )}
            {site && (
               <CardActions>
                  <Link href={site}>Website</Link>
               </CardActions>
            )}
            {!expanded ? (
               <CardActions>
                  <Button size="small" onClick={toggleExpanded}>
                     Learn More
                  </Button>
               </CardActions>
            ) : (
               <CardContent>
                  <Typography paragraph>{description}</Typography>
                  <Button size="small" onClick={toggleExpanded}>
                     Minimize
                  </Button>
               </CardContent>
            )}
         </CardContent>
      </Card>
   );
};

const Projects = (props) => {
   const { projects } = props;
   return projects.map((project) => {
      return (
         <Project
            key={project.name}
            name={project.name}
            repository={project.repository}
            site={project.site}
            description={project.description}
         />
      );
   });
};

export default Projects;
