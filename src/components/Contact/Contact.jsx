import { HiPhone } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ contact, handleDeleteContact }) {
  const idButton = contact.id;
  return (
    <div className={css.container}>
      <div className={css.element}>
        <p>
          <HiPhone /> {contact.name}
        </p>
        <p>
          <IoPersonSharp /> {contact.number}
        </p>
      </div>
      <button
        className={css.element}
        onClick={() => handleDeleteContact(contact.id)}
        id={idButton}
      >
        Delete
      </button>
    </div>
  );
}
