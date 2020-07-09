import React from "react";
import CSS from "../App.css";

function Home() {
  return (
    <div className="About">
      <main className="container-fluid m-5 bg-light">
        <header className="text-info">
          <h1>About Me</h1>
        </header>
        <div className="row  mb-5">
          <div className="col-md-4">
            <img className="kateimg" alt="kate" src="/img/katebw.jpg" />
          </div>
          <div className="col-md-8">
            I was born and raised in Colorado, which is where I continue to
            reside, after a few stints in Maui, Calgary, and Vail. I originally
            went to college for hospitality, focusing on a career in Event Sales
            and Services. I have a recently found a new passion in web
            development with a brand new set of skills as a full-stack
            developer. I am highly motivated through my relentless drive and I
            love the satisfaction of conquering a difficult task. Please check
            out my project portfolio for recent applications I have been working
            on. Reach out directly for more information!
            <br />
            <div className="row">
              <div className="col-md-12">
                Technical Skills:
                <br />
                Computer Science applied to JavaScript: • Design Patterns •
                Algorithms
                <br />
                Browser Based Technologies • HTML • CSS • JavaScript • jQuery •
                Responsive Design • Bootstrap • Handlebars • Firebase • Cookies,
                Local Storage • React.js
                <br />
                Deployment • Heroku • Git
                <br />
                Locally Popular MVC Framework • C#/ASP.NET • Python • Django •
                PHP • Laravel
                <br />
                Databases • MySQL • MongoDB Server-Side Development • Express •
                Security and Session Storage • User Authentication • MERN Stack
                (MongoDB, Express.js, React.js, Node.js)
                <br />
                Quality Assurance • Writing Tests
                <br />
                Internet Marketing • Semantic HTML
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <i className="fab fa-linkedin"></i>
              LinkedIn Profile
              <a
                className=" text-info mr-0"
                href="https://www.linkedin.com/in/kate-meersman-2a66a2155/"
              ></a>
            </div>
            <div className="col-md-6">
              <i className="fab fa-github"></i>
              Github Profile
              <a
                className=" text-info mr-0"
                href="https://github.com/kmeersman624s"
              ></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
