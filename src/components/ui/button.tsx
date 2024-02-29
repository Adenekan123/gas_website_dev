import { Button, ButtonProps, CustomFlowbiteTheme } from "flowbite-react";

const buttonTheme: CustomFlowbiteTheme["button"] = {
  base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow]",
  fullSized: "w-full",
  color: {
    blue: "text-white bg-blue border border-transparent enabled:hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue",
  },
};

export const CustomButton = ({
  text,
  styles,
  props,
}: {
  text: string;
  styles?: string;
  props?: ButtonProps;
}) => {
  return (
    <Button
     color="blue"
      theme={buttonTheme}
      {...props}
      className={`bg-blue dark:bg-blue rounded-none ${styles}`}
    >
      {text}
    </Button>
  );
};
