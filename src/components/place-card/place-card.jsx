import React from "react";
import PropTypes from "prop-types";

import {PlaceType} from "../../enums";

const MAX_RATING = 5;

const BlockName = {
  CITIES: `cities`,
  FAVORITES: `favorites`
};

const PlaceCard = (props) => {
  const {
    id,
    title,
    type,
    image,
    rating,
    price,
    premium,
    isFavorite,
    inFavorites,
    handleImageClick = () => {},
    handleTitleClick = () => {},
    handleMouseEnter = () => {},
    handleMouseLeave = () => {}
  } = props;

  const _handleImageClick = (evt) => {
    evt.preventDefault();
    handleImageClick(id);
  };

  const _handleTitleClick = (evt) => {
    evt.preventDefault();
    handleTitleClick(id);
  };

  const blockName = inFavorites ? BlockName.FAVORITES : BlockName.CITIES;

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${inFavorites ? `${blockName}__card` : `${blockName}__place-card`} place-card`}>
      {premium && !inFavorites ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className={`${blockName}__image-wrapper place-card__image-wrapper`}>
        <a href="#" onClick={_handleImageClick}>
          <img className="place-card__image" src={image} width={inFavorites ? `150` : `260`} height={inFavorites ? `110` : `200`} alt="Place image"/>
        </a>
      </div>
      <div className={`${blockName}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
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
          <a href="#" onClick={_handleTitleClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(PlaceType)),
  image: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  premium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  handleImageClick: PropTypes.func,
  handleTitleClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  inFavorites: PropTypes.bool
};

export default PlaceCard;
