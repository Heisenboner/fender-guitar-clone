import "./Categories.css";

import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";
import cat4 from "../assets/cat-4.jpg";
import cat5 from "../assets/cat-5.jpg";

const cards = [
  {
    id: 1,
    title: "Accessories",
    image: cat1,
    size: "large",
  },
  {
    id: 2,
    title: "Parts",
    image: cat2,
  },
  {
    id: 3,
    title: "Merch",
    image: cat3,
  },
  {
    id: 4,
    title: "Featured",
    image: cat4,
  },
  {
    id: 5,
    title: "Amps",
    image: cat5,
  },
];

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories_grid">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`categories_card ${card.size === "large" ? "categories_card_large" : ""}`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="categories_overlay"></div>

              <div className="categories_content">
                <h3 className="categories_title">{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;