import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
        <div className={css.item} key={contact.id}>
            <p className={css.info}>
                {contact.name}: {contact.number}
            </p>
            <section className={css.sec_btn}>
            <button
                className={css.btn}
                type="button"
                onClick={() => onDeleteContact(contact.id)}>
                Delete
                </button>
            </section>
        </div>
    )
};


Contact.propTypes = {
  contacts: PropTypes.object,
};


