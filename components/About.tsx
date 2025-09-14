import { GraduationCap, Brain, Trophy, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Student",
      description: "University of Toronto"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enthusiast",
      description: "Exploring machine learning & deep learning"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Veteran",
      description: "Building innovative solutions under pressure"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Fitness Advocate",
      description: "Marathon runner & martial artist"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Computer Science student at the University of Toronto with a passion for 
              artificial intelligence and building innovative solutions. When I'm not coding, 
              you'll find me training for marathons, practicing martial arts, or jamming with my band.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in the power of technology to solve real-world problems and love 
              participating in hackathons where I can collaborate with like-minded individuals 
              to create impactful projects. My approach to both coding and athletics is the same: 
              consistent progress through dedication and perseverance.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Currently focusing on:
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Machine Learning & AI Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Marathon Training (2024 Toronto Marathon)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Open Source Contributions
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-200">
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;