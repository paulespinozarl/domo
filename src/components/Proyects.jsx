import { phone } from "../../public";
import config from "../config/index.json";
7;
import { useEffect, useRef, useState } from "react";

const Proyects = () => {
  const { proyects } = config;
  const { title, description, button } = proyects;

  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const cardElement = cardRef.current;

    cardElement.addEventListener("mouseenter", handleMouseEnter);
    cardElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardElement.removeEventListener("mouseenter", handleMouseEnter);
      cardElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseMove = (event) => {
    const cardElement = cardRef.current;
    const { left, top, width, height } = cardElement.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    cardElement.style.transform = `perspective(1000px) rotateX(${
      20 - y * 40
    }deg) rotateY(${20 - x * 40}deg)`;
  };

  const handleMouseLeave = () => {
    const cardElement = cardRef.current;
    cardElement.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col lg:flex-row justify-center items-center mx-auto max-w-96 lg:max-w-4xl text-slate-50 gap-4 -mb-10"
    >
      <div className="bg-[#3870fe] lg:h-[216px] rounded-sm p-2 w-full lg:w-1/2">
        <div className="max-w-72 p-4">
          <h3 className="text-2xl mb-4">{title.one}</h3>
          <p className="text-sm">{description.one}</p>
          <button className="border border-slate-100 p-2 mt-8 w-full lg:w-24 text-sm rounded-sm">
            {button.one}
          </button>
        </div>
        <div className="hidden lg:block">
          <img src="" alt="" />
        </div>
      </div>
      <div className="bg-[#3870fe] lg:h-[216px] rounded-sm p-2 w-full lg:w-1/2 flex justify-center items-center">
        <div className="max-w-72 p-4">
          <h3 className="text-2xl mb-4">{title.two}</h3>
          <p className="text-sm">{description.two}</p>
          <button className="border border-slate-100 p-2 mt-8 w-full lg:w-28 text-sm rounded-sm">
            {button.two}
          </button>
        </div>
        <img className="h-44" src={phone} alt="" />
      </div>
    </div>
  );
};

export { Proyects };
