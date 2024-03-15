import { useEffect, useRef, useState } from "react";

const Card = ({ icon, title, description, onClick }) => {
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
      className="bg-[#fefeff] flex flex-col items-center justify-center rounded-sm w-80 h-96 z-50"
    >
      <div className="flex justify-center items-center p-3 rounded-full w-12 h-12 bg-[#3971fe] my-4 text-slate-50">
        {icon}
      </div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="m-5 text-xs leading-loose font-semibold opacity-65">
        {description}
      </p>
      <button
        onClick={onClick}
        className="border border-[#afafaf] rounded-md font-semibold opacity-65 text-xs p-2 w-28"
      >
        Lean more
      </button>
    </div>
  );
};

export { Card };
