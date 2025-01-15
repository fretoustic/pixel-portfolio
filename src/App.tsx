import { useState, useEffect } from "react";
import "./App.css";
import arrowImage from "/Users/harshs-blrm25/harsh-ev/portfolio/src/assets/right-angle.png";
import Typewriter from "typewriter-effect";
import uni from "/Users/harshs-blrm25/harsh-ev/portfolio/src/assets/bank.png";
import skills from "/Users/harshs-blrm25/harsh-ev/portfolio/src/assets/sheet.png";
import office from "/Users/harshs-blrm25/harsh-ev/portfolio/src/assets/suitcase.png";
const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollLock, setScrollLock] = useState(false); // Prevent multiple scrolls during transitions

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (scrollLock) return; // Ignore scroll if a transition is ongoing

      if (event.deltaY > 0 && currentPage < 3) {
        // Scroll down
        setCurrentPage((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentPage > 0) {
        // Scroll up
        setCurrentPage((prev) => prev - 1);
      }

      // Lock scrolling for 1 second (or the duration of the transition)
      setScrollLock(true);
      setTimeout(() => setScrollLock(false), 2000);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentPage, scrollLock]);

  const pages = [
    <div className="container page-one" key="page-1">
      <div className="container">
        <div className="center">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi! I am Harsh Preet Singh.")
                  .start()
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I am a software")
                  .start()
                  .deleteChars(8)
                  .typeString("(aspiring) software engineer.")
                  .start();
              }}
            />
          </h1>
        </div>
      </div>
      <div className="bottom-div">
        <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(8000)
                .typeString("scroll to know more about me!")
                .start();
            }}
          />
        </h2>
        <img
          src={arrowImage}
          alt="Scroll down arrow"
          className="arrow-image"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        />
      </div>
    </div>,
    <div className="container page-two" key="page-2">
      <div className="center2">
        <h1>About Me</h1>
        <h2>
          I am currently working at EagleView as a Software Engineer intern.
        </h2>
        <h2>
          Although, I have background and projects relateed to data science and
          natural language processing too!
        </h2>
      </div>
      <div className="bottom-div-2">
        <h2>More about me!</h2>
        <img
          src={arrowImage}
          alt="Scroll down arrow"
          className="arrow-image"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        />
      </div>
    </div>,
    <div className="container1" key="page-3">
      <div className="box">
        <img src={uni} alt="Image 1" className="image" />
        <p className="text1">Studied</p>
        <p className="text">Bachelors in technology(CSE)</p>
        <p className="text1">at</p>
        <p className="text">KIIT University</p>
      </div>
      <div className="box">
        <img src={skills} alt="Image 2" className="image" />
        <p className="text">I can work with</p>
        <p className="text1">Go lang, python </p>
        <p className="text1">React(Just getting started), Flutter</p>
        <p className="text1">C/C++,Java,JavaScript</p>
        <p className="text1">AWS</p>
        <p className="text1">Sonarqube,Jenkins,Git</p>
      </div>
      <div className="box">
        <img src={office} alt="Image 3" className="image" />

        <p className="text">I have worked with</p>
        <p className="text1">CodeBeats, Wolters Kluwer, EagleView </p>
      </div>
      <div className="bottom-div-3">
        <h2>Let's talk!</h2>
        <img
          src={arrowImage}
          alt="Scroll down arrow"
          className="arrow-image"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        />
      </div>
    </div>,
    <div className="container page-three" key="page-4">
      <div className="center3">
        <h1>Contact</h1>
        <h2>Email: harshpreetsingh03@hotmail.com</h2>
        <h2>
          LinkedIn:
          <a href="https://in.linkedin.com/in/harsh-preet-singh-87334b263">
            My profile!
          </a>
        </h2>
      </div>
    </div>,
  ];

  return (
    <div className="app">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`page-wrapper ${
            currentPage === index ? "active" : "inactive"
          }`}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default App;
