const SkillsInput = ({ title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <p className="border border-indigo-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-600 hover:text-gray-100 hover:border-indigo-600 hover:bg-gray-900 rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
