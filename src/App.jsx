import './App.css';
import { useEffect } from 'react';
import { ContactForm } from './components/contactForm/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';
import { Loader } from './components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <p>Whoops, something went wrong</p>}
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactList />}
    </>
  );
};
