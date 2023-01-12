import { useForm } from "@formspree/react";
import "./contact.styles.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqyqyjl");
  const { submitting, succeeded } = state;

  return (
    <section className="section-contact">
      <article className="section-contact__container">
        <div className="section-contact__text-box">
          <h2 className="heading-secondary">
            join our newsletter and get 20% off
          </h2>
          <p className="section-contact__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore fugiat iure perspiciatis eum tempore vero rem voluptas.
            Atque, sit.
          </p>
        </div>
        {succeeded ? (
          <div className="section-contact__alert">
            <h2 className="heading-secondary">Thanks!</h2>
            <p className="section-contact__text">The form was submitted successfully. Enjoy our shopping.</p>
          </div>
        ) : (
          <form className="section-contact__form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="section-contact__input"
            />
            <button
              type="submit"
              className="section-contact__btn"
              disabled={submitting}
            >
              subscribe
            </button>
          </form>
        )}
      </article>
    </section>
  );
};

export default Contact;
