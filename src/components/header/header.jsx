import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {BASE_URL} from "../../enums";

const Header = (props) => {
  const {user} = props;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to="/">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={user ? `/favorites` : `/login`}>
                {user ?
                  <Fragment>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img src={BASE_URL + user.avatarSrc}/>
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                  </Fragment> :
                  <span className="header__login">Sign in</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
    name: PropTypes.string,
    avatarSrc: PropTypes.string,
    isPremium: PropTypes.bool
  })
};

export default Header;
