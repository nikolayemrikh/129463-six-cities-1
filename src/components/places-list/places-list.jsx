import React from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = (props) => {
  const {
    className,
    offers,
    inFavorites,
    handleMouseOverPlace = () => {}
  } = props;

  return <div className={className}>
    {offers.map((offer) => <PlaceCard
      inFavorites={inFavorites}
      handleMouseEnter={() => handleMouseOverPlace(offer.id)}
      handleMouseLeave={() => handleMouseOverPlace(null)}
      key={offer.id.toString()}
      {...offer}
    />)}
  </div>;
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  inFavorites: PropTypes.bool,
  handleMouseOverPlace: PropTypes.func,
  className: PropTypes.string.isRequired
};

export default PlacesList;
