import { SERVICES } from "../../utils/constants.utils";
import "./services.styles.scss";

const Services = () => {
  return (
    <section className="section-services">
      <div className="section-services__container">
        <article className="section-services__header">
          <h2 className="heading-secondary">
            custom furniture
            <br />
            built only for you
          </h2>
          <p className="section-services__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            repellendus magnam, minus molestias dolorem minima ipsa eius
            adipisci quasi earum!
          </p>
        </article>
        <article className="section-services__card-container">
          {SERVICES.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <div key={id} className="section-services__card">
                <span className="section-services__icon">{icon}</span>
                <h3 className="heading-tertiary">{title}</h3>
                <p className="section-services__info">{text}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
export default Services;
