import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBox = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
