import "./About.css"

function AboutMe() {
    return (
        <div>
        <h3>About Me</h3>
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
            src={"https://dm2301files.storage.live.com/y4mOQ4kpH0t2-F-JV026l7uVQTdh7Z16KvtmTLBkgO1hLCpC8LMCdMVpDpY5UXAjW5bdLf8F92mtYGUWJFMCVkhyIiTcXCaUF4MCMxPpiM4TXT6NBbh7gPxsl2Q057enyzk254urnfKRJVlt368yC0az8zPj1n7zWxmBUn9wGcfKVKINXoldF3G46dBHbjiVyUh?width=720&height=777&cropmode=none"}
            alt="me">
            </img>
            <label>A picture of myself at a point in time</label>
            </div>
        </div>
        </div>
    )
}
  
export default AboutMe;