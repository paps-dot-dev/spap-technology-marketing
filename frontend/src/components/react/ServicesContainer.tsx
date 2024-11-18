import React from "react";
import { motion } from "framer-motion";
import {
  MdApps,
  MdCode,
  MdDataObject,
  MdEmail,
  MdMouse,
  MdOutlineMusicNote,
  MdPhoneIphone,
  MdWeb,
} from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "../ui/button";

const services = [
  {
    name: "Websites",
    description:
      " I build content-driven, high-impact websites that will help your brand dominate online presence.",
    icon: MdWeb,
  },
  {
    name: "Web & Mobile Applications",
    description:
      "With over 6 years of experience as a full stack developer, I can bring your next web or mobile app to life with the latest and greatest in web technology.",
    icon: MdCode,
  },
  {
    name: "Backend + Database Architecture",
    description:
      "Apps do not work well without a bulletproof backend. Let me look over your database structure, schemas and more to increase performance and user experience. ",
    icon: MdDataObject,
  },

  {
    name: "Marketing + Business Tools",
    description:
      "Passionate about helping creatives build their outreach, I provide consultation on the latest and greatest tools to do just that.",
    icon: MdEmail,
  },
];

const ServicesContainer = () => {
  return (
    <motion.div className="flex md:flex-wrap flex-col md:flex-row items-center justify-center gap-4 mx-auto">
      {services.map((service, idx) => (
        <motion.div
          initial={{ scale: 0.2, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-primary p-10 rounded-xl w-84 md:w-96 h-[400px] md:h-[500px] flex flex-col justify-center"
          key={idx}
        >
          <div className="text-5xl md:text-5xl">
            <service.icon />
          </div>

          <p className="text-4xl md:text-5xl lg:py-2 font-bold lowercase bg-gradient-to-r from-accent-purple to-accent-magenta bg-clip-text text-transparent">
            {service.name}
          </p>
          <p className="text-lg">{service.description}</p>
          <a
            className="border-accent-magenta p-4 border-2 hover:bg-accent-magenta transition  rounded-md block w-full text-center mt-4"
            href="/contact"
          >
            I need this service
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesContainer;
