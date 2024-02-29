import { useThemeMode } from "flowbite-react";
import { CustomButton, Input } from "../../components/ui";

export const Shop = () => {
  const { mode } = useThemeMode();
  return (
    <div className="md:flex justify-between items-center mt-12 md:mt-24 h-full">
      {mode === "dark" ? (
        <div className="video-container mt-4 relative   scale-150  basis-6/12">
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
        <div className="video-container md:mt-12 mb-12 md:mb-0  rounded-md  basis-6/12">
          {" "}
          <video
            src="/assets/video2.mp4"
            className=""
            loop
            autoPlay
            muted
          ></video>
        </div>
      )}

      <div className="basis-5/12 relative z-10">
        <div className="uppercase flex flex-col space-y-3 relative z-10">
          <p className="font-light text-lg md:text-xl text-slate-400 dark:text-gray-400 tracking-widest">
            in production.
          </p>
          <h2
            className="text-3xl md:text-4xl font-light  tracking-widest drop-shadow-lg"
            style={{ lineHeight: 1.2 }}
          >
            ships in <span className="font-bold">Q2 2024</span>
          </h2>
        </div>

        <div className="flex flex-col space-y-8 mt-8">
          <Input label="quantity" type="number" />
          <Input label="E-mail" type="email" placeholder="abc@xyz.com" />
          <div className="grid grid-cols-2">
            <div className="flex flex-col space-y-4">
              <p className="dark:text-gray-200 uppercase">price</p>
              <h2 className=" text-3xl md:text-4xl font-bold">
                $450.<span className="font-light">00</span>
              </h2>
            </div>
            <div className="mt-auto">
              <CustomButton text="Pre-order >" props={{size:"lg"}} styles="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
