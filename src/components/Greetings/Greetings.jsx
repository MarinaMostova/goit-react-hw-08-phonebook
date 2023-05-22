import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth, selectUserName } from 'redux/auth/selectors';
import Message from 'components/Message';
import image from 'images/krasnyy-telefon.png';
import css from './Greetings.module.css';

const Greetings = () => {
  const name = useSelector(selectUserName);
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <div className={css.greetings}>
      <h2 className={css.text}> Welcome to Phonebook!</h2>
      <div className={css.text__container}>
        <img src={image} alt="phonebook" width="600px" />
      </div>
      {isLoggedIn ? (
        <div className={css.auth__container}>
          <Message
            text={`${name}, go to the contacts page, start using Phonebook today and
            simplify your life. Enjoy hassle-free contact management at your
            fingertips!`}
          />
          <Link className={css.link} to={'/contacts'}>
            Contacts
          </Link>
        </div>
      ) : (
        <>
          <Message text="Stay organized, save contacts and never lose phone numbers again. First, log in or register." />
          <div className={css.link__container}>
            <Link className={css.link} to={'/login'}>
              Log in
            </Link>
            <Link className={css.link} to={'/register'}>
              Sign up
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Greetings;
