import { FiArrowUpRight } from "react-icons/fi";

const SocialLink = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="sir jason"
      className="flex items-center justify-center gap-2 text-xl text-gray-900 font-semibold group"
    >
      <p className="group-hover:text-indigo-600">{title}</p>
      <FiArrowUpRight className="translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
    </a>
  );
};

export default SocialLink;
