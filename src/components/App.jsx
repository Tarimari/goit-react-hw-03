import { useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
export default function App() {
  const [phonebook, setPhonebook] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchBar, setSearchBar] = useState("");
  console.log(phonebook);

  const filtersNames = phonebook.filter((contact) =>
    contact.name.toLowerCase().includes(searchBar)
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <ContactForm setPhonebook={setPhonebook} phonebook={phonebook} />
        <SearchBox setSearchBar={setSearchBar} />
        <ContactList phonebooks={filtersNames} />
      </div>
    </>
  );
}
