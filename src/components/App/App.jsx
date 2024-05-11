import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Layout from '../Layout/Layout';
import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader.jsx';
import { fetchContacts } from '../../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../../redux/selectors.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <div className={css.mainContainer}>
        <div>
          <SearchBox />
          <ContactForm />
        </div>
        <div>
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
          <ContactList />
        </div>
      </div>
    </Layout>
  );
}

export default App;
