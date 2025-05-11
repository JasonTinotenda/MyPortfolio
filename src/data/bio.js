// src/data/bio.js
export const bioData = {
    name: "Jason Kufakwatenzi",
    titles: [
      "Full Stack Developer",
      "AI Generalist",
      "Sports Tech Enthusiast",
    ], // For a potential cycling/typing effect if desired, or just pick one
    shortIntro:
      "I craft immersive and high-performance digital experiences using React, modern JavaScript, and cutting-edge animation techniques. Passionate about bringing ideas to life with clean code and user-centric design.",
    cta: {
      text: "View My Work",
      link: "/projects", // Or "#projects" if it's a section on the same page initially
    },
    
    // New fields for About Page
    profileImageUrl: "/assets/images/profile-pic.jpg", // Path relative to public folder
    aboutMeDetailed: [
      {
        type: "paragraph", // To differentiate content blocks
        id: "p1",
        content: "From a young age, I've been fascinated by how technology can solve real-world problems and connect people. My journey into development started with a curiosity for web design, quickly evolving into a passion for building full-stack applications that are both functional and delightful to use."
      },
      {
        type: "paragraph",
        id: "p2",
        content: "I thrive in collaborative environments and believe that the best products are built by diverse teams working towards a common goal. My experience in remote, fast-paced startup settings has taught me the importance of adaptability, clear communication, and a proactive approach to problem-solving."
      },
      {
        type: "heading",
        id: "h1",
        level: "h3", // e.g., h2, h3, h4
        content: "My Philosophy"
      },
      {
        type: "paragraph",
        id: "p3",
        content: "I'm committed to continuous learning and always eager to explore new technologies, especially in the realms of AI and interactive web experiences. I believe in writing clean, maintainable code and paying close attention to detail, ensuring that every project I undertake meets high standards of quality and performance."
      },
      {
        type: "list",
        id: "l1",
        items: [
          "Passionate about creating intuitive and engaging user interfaces.",
          "Dedicated to robust backend development and API design.",
          "Enthusiastic about leveraging AI/ML for innovative solutions.",
          "Strong believer in agile methodologies and iterative development."
        ]
      }
    ],
    values: [ // For a potential separate animated section
      { id: "v1", title: "Collaboration", icon: "UsersIcon" /* Placeholder for icon name */, description: "Teamwork makes the dream work." },
      { id: "v2", title: "Innovation", icon: "LightBulbIcon", description: "Constantly seeking new solutions." },
      { id: "v3", title: "Quality", icon: "CheckCircleIcon", description: "Delivering excellence in every detail." }
    ]
  };
  
  // Make sure you have a profile picture in public/assets/images/profile-pic.jpg