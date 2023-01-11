import { Button } from "../index.component";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="section-hero">
      <article className="section-hero__text-box">
        <h1 className="heading-primary">
          design your
          <br />
          comfort zone
        </h1>
        <p className="section-hero__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nulla
          obcaecati repellat, eaque molestiae consequuntur ratione, animi magnam
          nisi officia dignissimos ipsum? Voluptate laudantium sunt expedita,
          quod odio explicabo quisquam, fuga natus labore ipsam nam nisi atque,
          laborum nulla deserunt?
        </p>
        <Button url="products">shop now</Button>
      </article>
      <article className="section-hero__gallery">
        <img
          src={heroBcg}
          alt="Nice desk"
          className="section-hero__img section-hero__img--1"
        />
        <img
          src={heroBcg2}
          alt="Carpenter"
          className="section-hero__img section-hero__img--2"
        />
      </article>
    </section>
  );
};

export default Hero;
