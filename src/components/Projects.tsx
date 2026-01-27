import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Dataset Preprocessing',
      description: 'Cleaned and prepared raw data by handling missing values, encoding categorical variables, and scaling features to ensure high-quality input for machine learning models.',
      technologies: ['Python','PostgreSQL','Redis'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Task',
      description: 'Full-stack task management application with real-time updates, user authentication, and team collaboration features. Built with Django and modern frontend.',
      technologies: ['Django', 'PostgreSQL', 'Celery', 'WebSockets', 'Docker'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive data visualization dashboard for analyzing complex datasets. Features real-time charts, export functionality, and customizable reports.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Flask', 'SQLAlchemy'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Web Scraper & Automation Tool',
      description: 'Intelligent web scraping system with scheduling, data extraction, and automated reporting. Handles dynamic content and includes anti-bot detection measures.',
      technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Scrapy', 'MongoDB'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Authentication System',
      description: 'Secure authentication microservice with JWT tokens, OAuth integration, password reset, and email verification. Production-ready with comprehensive security features.',
      technologies: ['Python', 'Flask', 'JWT', 'Redis', 'PostgreSQL'],
      liveDemo: '#',
      github: '#'
    },
    {
      title: 'Machine Learning Mini Project',
      description: 'ML model for predictive analysis with data preprocessing pipeline, model training, and REST API for predictions. Includes model monitoring and retraining capabilities.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'Docker'],
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in Python development, API design, and system architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
