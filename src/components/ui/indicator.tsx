export const Indicator = () => {
  return (
    <div className="absolute top-1/4 left-0 -translate-y-1/4 md:flex flex-col hidden ">
      <span className="relative text-lg md:text-xl -top-12  font-[400]">01</span>

      <div className="inset-0 bg-[#111827] opacity-75 w-2 h-40 md:h-64 ml-1">
        <div className="absolute inset-0 bg-blue w-2 h-12 ml-1"></div>
      </div>
      <span className="mt-auto text-lg md:text-xl relative -bottom-12  font-[400]">04</span>
    </div>
  );
};
