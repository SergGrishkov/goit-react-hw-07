import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { onDelete } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";


export const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.container}>
        <div>
          <p>
            <BsFillPersonFill />
            {name}
          </p>
          <p>
            <FaPhone />
            {number}
          </p>
        </div>
        <button
          type="button"
          className={id}
          onClick={() => dispatch(onDelete(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};
