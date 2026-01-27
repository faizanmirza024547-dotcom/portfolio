import { Code2, Database, GitBranch, Container, Server, Brain } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      name: 'Python',
      icon: Code2,
      description: 'Advanced proficiency in Python development',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Django / Flask',
      icon: Server,
      description: 'Building robust web applications and APIs',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'REST APIs',
      icon: Server,
      description: 'Designing and implementing RESTful services',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Databases',
      icon: Database,
      description: 'PostgreSQL, MySQL, query optimization',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Git & GitHub',
      icon: GitBranch,
      description: 'Version control and collaborative development',
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Docker / Deployment',
      icon: Container,
      description: 'Containerization and cloud deployment',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Problem Solving',
      icon: Brain,
      description: 'Algorithm design and optimization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'System Design',
      icon: Server,
      description: 'Scalable architecture and distributed systems',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-800"
            >
              <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['FastAPI', 'SQLAlchemy', 'Redis', 'Celery', 'Pytest', 'CI/CD', 'AWS', 'Linux', 'Nginx', 'RabbitMQ'].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
