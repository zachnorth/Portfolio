import React, { Component } from 'react';
import './App.css';
import Project from './Project/Project';
import Information from './Information/Information';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home'
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import About from './About/About';



class App extends Component {

  state = {
    data: [
      {
        title: "Take A Number",
        href: "https://github.com/zachnorth/takeanumber_v1",
        description: "An Android/iOS application that simulates a queue, allowing companies to maintain an organized line for entrance to their stores without requiring customers to physically stand in line. Inspired by the COVID-19 crises with the goal of streamlining the implementation of social distancing practices and compliance with local health ordinances.",
        sdk: "Flutter / Dart",
        backend: "Firebase",
      },
      {
        title: "Urine Luck",
        href: "https://github.com/zachnorth/BathroomFinder",
        description: "A web application that allows users to find the closest bathroom within a specified radius. Bathrooms can be rated on cleanliness and whether or not you have to pay to use them.",
        sdk: "HTML5, JavaScript, PHP, CSS",
        backend: "MySQL",
      },
      {
        title: "Simply List",
        href: "https://github.com/zachnorth/Grocery-List-Flutter",
        description: "An Android/iOS application that allows users the ability to create a grocery list accessible from anywhere.",
        sdk: "Flutter / Dart",
        backend: "Firebase",
      },
      {
        title: "Portfolio",
        href: "https://github.com/zachnorth/Portfolio",
        description: "A portfolio website I created for myself using React and Node.js hosted on AWS",
        sdk: "React and Node.js",
        backend: "N/A",
      },
      {
        title: "Weather App",
        href: "https://github.com/zachnorth/WeatherApp",
        description: "Web application that allows users to lookup weather data for a specified location. This app uses the OpenWeatherMap API for weather data and the Google Maps Places API to display the location of the users search.",
        sdk: "HTML5, JavaScript, PHP, CSS",
        backend: "MySQL",
      },
      {
        title: "Asteroids",
        href: "https://github.com/zachnorth/MyOwnAsteroids",
        description: "Custom version of the popular game Asteroids developed using Unity2D with C#.",
        sdk: "Unity2D with C#",
        backend: "N/A"
      },
      {
        title: "Pong",
        href: "https://github.com/zachnorth/Wacky_Pong_Final",
        description: "Custom version of the popular game Pong developed using Unity2D with C#.",
        sdk: "Unity2D with C#",
        backend: "N/A"
      },
      {
        title: "MongoDB Web Page",
        href: "https://github.com/zachnorth/ATA-Application",
        description: "This is a web page I developed for a job application that uses JavaScript, HTML, CSS, and Nodejs to access a MongoDB database and display information in an efficient and neat manner. Must ask permission to view this repository.",
        sdk: "JavaScript, HTML, CSS, Node.JS, Express",
        backend: "MongoDB"
      }
    ],
    information: {
      myName: 'Zachary North',
      email: 'Zachary.North@Colorado.edu',
      github: 'https://github.com/zachnorth',
      linkedIn: 'https://www.linkedin.com/in/zachary-n-3b6a68155/',
      phoneNumber: '(505) 917-7902',
    },
    homeInfo: {
      name: 'Zachary North',
      information: 'About Me',
      location: 'Louisville, CO'
    },
    resume: {
      summary: "Self-motivated recent graduate with a Bachelor of Arts in Computer Science seeks a programming position that will leverage my education, experience developing web applications and Android/iOS applications, and challenge me to learn new skills and allow me to be part of a team working towards organization objectives.",
      school: "Universtiy of Colorado Boulder",
      school1: "Front Range Community College",
      degree: "B.A. Computer Science (2019)",
      degree1: "(2017)",
      location: "Boulder, Colorado",
      location1: "Westminster, Colorado",
      additionalExperience: {
        subject1: "Flutter / Firebase",
        data1_1: "Full-Stack Android/iOS application development with Flutter using Firebase as a backend.",
        data1_2: "Transitioning a web application originally written in HTML, JavaScript, PHP, and MySQL into an Android/iOS Flutter application.",
        
        subject2: "Web Application Development",
        data2_1: "Full-Stack web application development using HTML, JavaScript, CSS, PHP, and MySQL.",
        data2_2: "Full-Stack web application development using HTML, JavaScript, CSS, Node.js, and MongoDB.",
        data2_3: "Front-End web application development using React, HTML, JavaScript, and CSS.",

        subject3: "Game Development",
        data3_1: "Developed a custom version of Pong using Unity with C#.",
        data3_2: "Developed a custom version of Asteroids using Unity with C#.",
        data3_3: "Developing an Android/iOS application that allows users to host a deck of cards and deals hands to other player's phones.",
      },
      workExperience: {
        job5: "Costco Wholesale",
        date5: "(2014-2015)",
        description5: "Front-End Associate",
        job4: "Whole Foods Market",
        date4: "(2015-2016)",
        description4: "Seafood Team Member",
        job3: "Whole Foods Market",
        date3: "(2017-2018)",
        description3: "Cashier",
        job2: "University of Colorado Boulder Career Development Office",
        date2: "(2018-2019)",
        description2: "Data Entry Clerk",
        job1: "Cost Plus World Market",
        date1: "(2019-2020)",
        description1: "Morning Stock Associate",
      },
      skills: "JavaScript, HTML, CSS, Python, C#, Scala, Flutter/Dart, Android Studio, React, Node.js, MySQL, MongoDB, PHP, npm, Windows, Agile Software Development, Data Science, Numerical Computation, ",
    },
    classes: {
        intro: "Introduction to Computer Science",
        dataStructures: "Computer Science II: Data Structures",
        discreteStructures: "Discrete Structures",
        computerSystems: "Computer Systems",
        softwareDevelopment: "Software Development Methods and Tools",
        dataScience: "Intro to Data Science",
        algorithms: "Algorithms",
        numericalComp: "Numerical Computation 1",
        gameDev: "Game Development using Unity2D and C#",
        ppl: "Principles of Programming Languages",
        cyberSecurity: "Intro to Cybersecurity",
        calc1: "Calculus 1",
        calc2: "Calculus 2",
        discrete: "Discrete Mathematics",
        linearAlgebra: "Linear Algebra with Computer Science Applications",
        precalc: "Pre-Calculus",
        algebra: "College Algebra",
        biology: "General Biology 1",
        physics1: "General Physics 1",
        physics2: "General Physics 2",
        micro: "Principles of Microeconomics",
        macro: "Principless of Macroeconomics",
        business: "Intro to Business",
        philosophy: "Intro to Philosophy",
        psych: "General Psychology 1",
        govt: "American Presidential and Executive Branch, Government",
        hist: "Intro to Chinese History 1644-2000",
        engl: "Modern and Contemporary Literature for Non-Majors",
        scan: "Scandanavian Folk Narratives",
        greekSculpture: "Ancient Greek Sculpture",
        hist1: "History of Science, Ancients to Newton",
        physics3: "Physics, Energy and the Environment",
        sociology: "Social Inequalities in Health",
    }

  }

  render () {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
                <Information 
                  email={this.state.information.email}
                  myName={this.state.information.myName}
                  github={this.state.information.github}/>

                <Home />
              
            </Route>
            <Route path="/Projects" >
              <Information 
                  email={this.state.information.email}
                  myName={this.state.information.myName}
                  github={this.state.information.github}/>
              <div className="allProjects">
                  <Project
                    title={this.state.data[0].title} 
                    href={this.state.data[0].href} 
                    description={this.state.data[0].description}
                    sdk={this.state.data[0].sdk}
                    backend={this.state.data[0].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[1].title} 
                    href={this.state.data[1].href} 
                    description={this.state.data[1].description}
                    sdk={this.state.data[1].sdk}
                    backend={this.state.data[1].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[2].title} 
                    href={this.state.data[2].href} 
                    description={this.state.data[2].description}
                    sdk={this.state.data[2].sdk}
                    backend={this.state.data[2].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[3].title} 
                    href={this.state.data[3].href} 
                    description={this.state.data[3].description}
                    sdk={this.state.data[3].sdk}
                    backend={this.state.data[3].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[4].title} 
                    href={this.state.data[4].href} 
                    description={this.state.data[4].description}
                    sdk={this.state.data[4].sdk}
                    backend={this.state.data[4].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[5].title} 
                    href={this.state.data[5].href} 
                    description={this.state.data[5].description}
                    sdk={this.state.data[5].sdk}
                    backend={this.state.data[5].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[6].title} 
                    href={this.state.data[6].href} 
                    description={this.state.data[6].description}
                    sdk={this.state.data[6].sdk}
                    backend={this.state.data[6].backend}>
                  </Project>

                  <Project 
                    title={this.state.data[7].title} 
                    href={this.state.data[7].href} 
                    description={this.state.data[7].description}
                    sdk={this.state.data[7].sdk}
                    backend={this.state.data[7].backend}>
                  </Project>
                </div>
            </Route>
            <Route path="/About" >
              <Information 
                  email={this.state.information.email}
                  myName={this.state.information.myName}
                  github={this.state.information.github}/>
              
              <About>

              </About>
            </Route>
            <Route path="/Resume" >
              <Information 
                  email={this.state.information.email}
                  myName={this.state.information.myName}
                  github={this.state.information.github}/>

              <Resume 
                classes={this.state.classes}
                summary={this.state.resume.summary}

                school={this.state.resume.school}
                location={this.state.resume.location}
                degree={this.state.resume.degree}
                school1={this.state.resume.school1}
                location1={this.state.resume.location1}
                degree1={this.state.resume.degree1} 

                app1title={this.state.data[0].title}
                app1desc={this.state.data[0].description}
                app2title={this.state.data[1].title}
                app2desc={this.state.data[1].description}
                app3title={this.state.data[2].title}
                app3desc={this.state.data[2].description}

                subject1={this.state.resume.additionalExperience.subject1}
                data1_1={this.state.resume.additionalExperience.data1_1}
                data1_2={this.state.resume.additionalExperience.data1_2}

                subject2={this.state.resume.additionalExperience.subject2}
                data2_1={this.state.resume.additionalExperience.data2_1}
                data2_2={this.state.resume.additionalExperience.data2_2}
                data2_3={this.state.resume.additionalExperience.data2_3}

                subject3={this.state.resume.additionalExperience.subject3}
                data3_1={this.state.resume.additionalExperience.data3_1}
                data3_2={this.state.resume.additionalExperience.data3_2}
                data3_3={this.state.resume.additionalExperience.data3_3}
                
                job1={this.state.resume.workExperience.job1}
                date1={this.state.resume.workExperience.date1}
                description1={this.state.resume.workExperience.description1}
                job2={this.state.resume.workExperience.job2}
                date2={this.state.resume.workExperience.date2}
                description2={this.state.resume.workExperience.description2}
                job3={this.state.resume.workExperience.job3}
                date3={this.state.resume.workExperience.date3}
                description3={this.state.resume.workExperience.description3}
                job4={this.state.resume.workExperience.job4}
                date4={this.state.resume.workExperience.date4}
                description4={this.state.resume.workExperience.description4}
                job5={this.state.resume.workExperience.job5}
                date5={this.state.resume.workExperience.date5}
                description5={this.state.resume.workExperience.description5}
                
                skills={this.state.resume.skills}>

              </Resume>

            </Route>
            <Route path="/Contact" >
              <Information 
                  email={this.state.information.email}
                  myName={this.state.information.myName}
                  github={this.state.information.github}/>
              
              <Contact
                email={this.state.information.email}
                phoneNumber={this.state.information.phoneNumber}
                linkedIn={this.state.information.linkedIn}
                gitHub={this.state.information.github}>
              </Contact>

            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
