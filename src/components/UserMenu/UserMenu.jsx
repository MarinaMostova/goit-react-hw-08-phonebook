import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <>
      <NavLink
        className={({ isActive }) => {
          return isActive ? css.active__contacts : css.link__contacts;
        }}
        to="/contacts"
      >
        Contacts
      </NavLink>

      <div className={css.user__menu}>
        <p className={css.name}>Hello, {name}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
