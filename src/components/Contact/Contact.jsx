/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';
import { MdPhoneAndroid } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.card}>
      <p className={css.field}>
        <RiContactsFill size="24" />
        {contact.name}
      </p>
      <p className={css.field}>
        <MdPhoneAndroid size="24" />
        {contact.number}
      </p>

      <button className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
