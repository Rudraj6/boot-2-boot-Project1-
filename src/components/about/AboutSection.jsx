import AboutValueCard from "./AboutValueCard";
import { aboutContent } from "../../data/aboutContent";
import "./about.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">

      <div className="about-section__container">

        {/* Top content */}
        <div className="about-section__intro">

          <div className="about-section__eyebrow">
            <span className="about-section__eyebrow-dot" />
            {aboutContent.eyebrow}
          </div>

          <div className="about-section__intro-grid">

            <div className="about-section__heading-wrap">
              <h2 className="about-section__heading">
                {aboutContent.title}
              </h2>
            </div>

            <div className="about-section__description-wrap">

              <p className="about-section__description">
                {aboutContent.description}
              </p>

              <a
                href="https://boot2boot.com/about-us/"
                className="about-section__cta"
                target="_blank"
                rel="noreferrer"
              >
                <span>{aboutContent.cta}</span>

                <span className="about-section__cta-arrow">
                  ↗
                </span>
              </a>

            </div>

          </div>
        </div>


        {/* Values */}
        <div className="about-section__values-header">
          <span>OUR VALUES</span>

          <span>
            04 PRINCIPLES
          </span>
        </div>


        <div className="about-section__cards">
          {aboutContent.values.map((value) => (
            <AboutValueCard
              key={value.number}
              {...value}
            />
          ))}
        </div>

      </div>

    </section>
  );
}