import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <div className={css.wrapper}>
      {filteredContacts.length === 0 ? (
        <b className={css.info}>The phonebook is empty</b>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, phone }) => (
            <li
              className={css.item}
              key={id}
            >
              <div className={css.box}>
                <p className={css.name}>{name}</p>
                <p className={css.phone}>{phone}</p>
              </div>
              <button
                className={css.button}
                id={id}
                type='button'
                onClick={handleDelete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
