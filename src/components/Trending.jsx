import "./Trending.css";

import trend1 from "../assets/trend-1.jpg";
import trend2 from "../assets/trend-2.jpg";
import trend3 from "../assets/trend-3.jpg";
import trend4 from "../assets/trend-4.jpg";

const cards = [
  {
    id: 1,
    title: "Fender Studio®",
    image: trend1,
    tag: "New",
  },
  {
    id: 2,
    title: "John Osborne Telecaster®",
    image: trend2,
    tag: "New",
  },
  {
    id: 3,
    title: "Tone Master® Pro",
    image: trend3,
  },
  {
    id: 4,
    title: "Kingfish Delta Day Telecaster® Deluxe",
    image: trend4,
  },
];

function Trending() {
  return (
    <section className="trending">
      <div className="container">
        <h2 className="trending_title">Trending</h2>

        <div className="trending_grid">
          {cards.map((card) => (
            <article
              key={card.id}
              className="trending_card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="trending_overlay"></div>

              <div className="trending_content">
                {card.tag && (
                  <span className="trending_tag">{card.tag}</span>
                )}

                <h3 className="trending_cardTitle">
                  {card.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;