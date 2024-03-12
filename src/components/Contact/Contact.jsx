import { HiPhone } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ contact, handleDeleteContact }) {
  const idButton = contact.id;
  return (
    <>
      <div>
        <p>
          <HiPhone /> {contact.name}
        </p>
        <p>
          <IoPersonSharp /> {contact.number}
        </p>
      </div>
      <button onClick={() => handleDeleteContact(id)} id={idButton}>
        Delete
      </button>
    </>
  );
}
