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
            Hi, I'm <span>Evangelos Rigopoulos</span> <br />
            Senior Full-Stack Software Engineer | Forms Domain Expert | Agentic
            AI Engineer — Agile Lead
          </h1>
          <div
            className="header-text-block"
            style={{
              margin: "1.5rem 0",
              lineHeight: "2rem",
              width: "100%",
              maxWidth: "650px",
            }}
          >
            <p style={{ marginBottom: "1rem" }}>
              <strong>Full-Stack Mastery:</strong> Helping build and maintain
              distributed systems using TypeScript (React/NestJS) and AWS
              Serverless (Lambda, S3, RDS). We focus on delivering resilient
              backend logic and high-performance frontend, helping mid-market
              e-commerce businesses (Shopify stores, e-shops) grow their
              audience lists and turn subscribers into customers through
              signup forms, discounts and newsletters.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Agentic AI App Development:</strong> Contributing to the
              creation of autonomous Design Agents and production-grade
              workflows using Python (FastAPI) and LangGraph. Working on the
              agent harness (reusable skills, typed tool interfaces,
              multi-agent orchestration with RAG and HITL), with a main focus
              on evaluation pipelines: golden datasets, LLM-as-a-Judge scoring,
              and regression evals that gate prompt, model and tool changes.
            </p>
            <p>
              <strong>Strategic Impact & Domain Expertise:</strong> Supporting
              the Forms domain as an SME, helping our teams scale list growth
              and sales for mid-market e-commerce businesses. I focus on bridging technical requirements
              with customer needs to solve complex technical challenges.
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
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
