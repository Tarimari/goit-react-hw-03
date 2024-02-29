import Contact from "../Contact/Contact";
export default function ContactList({ phonebooks }) {
  console.log(phonebooks);
  return (
    <ul>
      {phonebooks.map((phonebook) => {
        console.log(phonebook);
        return (
          <li key={phonebook.id}>
            <Contact phonebook={phonebook}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
