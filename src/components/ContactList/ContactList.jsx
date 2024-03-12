import Contact from "../Contact/Contact";
export default function ContactList({ filtersNames, handleDeleteContact }) {
  return (
    <ul>
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
