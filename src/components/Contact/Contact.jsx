import { HiPhone } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ phonebook }) {
  return (
    <>
      <div>
        <p>
          <HiPhone /> {phonebook.name}
        </p>
        <p>
          <IoPersonSharp /> {phonebook.number}
        </p>
      </div>
      <button>Delete</button>
    </>
  );
}
