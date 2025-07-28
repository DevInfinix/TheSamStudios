import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Palette, Music, Camera, Video } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C++'],
      color: 'cyan'
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker', 'Redis'],
      color: 'blue'
    },
    {
      title: 'Design & Art',
      icon: Palette,
      skills: ['Photoshop', 'Illustrator', 'Figma', 'Blender', 'Digital Art'],
      color: 'magenta'
    },
    {
      title: 'Music Production',
      icon: Music,
      skills: ['Ableton Live', 'Logic Pro', 'Composition', 'Audio Engineering'],
      color: 'purple'
    },
    {
      title: 'Photography',
      icon: Camera,
      skills: ['Portrait', 'Landscape', 'Street', 'Lightroom', 'Photo Editing'],
      color: 'green'
    },
    {
      title: 'Cinematography',
      icon: Video,
      skills: ['Video Editing', 'Color Grading', 'Premiere Pro', 'After Effects'],
      color: 'orange'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}-500/20 mr-4`}>
                    <IconComponent className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 cursor-default"
                      style={{
                        boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;