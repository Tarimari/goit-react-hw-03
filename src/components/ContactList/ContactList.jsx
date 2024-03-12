import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ filtersNames, handleDeleteContact }) {
  return (
    <ul className={css.container}>
      {filtersNames.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              contact={contact}
              handleDeleteContact={handleDeleteContact}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
}
