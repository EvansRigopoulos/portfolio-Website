const Contact = () => {
  return (
    <section className="container contact active" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>

            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location : London, UK (Hybrid)</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email : evansrigopoulos@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-mobile-android"></i>
                  <span>Phone : Find on CV</span>
                </div>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a href="https://www.linkedin.com/in/evangelos-rigopoulos-07333686/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://github.com/EvansRigopoulos" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://drive.google.com/drive/folders/1_4UItZciFPiwSWpGUT8MmkOjN_v6m7lR" target="_blank" rel="noreferrer">
                  <i className="fab fa-google-drive"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <form action="https://formsubmit.co/evansrigopoulos@gmail.com" className="contact-form" method="POST">
              <div className="input-control i-c-2">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="text" name="name" required placeholder="YOUR NAME" />
                <input type="email" name="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" name="subject" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea name="message" id="" cols={15} rows={8} placeholder="Message Here..."></textarea>
              </div>
              <button className="main-btn" type="submit">
                <span className="btn-text">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
