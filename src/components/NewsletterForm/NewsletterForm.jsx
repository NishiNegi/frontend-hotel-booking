import './style.css';

const NewsletterForm = () => (
  <section id="newsletter-form" className="newsletter-form">
    <div className="newsletter-form__caption">
      <h1 className="newsletter-form__header">
        <span className="newsletter-form__header-flag">Our News</span>
        <span> Suscribe Our News</span>
      </h1>
      <p className="newsletter-form__paragraph">
        Suscribe and recieve our newsletters to follow the news about our
        fresh and fantastic products.
      </p>
    </div>
    <div className="newsletter-form__divider" />
    <form action="" className="newsletter-form__form">
      <input
        type="email"
        name="email"
        id="email"
        className="newsletter-form__input-email"
        placeholder="Enter Your Email"
      />
      <button type="submit" className="newsletter-form__button-subscribe">
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterForm;
