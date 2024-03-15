// import { airbnb, ina, nike, google, tnw } from "../../public";
import config from "../config/index.json";

// const images = [
//   { src: tnw, alt: "tnw", opacity: 50 },
//   { src: google, alt: "google", opacity: 50 },
//   { src: nike, alt: "nike", opacity: 50 },
//   { src: airbnb, alt: "airbnb", opacity: 50 },
//   { src: ina, alt: "ina", opacity: 80 },
// ];

const Clients = () => {
  const { clients } = config;
  const { title, images } = clients;
  return (
    <div className="flex flex-col justify-center items-center text-sm my-20">
      <h4 className="font-bold opacity-50 text-center mb-4">{title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-screen-lg">
        {images.map((image, index) => (
          <img
            key={index}
            className={`h-20 md:h-24 lg:h-32 opacity-60`}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export { Clients };
