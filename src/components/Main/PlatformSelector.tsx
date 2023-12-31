import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import usePlatform from "../../hooks/usePlatform";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [showPlatformList, setShowPlatformList] = useState(false);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const platform = usePlatform(selectedPlatformId);
  useOutsideClickHandler(dropdownRef, setShowPlatformList);
  if (error) return null;
  return (
    <div
      className="relative  dark:text-white text-md font-semibold"
      ref={dropdownRef}
    >
      <button
        className={`flex items-center px-4 py-2  rounded-lg  hover:bg-slate-300 hover:cursor-pointer dark:hover:bg-slate-600  ${
          showPlatformList
            ? "bg-slate-300 dark:bg-slate-500 shadow-inner"
            : "bg-slate-200 dark:bg-slate-700"
        }`}
        onClick={() => setShowPlatformList(!showPlatformList)}
      >
        {selectedPlatformId ? platform?.name : "Platform"}
        <BiChevronDown size={25} className="inline-block ml-4" />
      </button>
      {showPlatformList && (
        <ul className="w-60 bg-white dark:bg-slate-800 mt-2 border border-1 dark:border-slate-500 rounded-lg absolute z-10 overflow-hidden">
          {data?.results.map((platform) => (
            <li
              onClick={() => {
                setPlatformId(platform.id), setShowPlatformList(false);
              }}
              className={`cursor-pointer py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 ${
                selectedPlatformId === platform.id &&
                "dark:bg-slate-600 bg-slate-200"
              }`}
              key={platform.id}
            >
              {platform.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformSelector;
