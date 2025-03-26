const About = () => {
    return (
      <section className="min-h-screen bg-gray-900 text-white px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">About Me</h2>
          <p className="text-lg md:text-xl mt-4 text-gray-300">
            I'm a passionate <span className="text-blue-300">Full-Stack Developer</span> with experience in building web applications that are **scalable, efficient, and user-friendly**.
          </p>
        </div>
  
        {/* Skills Section */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Frontend</h3>
            <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Backend</h3>
            <p className="text-gray-400">Node.js, Express, Django</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Databases</h3>
            <p className="text-gray-400">MongoDB, PostgreSQL</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tools</h3>
            <p className="text-gray-400">Git, Docker, Firebase</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Cloud</h3>
            <p className="text-gray-400">AWS, Vercel, Netlify</p>
          </div>
        </div>
  
        {/* Experience & Education */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-3xl font-semibold text-blue-400 text-center">Experience</h3>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold">Full-Stack Developer</h4>
              <p className="text-gray-400">Company Name | 202X - Present</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold">Software Engineer Intern</h4>
              <p className="text-gray-400">Company Name | 202X - 202X</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  