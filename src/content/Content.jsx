import menuState from "../recoil-state/MenuState";
import { useRecoilValue } from "recoil";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { projects, future } from "../data";

const Content = (props) => {
   const { className } = props;
   const contentState = useRecoilValue(menuState);
   const component =
      contentState === 0 ? (
         <AboutMe />
      ) : contentState === 1 ? (
         <Projects projects={projects} />
      ) : (
         <Projects projects={future} />
      );

   return <main className={className}>{component}</main>;
};

export default Content;
