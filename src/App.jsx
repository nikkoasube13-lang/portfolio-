import { useEffect, useState } from "react";
import "./App.css";

const members = [
  {
    name: "Nikko Asube",
    image: "/image/Nikko.jpg",
    description:
      "A member of 3 IDIOT who enjoys learning, sharing ideas, and working with the team.",
  },
  {
    name: "Justin Sam Cantiga",
    image: "/image/Justin.jpg",
    description:
      "A member of 3 IDIOT who contributes ideas and helps the group complete projects.",
  },
  {
    name: "Sean Lee Plazos",
    image: "/image/Sean.jpg",
    description:
      "A member of 3 IDIOT who enjoys teamwork, creativity, and learning new skills.",
  },
];

const sections = [
  "home",
  "about",
  "members",
  "information",
  "pictures",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (
          element &&
          element.getBoundingClientRect().top <= 150
        ) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <button
            className="logo"
            onClick={() => goTo("home")}
          >
            3 IDIOT
          </button>

          <div className="nav-links">
            {sections.map((section) => (
              <button
                key={section}
                className={
                  activeSection === section
                    ? "active"
                    : ""
                }
                onClick={() => goTo(section)}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1)}
              </button>
            ))}
          </div>

        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="home">
        <div className="home-content">

          <div className="small-title">
            GROUP PORTFOLIO
          </div>

          <p className="welcome">
            WELCOME TO OUR WEBSITE
          </p>

          <h1>
            3 <span>IDIOT</span>
          </h1>

          <p className="home-text">
            We are three students working together,
            sharing ideas, creativity, skills, and
            experiences.
          </p>

          <div className="home-buttons">

            <button
              className="blue-button"
              onClick={() => goTo("members")}
            >
              Meet Our Team
            </button>

            <button
              className="white-button"
              onClick={() => goTo("about")}
            >
              Learn More
            </button>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="title">
          <p>ABOUT OUR GROUP</p>

          <h2>About 3 IDIOT</h2>

          <div className="title-line"></div>
        </div>

        <div className="about-box">

          <div className="about-number">
            3
          </div>

          <div>

            <h3>Our Organization</h3>

            <p>
              We are the group called
              <b> 3 IDIOT</b>. Our group is
              composed of three students who
              work together on school activities
              and projects.
            </p>

            <p>
              We share our ideas, divide our
              tasks, help each other, and learn
              from our experiences.
            </p>

          </div>

        </div>
      </section>

      {/* MEMBERS */}
      <section
        id="members"
        className="section light-section"
      >

        <div className="title">

          <p>OUR TEAM</p>

          <h2>Group Members</h2>

          <div className="title-line"></div>

        </div>

        <div className="members">

          {members.map((member) => (

            <div
              className="member-card"
              key={member.name}
            >

              <div className="member-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              <div className="member-info">

                <span>
                  GROUP MEMBER
                </span>

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.description}
                </p>

                <button
                  onClick={() =>
                    setSelectedMember(member)
                  }
                >
                  View Profile
                </button>

              </div>

            </div>

          ))}

        </div>
      </section>

      {/* INFORMATION */}
      <section
        id="information"
        className="section"
      >

        <div className="title">

          <p>OUR GROUP</p>

          <h2>Information</h2>

          <div className="title-line"></div>

        </div>

        <div className="information">

          <div className="info-card">

            <strong>01</strong>

            <h3>Our Goal</h3>

            <p>
              Our goal is to successfully
              complete our school projects
              while learning new skills.
            </p>

          </div>

          <div className="info-card">

            <strong>02</strong>

            <h3>Teamwork</h3>

            <p>
              We communicate, share tasks,
              exchange ideas, and help one
              another.
            </p>

          </div>

          <div className="info-card">

            <strong>03</strong>

            <h3>Creativity</h3>

            <p>
              We use creativity to make our
              projects interesting and useful.
            </p>

          </div>

        </div>
      </section>

      {/* PICTURES */}
      <section
        id="pictures"
        className="section light-section"
      >

        <div className="title">

          <p>OUR MEMBERS</p>

          <h2>Pictures</h2>

          <div className="title-line"></div>

        </div>

        <div className="gallery">

          {members.map((member) => (

            <div
              className="gallery-card"
              key={member.name}
            >

              <img
                src={member.image}
                alt={member.name}
              />

              <div className="gallery-name">
                {member.name}
              </div>

            </div>

          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer>

        <h2>3 IDIOT</h2>

        <p>
          Teamwork • Creativity • Learning
        </p>

        <button onClick={() => goTo("home")}>
          Back to Home
        </button>

        <small>
          © 2026 3 IDIOT. All Rights Reserved.
        </small>

      </footer>

      {/* PROFILE POPUP */}
      {selectedMember && (

        <div
          className="popup-background"
          onClick={() =>
            setSelectedMember(null)
          }
        >

          <div
            className="popup"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setSelectedMember(null)
              }
            >
              ×
            </button>

            <img
              src={selectedMember.image}
              alt={selectedMember.name}
            />

            <span>
              GROUP MEMBER
            </span>

            <h2>
              {selectedMember.name}
            </h2>

            <p>
              {selectedMember.description}
            </p>

            <button
              className="close-profile"
              onClick={() =>
                setSelectedMember(null)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;