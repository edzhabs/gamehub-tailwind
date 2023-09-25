import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (!children) null;
  if (children.length < 300) return <p>{children}</p>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <p className="leading-7 text-lg">
      {summary}{" "}
      <button
        className="ml-1 px-2 py-1 rounded-md bg-yellow-300 text-black font-semibold text-sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </p>
  );
};

export default ExpandableText;
