import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiBasketballBall } from "react-icons/gi";

import config from "../config/index.json";

const Footer = () => {
  const { footer } = config;
  const { sections, title, content } = footer;
  return (
    <div className="bg-[#283244]">
      <footer className="max-w-5xl mx-auto text-slate-50 pt-16 px-4 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 mb-5 lg:mb-0">
          <h3 className="font-semibold mb-5">{title}</h3>
          <p className="max-w-xs lg:max-w-none m-1 opacity-60">{content}</p>
          <div className="flex p-2 gap-3 opacity-65">
            <FaTwitter />
            <FaFacebookSquare />
            <FaInstagram />
            <GiBasketballBall />
          </div>
        </div>
        <div className="flex lg:w-1/2 justify-between">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-semibold text-sm">{section.title}</h3>
              {section.links.map((link, idx) => (
                <p key={idx} className="text-sm opacity-60">
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export { Footer };
