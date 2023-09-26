import { useRef } from "react";
import useGameQueryStore from "../../store";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearch(ref.current.value);
          navigate("/");
        }
      }}
    >
      <input
        ref={ref}
        className="rounded-3xl px-10 py-1 pl-3 bg-gray-200 dark:bg-gray-700 dark:text-white w-full focus:outline-none"
        placeholder="Search games..."
      />
    </form>
  );
};

export default SearchBox;
