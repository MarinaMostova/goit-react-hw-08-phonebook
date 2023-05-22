import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.auth}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.link__auth;
        }}
        to="/login"
      >
        Log in
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active : css.link__auth;
        }}
        to="/register"
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthNav;
