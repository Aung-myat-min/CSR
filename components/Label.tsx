import { PropsWithChildren } from "react";

interface LabelProps {
  label: string;
  forInput: string;
}

const Label: React.FC<PropsWithChildren<LabelProps>> = ({
  label,
  forInput,
}) => {
  return (
    <label
      htmlFor={forInput}
      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label}
    </label>
  );
};
export default Label;
