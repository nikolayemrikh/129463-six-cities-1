import React, {Fragment} from "react";
import PropTypes from "prop-types";

const UserLink = (props) => {
  const {user} = props;

  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      {user ?
        <Fragment>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={user.avatarSrc}/>
          </div>
          <span className="header__user-name user__name">{user.email}</span>
        </Fragment> :
        <span className="header__login">Sign in</span>}
    </a>
  );
};

UserLink.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
    name: PropTypes.string,
    avatarSrc: PropTypes.string,
    isPremium: PropTypes.bool
  })
};

export default UserLink;
