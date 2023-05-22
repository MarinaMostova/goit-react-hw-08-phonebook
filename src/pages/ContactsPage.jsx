import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Message from 'components/Message';
import Loader from 'components/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />

      {items.length === 0 && !isLoading && !error ? (
        <Message text="You do not have any contacts in the phone book yet." />
      ) : (
        <ContactList>
          <Filter />
        </ContactList>
      )}
      {isLoading && !error && items.length === 0 && <Loader />}
    </>
  );
};
export default ContactsPage;
