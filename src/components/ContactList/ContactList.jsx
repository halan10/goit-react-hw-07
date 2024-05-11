import Contact from '../Contact/Contact';
import { selectFiltredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
