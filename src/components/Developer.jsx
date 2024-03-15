import { CiMail, CiHeart } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Developer = () => {
  return (
    <div className="bg-[#283244] w-full h-20 text-slate-50 flex flex-col justify-center items-center tracking-widest gap-3 pb-5">
      <span className="flex">
        Developed with <CiHeart className="m-1" /> by Paul Espinoza
        <a
          target="_blank"
          className="m-1"
          href="mailto:paulespinozarl@gmail.com"
        >
          <CiMail />
        </a>
      </span>
      <span>
        <p className="text-xs">Or</p>
      </span>
      <span className="flex gap-3">
        <a target="_blank" href="https://www.instagram.com/_paulespinoza/">
          <FaInstagram />
        </a>
        <a target="_blank" href="https://wa.me/+541130085208">
          <FaWhatsapp />
        </a>
      </span>
    </div>
  );
};

export { Developer };
