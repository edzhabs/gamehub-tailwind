import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  const displayIcons = (slug: string, id: number) => {
    const IconComponent = iconMap[slug];
    return IconComponent ? <IconComponent key={id} /> : "";
  };

  return (
    <div className="flex flex-row gap-2 text-gray-500 my-2 w-56">
      {platforms.map(({ slug, id }) => displayIcons(slug, id))}
    </div>
  );
};

export default PlatformIconList;
