const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="images/hero.jpg" alt="me.jpg" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Evangelos Rigopoulos</span> <br/>
            Senior Full-Stack Engineer | Forms Domain Expert | Agentic AI Specialist
          </h1>
          <div className="header-text-block" style={{ margin: '1.5rem 0', lineHeight: '2rem', width: '100%', maxWidth: '650px' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Full-Stack Mastery:</strong> Implementing resilient, distributed systems using TypeScript (React/NestJS) and AWS Serverless. I bridge deep backend logic with seamless frontend execution to deliver top-notch performance.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>AI & Agentic Engineering:</strong> Diving into production-grade Agentic workflows and a Design Agent for Forms using Python (FastAPI) and LLMs. Focus areas include RAG for brand context, HITL for collaborative design, and LLM-as-a-Judge frameworks.
            </p>
            <p>
              <strong>Strategic Impact:</strong> As a Forms Domain Expert at Intuit Mailchimp, I drive key feature development and provide strategic insights for mid-market business growth while empowering our Customer Success pipelines.
            </p>
          </div>
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
      </div>
    </header>
  );
};

export default Header;
