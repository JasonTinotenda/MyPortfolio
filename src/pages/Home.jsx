import bgimage from '../assets/bgimage.jpg'; // Adjust the path as necessary  

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-screen w-full bg-cover bg-center"
        src ={bgimage}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      
      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-gray-100">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm text-white-300 ring-1 ring-white-300/50 hover:ring-indigo-600/70">
            Announcing my latest achievement{' '}
            <a href="/" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">

            {/*<br /> I am a passionate MERN stack developer with a strong foundation in web development and a keen interest in creating dynamic and responsive applications. I am eager to contribute my skills and knowledge to a dynamic team while continuing to grow as a developer.
            <br /> I am proficient in JavaScript, React, Node.js, Express, and MongoDB, and I am always eager to learn new technologies and frameworks. I am a quick learner and a team player, and I thrive in collaborative environments where I can share ideas and learn from others.*/}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/*<a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>*/}
            <a href="/portfolio" className="text-lg font-semibold text-gray-200 hover:text-indigo-600">
              View Portfolio <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
