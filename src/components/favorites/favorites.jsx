import React from "react";
import PropTypes from "prop-types";
import Icon from "../icon/icon.jsx";
import Header from "../header/header.jsx";
import PlacesList from "../places-list/places-list.jsx";

class Favorites extends React.PureComponent {
  render() {
    const {citiesWithFavoriteOffers} = this.props;

    const empty = !citiesWithFavoriteOffers.length;
    return <div className="page page--gray page--main">
      <Icon/>
      <Header {...this.props}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{empty ? `Favorites (empty)` : `Saved listing`}</h1>
            {empty ?
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div> :
              <ul className="favorites__list">
                {citiesWithFavoriteOffers.map((cityWithOffers) =>
                  <li key={cityWithOffers.city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityWithOffers.city}</span>
                        </a>
                      </div>
                    </div>
                    <PlacesList className="favorites__places" offers={cityWithOffers.offers} inFavorites={true}/>
                  </li>
                )}
              </ul>
            }
          </section>
        </div>
      </main>
    </div>;
  }
}

Favorites.propTypes = {
  citiesWithFavoriteOffers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    offers: PropTypes.array.isRequired
  }))
};

export default Favorites;
