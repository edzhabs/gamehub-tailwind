import { LiaSpinnerSolid } from "react-icons/lia";

const Loading = () => {
  return (
    <LiaSpinnerSolid
      className="text-center m-10 animate-spin dark:text-white"
      size={50}
    />
  );
};

export default Loading;
