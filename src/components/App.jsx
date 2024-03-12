import { useState } from "react";
import { useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import css from "./App.module.css";
export default function App() {
  const [phonebook, setPhonebook] = useState(() => {
    const savedPhonebook = localStorage.getItem("saved-phonebook");

    if (savedPhonebook !== null) {
      return JSON.parse(savedPhonebook);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-phonebook", JSON.stringify(phonebook));
  }, [phonebook]);

  const filtersNames = phonebook.filter((contact) =>
    contact.name.toLowerCase().includes(searchBar)
  );

  const handleDeleteContact = (value) => {
    const updatedPhonebook = phonebook.filter((pers) => {
      return pers.id !== value;
    });
    setPhonebook(updatedPhonebook);
  };

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>

        <ContactForm setPhonebook={setPhonebook} phonebook={phonebook} />
        <SearchBox searchBar={searchBar} setSearchBar={setSearchBar} />
        <ContactList
          filtersNames={filtersNames}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}
