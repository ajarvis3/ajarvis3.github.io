import './App.css';
import Projects from "./Projects"

function AboutMe() {
  return (
    <div>
      My name's Andrew and I'm currently a senior at
      the University of Rochester.
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h3>
        Andrew Jarvis
      </h3>
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
