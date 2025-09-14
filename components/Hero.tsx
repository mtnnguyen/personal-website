import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-max">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              MN
            </div>
            {/* Replace with actual image: */}
            {/* <Image src="/images/profile.jpg" alt="Martin Nguyen" width={128} height={128} className="rounded-full mx-auto shadow-lg" /> */}
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Martin Nguyen
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Computer Science Student • Runner • Builder
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about AI, hackathons, and pushing boundaries both in code and on the track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="mailto:martin@example.com"
              className="btn-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/martinnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              
              <a
                href="https://linkedin.com/in/martinnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;