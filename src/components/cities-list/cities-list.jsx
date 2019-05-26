import React from "react";
import PropTypes from "prop-types";

const MAX_NUM_OF_CITIES = 6;

const getAvailableCities = (offers) => {
  return offers.map((o) => o.city).reduce((acc, city) => {
    if (acc.length < MAX_NUM_OF_CITIES && !acc.includes(city)) {
      acc.push(city);
    }
    return acc;
  }, []);
};

const CitiesList = (props) => {
  const {currentCity, offers, handleCityChange} = props;

  const availableCities = getAvailableCities(offers);

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {availableCities.map((city, i) => (
        <li key={`city-${city}-${i}`} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
            href="#"
            onClick={() => handleCityChange(city)}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  handleCityChange: PropTypes.func.isRequired
};

export default CitiesList;
