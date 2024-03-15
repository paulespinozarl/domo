import { FaArrowRightLong } from "react-icons/fa6";
import config from "../config/index.json";

const Landing = () => {
  const { landing } = config;
  return (
    <>
      <section className="max-w-xs mx-5 lg:max-w-5xl lg:mx-auto my-10 lg:mt-24 h-screen">
        <div className="absolute lg:relative text-3xl lg:text-4xl font-bold max-w-sm lg:max-w-xl text-slate-50 tracking-wider z-10">
          {landing.title}
        </div>
        <div className="max-w-xl text-slate-50 opacity-70 mb-5 pt-36 lg:pt-10 nunito-custom">
          {landing.content}
        </div>
        <div className="text-slate-50 nunito-custom text-sm mt-16">
          <button className="p-2 border border-slate-500 bg-transparent mr-2 opacity-60 rounded-sm w-40">
            <p className="opacity-80 font-bold">{landing.button_1}</p>
          </button>
          <button className="lg:relative absolute p-2 border border-[#3946fe] bg-[#3971fe] rounded-sm w-40">
            <p className="opacity-80 flex justify-center items-center text-white font-bold z-50">
              {landing.button_2}
              <FaArrowRightLong className="ml-2" size={15} />
            </p>
          </button>
        </div>
      </section>
    </>
  );
};

export { Landing };
