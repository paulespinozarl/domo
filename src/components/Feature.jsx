import { FaHtml5, FaSass, FaNodeJs, FaAngular, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import config from "../config/index.json";

const Feature = () => {
  const { feature } = config;

  return (
    <div id="tecnology" className="bg-[#3870fe] z-60">
      <div className="lg:h-screen max-w-5xl mx-auto flex flex-col lg:flex-row py-16 lg:py-32 px-6 lg:px-16 text-slate-50 justify-between">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 flex flex-col justify-center items-center lg:items-start gap-4 opacity-75">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide text-center lg:text-left">
              {feature.title}
            </h2>
            <p className="max-w-xl lg:ml-0 opacity-80 text-center lg:text-left">
              {feature.content}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full lg:w-1/3">
          <div className="grid grid-cols-3 lg:grid-cols-2 grid-rows-2 lg:grid-rows-3 max-w-80 justify-center items-center gap-8 mt-10">
            {[
              { icon: FaHtml5, size: 60 },
              { icon: IoLogoCss3, size: 60 },
              { icon: FaSass, size: 60 },
              { icon: FaNodeJs, size: 60 },
              { icon: FaAngular, size: 60 },
              { icon: FaPython, size: 60 },
            ].map(({ icon: Icon, size }) => (
              <div key={Icon} className="flex justify-center items-center">
                <Icon size={size} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Feature };
