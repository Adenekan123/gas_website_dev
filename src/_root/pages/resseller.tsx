"use client";
import { useThemeMode } from "flowbite-react";
import { CustomButton, CustomeSelect, Input } from "../../components/ui";

export const Resseller = () => {
  const { mode } = useThemeMode();
  return (
    <div className="mt-12 md:mt-24 flex flex-col space-y-20 pb-24">
      <header className="text-center font-light flex flex-col space-y-3">
        <h2 className="text-4xl md:text-5xl uppercase tracking-widest">
          become a reseller
        </h2>
        <p className="md:text-lg text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8  md:gap-12 w-full md:w-8/12 mx-auto ${
          mode === "dark" ? "bg-[url('/assets/foreground.png')]" : ""
        }   bg-cover bg-no-repeat bg-center`}
      >
        <Input label="first name" type="text" placeholder="John" />
        <Input label="last name" type="text" placeholder="Doe" />
        <Input label="Email" type="email" placeholder="abc@xyz.com" />
        <Input label="Phoneil" type="text" placeholder="+234 907 630 8204" />
        <CustomeSelect label="Country" />
        <Input label="Minimum Qantity" type="number" placeholder="0" />
      </div>
      <div className="text-center">
        <CustomButton text="Submit" props={{size:"lg"}} styles="w-full md:w-32 mx-auto"  />
      </div>
    </div>
  );
};
