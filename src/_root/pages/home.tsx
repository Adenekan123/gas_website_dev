import { useThemeMode } from "flowbite-react";
import { CustomButton, Indicator } from "../../components/ui";

export const Home = () => {
  const { mode } = useThemeMode();

  return (
    <div className="flex flex-col mt-16 md:mt-20  relative dark:bg-black">
      <div className="text-center uppercase flex flex-col space-y-4 md:space-y-6 items-center w-9/12 mx-auto relative z-10">
        <p className="font-light text-xl md:text-4xl text-slate-400 dark:text-gray-400 tracking-widest">
          introducing.
        </p>
        <h2
          className="text-5xl md:text-6xl font-bold  md:tracking-widest drop-shadow-lg"
          style={{ lineHeight: 1.2 }}
        >
          the first gas managment control
        </h2>
      </div>
      {mode === "dark" ? (
        <div className="video-container mt-4 md:-mt-32 scale-150 md:scale-100">
          {" "}
          <video
            src="/assets/fire.mp4"
            className=""
            loop
            autoPlay
            muted
          ></video>
        </div>
      ) : (
        <div className="video-container mt-12 md:w-2/4 mx-auto   rounded-md flex justify-center ">
          {" "}
          <img src="/assets/meter.png" className="w-8/12 mx-auto md:w-auto" />
        </div>
      )}
      <div className="flex space-x-8 justify-center mt-20 md:mt-12  md:hidden">
        <CustomButton text="Shop" styles="w-32" />
        <CustomButton text="Pre-Order" styles="w-32" />
      </div>

      <Indicator />
    </div>
  );
};
