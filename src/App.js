import './App.css';
import Projects from "./Projects"
import Future from "./Future"

function AboutMe() {
  return (
    <div>
      <h4>About Me</h4>
      <div id="about">
        <div id="about-text" className="about-item">
          <p>
            My name's Andrew and I'm currently a senior at
            the University of Rochester.
          </p>
          <p>
            Whenever I'm writing about myself, I'm tempted to
            start with: "In the beginning, I was born."
          </p>
          <p>
            In the beginning, I was born. It's pretty much
            all been downhill from there.
          </p>
          <p>
            In my freetime, I like to bake. I kinda lost the memo
            about a lot of experimentation, so I usually break out
            the hits of chocolate chip cookies and brownies with
            apple cinnamon muffins and oatmeal raisin cookies
            mixed in. I make the recipes my own by adding too
            much vanilla.
          </p>
          <p>
            I also enjoy the Netflix show Lucifer. I look forward
            to the day that season 5B is released (if that day does
            in fact come). 
          </p>
          <p>
            My greatest desire (at the time of writing) is to work
            on a project and know someone who uses it so I can say:
            "I made that!"
          </p>
        </div>
        <div id="self-image-container" className="about-item">
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
          <label>A picture of myself at a point in time</label>
        </div>
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
