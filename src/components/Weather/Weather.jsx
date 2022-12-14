import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
} from '@fortawesome/free-regular-svg-icons';

const Weather = () => {
  function days(date, amountOfDays) {
    const daysArr = [];
    for (let i = 0; i < amountOfDays; i += 1) {
      let d = date.setDate(date.getDate() + i);
      d = new Date(d);
      daysArr.push(d.toLocaleDateString('en-us', { weekday: 'long', month: 'short', day: 'numeric' }));
    }
    return daysArr;
  }
  const daysWeather = days(new Date(), 4);

  return (
    <section id="weather" className="weather">
      <h3 className="weather__header">Weather</h3>
      <div className="weather__list-container">
        <ul className="weather__list">
          {daysWeather.map((element) => (
            <li key={element.id} className="weather__list-element">
              <span className="weather__list-date">{element}</span>{' '}
              <FontAwesomeIcon icon={faSun} key={`${element} sun`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Weather;
