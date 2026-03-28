const Portfolio = () => {
  return (
    <section className="container active" id="portfolio">
      <div className="main-title">
        <h2>My<span>Portfolio</span><span className="bg-text">my work</span></h2>
      </div>
      <p className="port-text">
        Here is a showcase of my personal and academic projects across various tech stacks.
      </p>
      <div className="portfolios">
        {/* Project 1: AI Chat Architecture */}
        <div className="portfolio-item">
          <div className="image">
            <img src="/images/port1.jpg" alt="AI Chat Architecture" />
          </div>
          <div className="hover-item">
            <h3 style={{ textAlign: "center", padding: "0 1rem" }}>Scalable AI Chat Architecture (Python)</h3>
            <div className="icons">
              <a href="https://github.com/EvansRigopoulos/scalable-ai-chat-architecture" className="icon" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 2: Foodstore (Vercel) */}
        <div className="portfolio-item">
          <div className="image">
            <img src="/images/port2.jpg" alt="Restaurant Live Page" />
          </div>
          <div className="hover-item">
            <h3 style={{ textAlign: "center", padding: "0 1rem" }}>Foodstore Restaurant App (Vercel Live)</h3>
            <div className="icons">
              <a href="https://github.com/EvansRigopoulos/foodstore" className="icon" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3: Current Portfolio */}
        <div className="portfolio-item">
          <div className="image">
            <img src="/images/port3.jpg" alt="Personal Portfolio" />
          </div>
          <div className="hover-item">
            <h3 style={{ textAlign: "center", padding: "0 1rem" }}>Personal React Portfolio (This Site!)</h3>
            <div className="icons">
              <a href="https://github.com/EvansRigopoulos/portfolio-Website" className="icon" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 4: Dissertation */}
        <div className="portfolio-item">
          <div className="image">
            <img src="/images/port4.jpg" alt="University Landing Page" />
          </div>
          <div className="hover-item">
            <h3 style={{ textAlign: "center", padding: "0 1rem" }}>University Landing Page (Dissertation)</h3>
            <div className="icons">
              <a href="https://github.com/EvansRigopoulos/University-Landing-Page" className="icon" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Project 5: Django Rest API (GitLab) */}
        <div className="portfolio-item">
          <div className="image">
            <img src="/images/port5.jpg" alt="Django Books REST API" />
          </div>
          <div className="hover-item">
            <h3 style={{ textAlign: "center", padding: "0 1rem" }}>Django Books REST API</h3>
            <div className="icons">
              <a href="https://gitlab.com/EvansRigopoulos/django-books-rest-api/-/tree/main" className="icon" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-gitlab"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
