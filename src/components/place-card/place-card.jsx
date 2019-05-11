import React from "react";
import PropTypes from "prop-types";

import {PlaceType} from "../../enums";

const MAX_RATING = 5;

const PlaceCard = (props) => {
  const {
    id,
    name,
    type,
    image,
    rating,
    price,
    premium,
    handleImageClick = () => {},
    handleTitleClick = () => {}
  } = props;

  const _handleImageClick = (evt) => {
    evt.preventDefault();
    handleImageClick(id);
  };

  const _handleTitleClick = (evt) => {
    evt.preventDefault();
    handleTitleClick(id);
  };

  return (
    <article className="cities__place-card place-card">
      {premium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={_handleImageClick}>
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark-active"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: Math.round(rating) / (MAX_RATING / 100) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={_handleTitleClick}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(PlaceType)),
  image: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  premium: PropTypes.bool,
  handleImageClick: PropTypes.func,
  handleTitleClick: PropTypes.func
};

export default PlaceCard;
