import React from "react";
import PropTypes from "prop-types";

import Icon from "../icon/icon.jsx";
import Header from "../header/header.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import PlacesList from "../places-list/places-list.jsx";
import CityMap from "../city-map/city-map.jsx";

import withTransformProps from "../../hocs/with-transform-props/with-transform-props";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const CitiesListA = withActiveItem(
    withTransformProps((props) => Object.assign({}, props, {
      currentCity: props.activeItem,
      handleCityChange: props.setActiveItem
    }))(CitiesList)
);

const PlacesListA = withActiveItem(
    withTransformProps((props) => Object.assign({}, props, {
      handleMouseOverPlace: props.setActiveItem
    }))(PlacesList)
);

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferId: null
    };
  }
  render() {
    const {currentCity, offers, cityOffers, changeCity} = this.props;

    return <div className="page page--gray page--main">
      <Icon/>
      <Header {...this.props}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities tabs">
          <CitiesListA handleSetActiveItem={changeCity} activeItem={currentCity} offers={offers}/>
        </div>
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length ? `${cityOffers.length} places to stay in ${currentCity}` : `No places to stay available`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>

                {/* <select class="places__sorting-type" id="places-sorting">
              <option class="places__option" value="popular" selected="">Popular</option>
              <option class="places__option" value="to-high">Price: low to high</option>
              <option class="places__option" value="to-low">Price: high to low</option>
              <option class="places__option" value="top-rated">Top rated first</option>
            </select> */}

              </form>
              <PlacesListA className="cities__places-list places__list tabs__content" handleSetActiveItem={this._handleActivePlaceCard.bind(this)} offers={cityOffers}/>
            </section>
            <div className="cities__right-section">
              <CityMap key={currentCity} activeOfferId={this.state.activeOfferId} cityOffers={cityOffers}/>
            </div>
          </div>
        </div>
      </main>
    </div>;
  }

  _handleActivePlaceCard(offerId) {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {activeOfferId: offerId});
    });
  }
}

Main.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cityOffers: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  handlePlaceClick: PropTypes.func,
  changeCity: PropTypes.func.isRequired
};

export default Main;
