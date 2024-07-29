import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const searchValue = useSelector((state) => state.filters.name);
  const contactsState = useSelector((state) => state.contacts.items);

  const visibleContacts = contactsState.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
