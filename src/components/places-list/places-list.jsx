import React from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = ({offers, handleMouseOverPlace = () => {}}) => {
  return <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <PlaceCard handleMouseEnter={() => handleMouseOverPlace(offer.id)} handleMouseLeave={() => handleMouseOverPlace(null)} key={offer.id.toString()} {...offer}/>)}
  </div>;
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  handleMouseOverPlace: PropTypes.func
};

export default PlacesList;
