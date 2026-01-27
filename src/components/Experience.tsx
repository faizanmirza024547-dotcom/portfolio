import { Briefcase, Award, Code } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Python Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading backend development team, architecting scalable microservices, and mentoring junior developers.',
      achievements: [
        'Designed and implemented RESTful APIs serving 1M+ requests daily',
        'Reduced API response time by 60% through optimization',
        'Established CI/CD pipelines improving deployment frequency by 300%'
      ],
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Python Software Engineer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed full-stack web applications and automated business processes using Python and Django.',
      achievements: [
        'Built automated data processing pipeline handling 100K+ records daily',
        'Developed custom CMS reducing content management time by 75%',
        'Integrated third-party APIs and payment gateways'
      ],
      icon: Code,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Junior Python Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      description: 'Contributed to various Python projects, learned best practices, and gained experience in Agile development.',
      achievements: [
        'Implemented feature modules for Django-based e-commerce platform',
        'Created automated testing suite achieving 85% code coverage',
        'Collaborated with cross-functional teams on product development'
      ],
      icon: Award,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 bg-gradient-to-br ${exp.color} rounded-lg`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                      {exp.period}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
