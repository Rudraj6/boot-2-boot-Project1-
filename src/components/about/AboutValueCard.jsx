import "./about.css";

export default function AboutValueCard({
  number,
  title,
  description,
}) {
  return (
    <article className="about-value-card">
      <div className="about-value-card__top">
        <span className="about-value-card__number">
          {number}
        </span>

        <span className="about-value-card__icon" aria-hidden="true">
          ↗
        </span>
      </div>

      <div className="about-value-card__content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="about-value-card__bottom">
        <span>BOOT 2 BOOT</span>
        <span>+</span>
      </div>
    </article>
  );
}