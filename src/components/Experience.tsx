const Experience = () => {
  return (
    <section className="container active" id="experience">
      <div className="main-title">
        <h2 style={{ marginBottom: '30px' }}>
          My <span>Experience</span><span className="bg-text">my jobs</span>
        </h2>
      </div>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Aug 2024 - Present</p>
          <h5>
            Senior Software Engineer | Forms Domain Expert<span> - Intuit Mailchimp - London, UK (Hybrid)</span>
          </h5>
          <div>
            <ul>
              <li><strong>Forms Domain Leadership:</strong> Serving as the primary Subject Matter Expert (SME) for the Forms domain, providing strategic technical input to scale growth for mid-market businesses.</li>
              <li><strong>Agentic AI Development:</strong> Leading the implementation of autonomous Design Agents for Forms using FastAPI and LLMs to automate high-conversion UI/UX workflows.</li>
              <li><strong>AI Evaluation Pipelines:</strong> Engineering LLM-as-a-Judge frameworks to automate quality gatekeeping, ensuring generated assets meet accessibility and brand standards.</li>
              <li><strong>Strategic Support:</strong> Partnering directly with Customer Success teams as a domain expert to resolve high-complexity technical challenges for global enterprise clients.</li>
              <li><strong>Acquisition Integration:</strong> Successfully managed the technical onboarding and system integration during the transition from Amped to the Intuit ecosystem.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Apr 2023 - Aug 2024</p>
          <h5>
            Software Engineer | Agile Coach<span> - Amped</span>
          </h5>
          <div>
            <ul>
              <li>Implemented new frontend features using JavaScript, TypeScript, HTML, and CSS.</li>
              <li>Maintained and debugged existing codebase with unit testing using Jest and Storybook.</li>
              <li>Improved technical documentation for the codebase and conducted QA testing prior to major releases.</li>
              <li><strong>Agile Coaching:</strong> Supported a team of engineers by improving internal processes, identifying blockers, and reducing waste to ensure software excellence.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Jul 2021 - Apr 2023</p>
          <h5>
            Scrum Master | Software Engineer<span> - Citrix</span>
          </h5>
          <div>
            <ul>
              <li><strong>Scrum Master:</strong> Coached two cross-functional teams (Platform/SRE) for the CITRIX-ITM product, managing 10B+ real-user measurements across 500+ global servers.</li>
              <li>Facilitated all Scrum and SAFe events, ensuring 100% of user stories were groomed and estimated to meet sprint goals.</li>
              <li><strong>Software Engineer:</strong> Developed UI and backend features using JavaScript, MySQL, and HTML.</li>
              <li><strong>Recognition:</strong> Received the "Impact Award" for piloting foundational "Scrum for Teams" training across the entire organization.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2001 - 2021</p>
          <h5>
            Previous Experience (Sales & Retail Management)<span> - Various (Lidl Hellas, Coca Cola 3E, McDonald's)</span>
          </h5>
          <div>
            <ul>
              <li>Extensive background in Sales and Retail Store Management for major brands including Lidl Hellas, Coca Cola 3E, and McDonald's.</li>
              <li>Expertise in Resource Management (People, Products, Facilities, and Budget) and high-level Customer Experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
