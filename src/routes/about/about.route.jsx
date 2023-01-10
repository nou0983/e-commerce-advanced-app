import { PageHero } from "../../components/index.component";
import aboutImg from "../../assets/hero-bcg.jpeg";
import "./about.styles.scss";

const About = () => {
  return (
    <main>
      <PageHero type="about" />
      <section className="section-about">
        <img src={aboutImg} alt="Nice desk" className="section-about__img" />
        <article className="section-about__container">
          <h2 className="heading-secondary">our story</h2>
          <hr />
          <p className="section-about__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            odio optio sed eaque, commodi quasi inventore explicabo quisquam
            sunt accusamus. Labore architecto veniam qui expedita, quisquam sunt
            atque quos quia?
          </p>
        </article>
      </section>
    </main>
  );
};
export default About;
