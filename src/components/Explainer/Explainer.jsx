import './style.css';
import explore from '../../assets/explore.png';
import quote from '../../assets/quote.png';
import customize from '../../assets/customize.png';
import enjoy from '../../assets/enjoy.png';

const Explainer = () => (
  <section id="explainer" className="explainer">
    <div className="explainer__copy-container">
      <h3>Super Easy Booking</h3>
      <p className="explainer__copy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quos,
        voluptas totam laboriosam inventore atque exercitationem veniam minus
        aut beatae rerum voluptatibus! Placeat, odio! Dolor, ex molestias?
        Vitae, aliquid sequi?
      </p>
    </div>
    <article className="explainer__card-container">
      <div className="explainer__card explainer__card--up">
        <picture className="explainer__card-img">
          <img className="explainerImg" src={explore} alt="" />
        </picture>{' '}
        <p>Explore</p>
      </div>
      <div className="explainer__card explainer__card--down">
        <picture className="explainer__card-img">
          <img className="explainerImg" src={quote} alt="" />
        </picture>{' '}
        <p>Get Quotes</p>
      </div>
      <div className="explainer__card explainer__card--up">
        <picture className="explainer__card-img">
          <img className="explainerImg" src={customize} alt="" />
        </picture>{' '}
        <p>Customize</p>
      </div>
      <div className="explainer__card explainer__card--down">
        <picture className="explainer__card-img">
          <img className="explainerImg" src={enjoy} alt="" />
        </picture>{' '}
        <p>Book & Enjoy</p>
      </div>
    </article>
  </section>
);
export default Explainer;
