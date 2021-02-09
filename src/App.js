import './App.css';
import Projects from "./Projects"
import Future from "./Future"

function AboutMe() {
  return (
    <div>
      <h4>About Me</h4>
      <div id="about">
        <div id="about-text">
          My name's Andrew and I'm currently a senior at
          the University of Rochester.
        </div>
        <img
        id="self-image"
        src={"https://dm2301files.storage.live.com/"
        + "y4mVSsOhb1iS0-q3tUS7ntkpjztkcFwQQ-"
        + "yA9Ff1UoaVRDhhFtrqxscipxJTKOV2uk1xgdx7Hyl4kWrdUE-"
        + "duAVdKqeSwVNmbII6EKGUMtBYYGjJCRimuNgQmhy-"
        + "AjDzEHGSgrfDANkfN0JjOqrI1DOjIazVoXASixp3gBKm_"
        + "aalzWOm4PwXlWDrqRV22HnuGMJ?width=1920&height=1080&cropmode=none"}
        alt="me">
        </img>
      </div>
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
      <Future />
    </div>
  );
}

export default App;
