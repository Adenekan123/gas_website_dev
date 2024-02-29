import { CustomFlowbiteTheme, Label, TextInput } from "flowbite-react";
import { HTMLInputTypeAttribute } from "react";

const customInputTheme: CustomFlowbiteTheme["textInput"] = {
  field: {
    base: "relative w-full",
    input: {
      base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-md",
      },
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        dark:
          "bg-gray-50 border-gray-300 text-gray-500 dark:text-gray-50 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-300 dark:bg-black dark:focus:border-gray-500 dark:focus:ring-gray-800 py-4",
      },
    },
  },
};

export const Input = ({
  type,
  placeholder,
  styles,
  label,
}: {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  styles?: string;
  label: string;
}) => {
  return (
    <div>
      <div className="mb-3 block">
        <Label htmlFor={label} value={label} className="dark:text-gray-200 uppercase" />
      </div>

      <TextInput
        theme={customInputTheme}
        color={"dark"}
        type={type}
        placeholder={placeholder}
        required
        sizing={"lg"}
        className={` dark:border-white dark:bg-black  ${styles}`}
      />
    </div>
  );
};
