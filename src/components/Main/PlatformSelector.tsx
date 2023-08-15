import { useRef, useState } from "react";
import { Platform } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";
import { BiChevronDown } from "react-icons/bi";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  const [showPlatformList, setShowPlatformList] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(dropdownRef, setShowPlatformList);

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
        {selectedPlatform ? selectedPlatform.name : "Platform"}
        <BiChevronDown size={25} className="inline-block ml-4" />
      </button>
      {showPlatformList && (
        <ul className="w-60 bg-white dark:bg-slate-800 mt-2 border border-1 dark:border-slate-500 rounded-lg absolute z-10 overflow-hidden">
          {data.map((platform) => (
            <li
              onClick={() => {
                onSelectPlatform(platform), setShowPlatformList(false);
              }}
              className={`cursor-pointer py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 ${
                selectedPlatform?.name === platform.name &&
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
