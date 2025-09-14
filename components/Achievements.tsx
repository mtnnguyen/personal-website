import { useState, useEffect } from 'react';
import { Trophy, Calendar, MapPin, Clock, TrendingUp, Activity } from 'lucide-react';

interface StravaData {
  recentRuns: Array<{
    name: string;
    distance: number;
    time: string;
    pace: string;
    date: string;
  }>;
  totalMileage: number;
  averagePace: string;
}

const Achievements = () => {
  const [stravaData, setStravaData] = useState<StravaData | null>(null);
  const [loading, setLoading] = useState(true);

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Toronto Marathon 2024",
      description: "Completed the full 26.2-mile race through the streets of Toronto",
      date: "May 2024",
      category: "Running"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "5K Foam Fest",
      description: "Obstacle course race combining running with challenging obstacles",
      date: "August 2023",
      category: "Fitness"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Winner",
      description: "First place at UofT Hacks with the Trash Map environmental project",
      date: "January 2024",
      category: "Technology"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Taekwondo Black Belt",
      description: "Achieved 1st Dan Black Belt after 6 years of dedicated training",
      date: "September 2022",
      category: "Martial Arts"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Dean's List",
      description: "Academic excellence recognition at University of Toronto",
      date: "Fall 2023",
      category: "Academic"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Band Performance",
      description: "Performed original compositions at the Phoenix Concert Theatre",
      date: "December 2023",
      category: "Music"
    }
  ];

  useEffect(() => {
    // Fetch Strava data
    const fetchStravaData = async () => {
      try {
        const response = await fetch('/api/strava');
        const data = await response.json();
        setStravaData(data);
      } catch (error) {
        console.error('Error fetching Strava data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStravaData();
  }, []);

  const categoryColors = {
    Running: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Fitness: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Technology: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Martial Arts': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    Academic: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Music: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
  };

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Milestones and accomplishments across technology, athletics, and personal growth.
          </p>
        </div>

        {/* Strava Integration Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            <Activity className="w-6 h-6 inline-block mr-2" />
            Running Stats (Powered by Strava)
          </h3>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              ))}
            </div>
          ) : stravaData ? (
            <>
              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="card text-center">
                  <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Miles This Year</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stravaData.totalMileage}
                  </p>
                </div>
                
                <div className="card text-center">
                  <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Average Pace</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stravaData.averagePace}
                  </p>
                </div>
                
                <div className="card text-center">
                  <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Recent Runs</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stravaData.recentRuns.length}
                  </p>
                </div>
              </div>

              {/* Recent Runs */}
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Activities
                </h4>
                <div className="space-y-3">
                  {stravaData.recentRuns.map((run, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{run.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{run.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {run.distance} mi • {run.pace}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{run.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="card text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Unable to load Strava data at the moment. Please check back later!
              </p>
            </div>
          )}
        </div>

        {/* Achievements Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Major Milestones
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 dark:text-primary-400 mt-1">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        categoryColors[achievement.category as keyof typeof categoryColors]
                      }`}>
                        {achievement.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;