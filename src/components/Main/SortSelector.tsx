import { BiChevronDown } from "react-icons/bi";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import { useRef, useState } from "react";

interface Props {
  onSelectSortOrder: (selectedSortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Average rating" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "-rating", label: "Popularity" },
  ];
  const [showPlatformList, setShowPlatformList] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(dropdownRef, setShowPlatformList);

  const selectedOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedSortOrder
  );

  return (
    <div
      ref={dropdownRef}
      className="relative  text-md font-semibold dark:text-white"
    >
      <button
        onClick={() => setShowPlatformList(!showPlatformList)}
        className={`truncate flex items-center px-4 py-2  rounded-lg  hover:bg-slate-300 hover:cursor-pointer dark:hover:bg-slate-600  ${
          showPlatformList
            ? "bg-slate-300 dark:bg-slate-500 shadow-inner"
            : "bg-slate-200 dark:bg-slate-700"
        }`}
      >
        Order by: {selectedOrder?.label || "Relevance"}
        <BiChevronDown className="inline-block ml-4" size={25} />
      </button>
      {showPlatformList && (
        <ul className="w-60 bg-white dark:bg-slate-800 mt-2 border border-1 dark:border-slate-500 rounded-lg absolute z-10 overflow-hidden">
          {sortOrders.map((sort) => (
            <li
              onClick={() => {
                onSelectSortOrder(sort.value);
                setShowPlatformList(false);
              }}
              key={sort.value}
              value={sort.value}
              className={`cursor-pointer py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 ${
                sort.value === selectedOrder?.value &&
                "dark:bg-slate-600 bg-slate-200"
              }`}
            >
              {sort.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
