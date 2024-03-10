import Contact from "../Contact/Contact";
export default function ContactList({ phonebooks }) {
  return (
    <ul>
      {phonebooks.map((phonebook) => {
        return (
          <li key={phonebook.id}>
            <Contact phonebook={phonebook}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
