const ProjectCard = ({ title, link, img }) => {
  return (
    <a href={link} target="_blank" rel="sir jason">
      <div className="w-full h-80 border-[1px] border-indigo-600 overflow-hidden relative rounded-lg group">
        <img
          className="object-cover w-full h-full translate-y-0 group-hover:-translate-y-[10%] transition-transform duration-[3s]"
          src={img}
          alt={title}
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-indigo-600 text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
