import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <dt className="text-lg font-semibold text-gray-600">{term}</dt>
      <dd className="text-md">{children}</dd>
    </div>
  );
};

export default DefinitionItem;
