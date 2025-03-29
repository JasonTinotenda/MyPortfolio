import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
        <a href="mailto:kufakwatenziyason@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-gray-800 via-indigo-400 to-indigo-600 text-xl font-bold text-gray-100 rounded-lg hover:from-indigo-600 hover:to-gray-800 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink
            title="Whatsapp"
            link="https://wa.me/263771234567"
          />
        <SocialLink title="Github" link="https://github.com/JasonTinotenda/" />
        <SocialLink
          title="Linkedin"
          link="www.linkedin.com/in/jasonkufakwatenzi"
        />        
      </div>
    </div>
  );
};

export default Contact;
