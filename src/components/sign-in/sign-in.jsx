import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import UserLink from "../user-link/user-link.jsx";
import {connect} from "react-redux";
import {Operation as UserOperation, Action as UserAction, ActionCreator as UserActionCreator} from "../../reducers/user/user";

const PASSWORD = `password`;
const EMAIL = `email`;

class SignIn extends PureComponent {
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
    return (
      <Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <UserLink/>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

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
      </Fragment>
    );
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
  return Object.assign({}, ownProps, state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (credentials) => {
      dispatch(UserOperation.logIn(credentials))
        .then((userData) => {
          dispatch(UserActionCreator[UserAction.LOG_IN](userData));
          dispatch(UserActionCreator[UserAction.REQUIRE_AUTH](false));
        });
    }
  };
};

export {SignIn};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
