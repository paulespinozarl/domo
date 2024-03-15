import { FaRegFileAlt } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { RiPencilRulerLine } from "react-icons/ri";
import { Card } from "./";
import config from "../config/index.json";

const data = [
  {
    title: "Business & Product Concept",
    description:
      "Analyze business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare viable and sensible product roadmap for achieving a perfect market fit.",
    icon: <FaRegFileAlt size={25} />,
  },
  {
    title: "Web Development",
    description:
      "Plan, develop and test high-quality web applications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
    icon: <FaComputer size={25} />,
  },
  {
    title: "UX & UI Design",
    description:
      "Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface design to deliver a good and reliable user experience.",
    icon: <RiPencilRulerLine size={25} />,
  },
];

const Services = () => {
  const { services } = config;
  return (
    <section className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-4 nunito-custom -mt-96 lg:-mt-24 -mb-10">
      <h3 className="text-slate-50 text-3xl font-semibold z-50">
        {services.title}
      </h3>
      <span className="text-slate-400 text-md font-semibold max-w-sm  lg:max-w-xl opacity-70 text-center mb-5">
        {services.content}
      </span>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-5 lg:h-auto">
        {data.map((item) => (
          <Card
            icon={item.icon}
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export { Services };
