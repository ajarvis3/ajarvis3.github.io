const projects = [
   {
      name: "React-Chat",
      repository: "github.com/ajarvis/react-chat",
      site: "ajarvis3.github.io/react-chat",
      description:
         "A simple chat application implemented using SignalR and React. The backend is hosted on Azure, this isn't as reliable as I'd like and expect, but it seems that it only takes ~30 seconds to start the application if it has stopped running.",
   },
   {
      name: "Senate Scraper",
      repository: "github.com/ajarvis/congress",
      site: "ajarvis3.github.io/congress",
      description:
         "An application to integrate some different concepts. I created a web scraper (that I could not get to run on Heroku :( ) to get information on Senators from senate.gov and stored that in a MongoDB database. The information can then be retrieved by a website using a Spring Boot API that is hosted on Heroku (though it currently takes a bit of time to retrieve).",
   },
];

export default projects;
