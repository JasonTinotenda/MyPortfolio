const ExperienceCard = ({ title, subTitle, description, location }) => {
  return (
    <div className="flex items-center gap-4">
      {/*<span className="w-12 h-12 rounded-full bg-gray-100 border-[1px] border-indigo-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span> */}
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm font-semibold text-gray-500">{location}</p>
        <h4 className="text-lg font-semibold text-indigo-600">{subTitle}</h4>
        <p className="text-sm font-semibold text-gray-500">Responsibilities:</p>
        <p className="text-sm font-semibold text-gray-500">1. {description.split('\n')[0] || ""}</p>
        <p className="text-sm font-semibold text-gray-500">2. {description.split('\n')[1] || ""} </p>
        <p className="text-sm font-semibold text-gray-500">3. {description.split('\n')[2] || ""} </p>
        <p className="text-sm font-semibold text-gray-500">4. {description.split('\n')[3] || ""} </p>
        <p className="text-sm font-semibold text-gray-500">5. {description.split('\n')[4] || ""} </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
