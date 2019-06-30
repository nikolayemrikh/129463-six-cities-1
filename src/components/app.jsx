import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import {getOffers, getCurrentCity, getCityOffers, getCitiesWithFavoriteOffers} from "../reducers/offers/selectors";
import {getIsAuthRequired, getUser} from "../reducers/user/selectors";
import {Action as OffersAction, ActionCreator as OffersActionCreator} from "../reducers/offers/offers";
import {
  Operation as UserOperation,
} from "../reducers/user/user";
import withPrivateRoute from "../hocs/with-private-route/with-private-route.jsx";

import Main from "../components/main/main.jsx";
import SignIn from "../components/sign-in/sign-in.jsx";
import Favorites from "../components/favorites/favorites.jsx";
import PlaceDetails from "../components/place-details/place-details.jsx";

class App extends React.PureComponent {
  render() {
    return <Switch>
      <Route path="/" exact render={() => <Main {...this.props}/>} />
      <Route path="/login" exact render={() => <SignIn {...this.props}/>} />
      <Route path="/offer/:id" exact render={({match}) => {
        const matchedId = Number.parseInt(match.params.id, 10);
        const it = this.props.offers.find((offer) => offer.id === matchedId);
        return <PlaceDetails {...it}/>;
      }} />
      <Route path="/favorites" exact render={() => {
        const PrivateFavorites = withPrivateRoute(Favorites);
        return <PrivateFavorites {...this.props}/>;
      }} />
    </Switch>;
  }
}

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cityOffers: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  handlePlaceClick: PropTypes.func,
  changeCity: PropTypes.func.isRequired,
  isAuthRequired: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarSrc: PropTypes.string,
    isPremium: PropTypes.bool
  })
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    currentCity: getCurrentCity(state),
    cityOffers: getCityOffers(state),
    citiesWithFavoriteOffers: getCitiesWithFavoriteOffers(state),
    offers: getOffers(state),
    isAuthRequired: getIsAuthRequired(state),
    user: getUser(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (newCity) => {
      dispatch(OffersActionCreator[OffersAction.CHANGE_CITY](newCity));
    }
  };
};

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
