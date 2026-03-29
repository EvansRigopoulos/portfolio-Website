const About = () => {
  return (
    <section className="container about active" id="about">
      <div className="main-title">
        <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Information about me</h4>
          <p>
            <strong>Experienced Senior Software Engineer and Certified Scrum Master (CSM)</strong> dedicated to engineering excellence and team self-organization. Expert in implementing resilient, distributed systems using TypeScript (React/Nest.js) and AWS Serverless (Lambda, S3, RDS/PostgreSQL).
          </p>
          <p>
            Currently serving as a <strong>Senior Software Engineer</strong> and <strong>Forms Domain Expert</strong> at <strong>Intuit Mailchimp</strong> in London. I actively contribute to multiple areas of the application, engineering robust solutions across numerous microservices to bridge the gap between complex backend constraints and seamless frontend user experiences. Additionally, I am contributing to the development of an autonomous <strong>Design Agent</strong> leveraging Python (FastAPI) and LLMs to revolutionize our form creation and design workflows.
          </p>
          <div className="btn-con">
            <a
              href="https://drive.google.com/drive/folders/1_4UItZciFPiwSWpGUT8MmkOjN_v6m7lR"
              className="main-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </a>
          </div>
        </div>
        <div className="right-about">
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">1</p>
              <p className="small-text">Startup Acquisition & Transition Support</p>
            </div>
          </div>

          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">1</p>
              <p className="small-text">Impact Award for Agile/Scrum Curriculum & Training (TPM Citrix)</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">3</p>
              <p className="small-text">Agile Teams Supported as Coach</p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">SME</p>
              <p className="small-text">B2B Customer Support & Domain Expertise</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stats-title">Expertise</h4>
        <div className="progress-bars">
          <div className="progress-bar">
            <p className="prog-title">Frontend (React, TypeScript)</p>
            <div className="progress-con">
              <p className="prog-text">95%</p>
              <div className="progress">
                <span className="js"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">Backend (Nest.js, FastAPI, PHP)</p>
            <div className="progress-con">
              <p className="prog-text">90%</p>
              <div className="progress">
                <span className="C#-NET"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">AI & Agents (RAG, LLMs)</p>
            <div className="progress-con">
              <p className="prog-text">95%</p>
              <div className="progress">
                <span className="Agile-Scrum-SAFe"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">Cloud & Data (AWS, PostgreSQL)</p>
            <div className="progress-con">
              <p className="prog-text">85%</p>
              <div className="progress">
                <span className="MySQL"></span>
              </div>
            </div>
          </div>
          <div className="progress-bar">
            <p className="prog-title">Leadership (Agile, Scrum, SAFe)</p>
            <div className="progress-con">
              <p className="prog-text">95%</p>
              <div className="progress">
                <span className="Jira-Confluence"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="about-container">
        <div className="left-about">
          <h4 className="stats-title">Skills & Competences</h4>
          <ul>
            <li>Cross-Functional Team Leadership</li>
            <li>AI Product Strategy & Execution</li>
            <li>Mentorship & Domain SME Support</li>
            <li>Agile Coaching & SAFe (CSM Certified)</li>
            <li>
              Personal Interests
              <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Electric Guitar 🎸</li>
                <li>Strategic Board Games 🎲</li>
                <li>Fantasy Literature 🐉</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="about-stats">
          <h4 className="stats-title">Education & Certifications</h4>
          <div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-university"></i>
                </div>
                <p className="tl-duration">Expected 2026</p>
                <h5>Master of Business Administration (MBA)<span> - Hellenic Open University</span></h5>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-university"></i>
                </div>
                <p className="tl-duration">2015 - 2021</p>
                <h5>B.Sc. in Computer Science<span> - Hellenic Open University</span></h5>
                <p>Thesis: Academic Web Portal developed with HTML/CSS/JS and a PHP/MySQL backend.</p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <p className="tl-duration">Active</p>
                <h5>Certified Scrum Master (CSM)<span> - Scrum Alliance</span></h5>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <p className="tl-duration">Active</p>
                <h5>Change Management (ADKAR)<span> - Prosci Certified</span></h5>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <p className="tl-duration">Active</p>
                <h5>Situational Leadership II<span> - Ken Blanchard</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
