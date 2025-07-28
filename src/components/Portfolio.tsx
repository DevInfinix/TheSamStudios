import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Music, Camera, Palette, Video } from 'lucide-react';
import { SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('creative');

  const creativePortfolio = [
    {
      title: 'Music',
      icon: Music,
      description: 'Original compositions and audio engineering',
      gradient: 'from-purple-500 to-pink-500',
      youtube: '#',
      instagram: '#'
    },
    {
      title: 'Photography',
      icon: Camera,
      description: 'Portrait, landscape, and street photography',
      gradient: 'from-green-500 to-teal-500',
      youtube: '#',
      instagram: '#'
    },
    {
      title: 'Digital Art',
      icon: Palette,
      description: 'Digital illustrations and creative designs',
      gradient: 'from-orange-500 to-red-500',
      youtube: '#',
      instagram: '#'
    },
    {
      title: 'Cinematography',
      icon: Video,
      description: 'Video production and post-processing',
      gradient: 'from-blue-500 to-cyan-500',
      youtube: '#',
      instagram: '#'
    }
  ];

  const programmingProjects = [
    {
      title: 'Discord Bot Framework',
      description: 'Advanced Discord bot with modular commands and database integration',
      technologies: ['Node.js', 'Discord.js', 'MongoDB', 'TypeScript'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'Socket.io powered chat application with file sharing',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'Machine learning powered image generation tool',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mb-8" />
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'creative'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-black/30 text-gray-300 hover:text-cyan-400'
              }`}
            >
              Creative Work
            </button>
            <button
              onClick={() => setActiveTab('programming')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'programming'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-black/30 text-gray-300 hover:text-cyan-400'
              }`}
            >
              Programming Projects
            </button>
          </div>
        </motion.div>

        {activeTab === 'creative' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {creativePortfolio.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    rotateY: 15,
                    scale: 1.05,
                    z: 50
                  }}
                  className="group relative bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center mb-6">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={item.youtube}
                      className="p-2 bg-red-500/20 rounded-full hover:bg-red-500/40 transition-all duration-300"
                    >
                      <SiYoutube className="w-5 h-5 text-red-400" />
                    </a>
                    <a
                      href={item.instagram}
                      className="p-2 bg-pink-500/20 rounded-full hover:bg-pink-500/40 transition-all duration-300"
                    >
                      <SiInstagram className="w-5 h-5 text-pink-400" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'programming' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programmingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-black/30 backdrop-blur-sm border rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 ${
                  project.featured 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-cyan-500/20'
                }`}
              >
                {project.featured && (
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-magenta-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Discord Bot Developer
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;