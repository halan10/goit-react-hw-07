import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

import css from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name has to be longer than 3 characters!')
    .max(50, 'Too Long!')
    .required('Name is required field'),
  number: Yup.string()
    .min(3, 'Number phone has to be longer than 3 characters!')
    .max(50, 'Too Long!')
    .required('Number phone is required field'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, e) => {
    dispatch(addContact(values));
    e.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field className={css.field} type="tel" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
