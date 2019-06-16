import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Icon from "../icon/icon.jsx";
import Header from "../header/header.jsx";
import {
  Operation as UserOperation,
} from "../../reducers/user/user";

import {getIsAuthRequired, getUser} from "../../reducers/user/selectors";

const PASSWORD = `password`;
const EMAIL = `email`;

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      [EMAIL]: ``,
      [PASSWORD]: ``
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return <div className="page page--gray page--login">
      <Icon/>
      <Header {...this.props}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={(evt) => this._handleChange(evt, EMAIL)}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={(evt) => this._handleChange(evt, PASSWORD)}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>;
  }

  _handleChange(evt, field) {
    this.setState({
      [field]: evt.target.value
    });
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    if (this.state[PASSWORD] && this.state[EMAIL]) {
      this.props.logIn(Object.assign({}, this.state));
    }
  }
}

SignIn.propTypes = {
  logIn: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthRequired: getIsAuthRequired(state),
    user: getUser(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => {
      dispatch(UserOperation.logIn(credentials));
    }
  };
};

export {SignIn};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
