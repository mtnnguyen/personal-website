const Hobbies = () => {
  const hobbies = [
    {
      emoji: "🥋",
      title: "Martial Arts",
      description: "Practicing discipline, focus, and physical fitness through various martial arts forms. Currently training in Taekwondo and exploring Brazilian Jiu-Jitsu.",
      highlights: ["Black Belt in Taekwondo", "Competition Experience", "Teaching Assistant"]
    },
    {
      emoji: "🎵",
      title: "Band & Music",
      description: "Playing guitar and keyboard in a local indie rock band. Music helps me express creativity and collaborate with fellow musicians.",
      highlights: ["Lead Guitar", "Local Venues", "Original Compositions"]
    },
    {
      emoji: "🏃",
      title: "Marathon Training",
      description: "Long-distance running has taught me patience, perseverance, and the importance of consistent effort toward long-term goals.",
      highlights: ["2024 Toronto Marathon", "Sub-4 Hour Goal", "Weekly 50+ Miles"]
    }
  ];

  return (
    <section id="hobbies" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Beyond Code
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Life is about balance. Here are the passions that keep me grounded, 
            creative, and constantly pushing my limits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-all duration-300">
              {/* Emoji Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {hobby.emoji}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {hobby.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {hobby.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {hobby.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center justify-center text-sm text-primary-600 dark:text-primary-400">
                    <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></span>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 text-center">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Philosophy
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              "The discipline I learn from martial arts, the creativity I express through music, 
              and the endurance I build through running all contribute to making me a better developer. 
              Each pursuit teaches unique lessons that I apply to solving complex technical challenges."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;