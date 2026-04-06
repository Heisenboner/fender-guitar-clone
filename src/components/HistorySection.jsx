import "./HistorySection.css";

import history1 from "../assets/history-1.jpg";
import history2 from "../assets/history-2.jpg";
import history3 from "../assets/history-3.jpg";

function HistorySection() {
  return (
    <section className="history_section">
      <div className="container">
        <div className="history_header">
          <span className="history_year">1946</span>

          <h2 className="history_title">
            The world's leading
            <br />
            guitar manufacturer
          </h2>
        </div>

        <div className="history_cards">
          <article className="history_card">
            <img
              src={history1}
              alt="Fender factory"
              className="history_card_image"
            />
            <p className="history_card_text">
              An American icon. Nearly seven decades since founder Leo Fender
              built his first electric guitar.
            </p>
          </article>

          <article className="history_card">
            <img
              src={history2}
              alt="Fender machine"
              className="history_card_image"
            />
            <p className="history_card_text">
              Fender’s reach transcends instruments and accessories,
              encompassing a range of innovative digital experiences.
            </p>
          </article>

          <article className="history_card">
            <img
              src={history3}
              alt="Fender worker"
              className="history_card_image"
            />
            <p className="history_card_text">
              These products fuel musical expression and serve players at every
              stage.
            </p>
          </article>
        </div>

        <div className="history_bottom">
          <button className="history_button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;