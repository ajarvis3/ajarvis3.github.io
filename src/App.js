import './App.css';
import Projects from "./Projects"
import AboutMe from "./About"

function App() {
  return (
    <div className="App">
      <h2>
        Andrew Jarvis
      </h2>
      <Projects header="Projects"/>
      <AboutMe />
      <Projects header="Future" />
    </div>
  );
}

export default App;
