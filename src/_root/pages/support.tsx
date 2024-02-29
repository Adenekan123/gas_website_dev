"use client";
import { useThemeMode } from "flowbite-react";
import { CustomButton, CustomTextarea, Input } from "../../components/ui";
import { Mail, Phone } from "lucide-react";

export const Support = () => {
  const { mode } = useThemeMode();
  return (
    <div className="mt-12 md:mt-24 flex flex-col space-y-20 pb-24">
      <header className="text-center font-light flex flex-col space-y-3">
        <h2 className="text-4xl md:text-5xl uppercase tracking-widest">
          let’s get in touch{" "}
        </h2>
        <p className="md:text-lg text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-8/12 mx-auto   ${
          mode === "dark" ? "bg-[url('/assets/foreground.png')]" : ""
        }   bg-cover bg-no-repeat bg-center`}
      >
        <Input label="full name" type="text" placeholder="John Doe" />
        <Input label="Email" type="email" placeholder="abc@xyz.com" />
        <div className=" md:col-span-2">
          <CustomTextarea label="Message" placeholder="Enter here" />
        </div>
      </div>
      <div className="text-center">
        <CustomButton
          text="Submit"
          props={{ size: "lg" }}
          styles="w-full md:w-32 mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 space-y-12 md:space-y-0">
        <div className="text-center flex flex-col space-y-3">
          <h2 className="dark:text-white capitalize md:text-xl flex items-center justify-center space-x-2">
          <Phone className="w-8 h-6 inline-block" />
            <span>Phone</span>
            
          </h2>
          <p className="text-gray-500 dark:text-gray-300 font-light">
            +234 908 765 9876
          </p>
        </div>
        <div className="text-center flex flex-col space-y-3">
          <h2 className="dark:text-white capitalize md:text-xl flex items-center justify-center space-x-2">
            {" "}
            <Mail className="w-8 h-6 inline-block" /> <span>Email</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 font-light">
            info@intellicharge.com
          </p>
        </div>
      </div>
    </div>
  );
};
