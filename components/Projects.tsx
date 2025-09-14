import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Trash Map",
      description: "An interactive mapping application that helps communities identify and report waste disposal issues. Built with geolocation services and real-time data visualization.",
      techStack: ["React", "Node.js", "MongoDB", "Mapbox API", "Express"],
      githubUrl: "https://github.com/martinnguyen/trash-map",
      liveUrl: "https://trashmap.vercel.app",
      image: "/images/trash-map-preview.jpg" // Placeholder
    },
    {
      title: "PABLO - Presentation Assistant",
      description: "An AI-powered presentation tool that helps users create engaging slides with smart content suggestions and automated design recommendations.",
      techStack: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/martinnguyen/pablo",
      liveUrl: "https://pablo-ai.vercel.app",
      image: "/images/pablo-preview.jpg" // Placeholder
    },
    {
      title: "SurveilOne App",
      description: "A comprehensive surveillance management system with real-time monitoring, alert notifications, and analytics dashboard for security professionals.",
      techStack: ["React Native", "Firebase", "Python", "TensorFlow", "AWS"],
      githubUrl: "https://github.com/martinnguyen/surveilone",
      liveUrl: null,
      image: "/images/surveilone-preview.jpg" // Placeholder
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Work
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my passion for building innovative solutions 
            that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-2xl">
                {project.title.split(' ').map(word => word[0]).join('')}
              </div>
              {/* Replace with actual image: */}
              {/* <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg mb-6" /> */}

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Code</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/martinnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;