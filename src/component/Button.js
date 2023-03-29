import { BsChevronDown } from "react-icons/bs";

const Button = ({ name, initial, setInitila, classes }) => {
  return (
    <button
      onClick={() => setInitila(!initial)}
      className={`flex justify-center items-center text-sm border  rounded-md shadow-lg ${classes}`}
    >
      {name}
      {initial ? (
        <BsChevronDown className="ml-2 rotate-180" />
      ) : (
        <BsChevronDown className="ml-2" />
      )}
    </button>
  );
};

export default Button;
