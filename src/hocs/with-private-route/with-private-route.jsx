import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends React.PureComponent {
    render() {
      const {isAuthRequired} = this.props;
      if (isAuthRequired) {
        return <Redirect to="login"/>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithPrivateRoute.propTypes = {
    isAuthRequired: PropTypes.bool.isRequired
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
