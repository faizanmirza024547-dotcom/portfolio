import { Download, Code, Server, Briefcase } from 'lucide-react';

export default function About() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/faizan-mirza-cv.pdf';
    link.download = 'Faizan_Mirza_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Python Software Engineer with extensive experience in building
              robust backend systems, RESTful APIs, and scalable web applications. My expertise
              lies in creating efficient, maintainable code that solves real-world problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong foundation in backend development using Django and Flask, I specialize
              in designing and implementing complex systems, optimizing database queries, and
              architecting solutions that scale. I'm deeply committed to writing clean, testable
              code and following best practices in software engineering.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond coding, I have a passion for automation, problem-solving, and continuous
              learning. I enjoy tackling challenging technical problems and collaborating with
              teams to deliver high-quality software solutions.
            </p>

            <button
              onClick={downloadCV}
              className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Download CV
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Backend Development
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Expert in Python, Django, Flask, and building scalable RESTful APIs with clean architecture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-green-600 dark:bg-green-500 rounded-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  System Design
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Experienced in database optimization, caching strategies, and designing distributed systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-orange-600 dark:bg-orange-500 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Problem Solving
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Strong analytical skills with a focus on automation, optimization, and delivering elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
