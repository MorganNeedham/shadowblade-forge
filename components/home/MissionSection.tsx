const values = [
  {
    title: "Handcrafted",
    description:
      "Each piece is made with intention, care, and attention to the details that make handmade work unique.",
  },
  {
    title: "Built to Be Used",
    description:
      "Fantasy-inspired design should still work in the real world. Beauty and practicality belong together.",
  },
  {
    title: "Made to Last",
    description:
      "Thoughtful construction and quality materials create pieces designed for adventures both ordinary and extraordinary.",
  },
];

export default function MissionSection() {
  return (
    <section
      className="mission-section"
      aria-labelledby="mission-title"
    >
      <div className="container">
        <div className="mission-section__intro">
          <p className="mission-section__eyebrow">
            Our Craft
          </p>

          <h2 id="mission-title">
            Old-World Character.
            <span>Modern-Day Utility.</span>
          </h2>

          <p className="mission-section__statement">
            We create fantasy-inspired accessories that blend
            old-world character, handmade craftsmanship, and
            modern-day utility.
          </p>
        </div>

        <div className="mission-section__values">
          {values.map((value) => (
            <article
              className="mission-value"
              key={value.title}
            >
              <span
                className="mission-value__mark"
                aria-hidden="true"
              >
                ◆
              </span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}