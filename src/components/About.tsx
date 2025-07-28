import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
              <div className="text-6xl text-cyan-400">👨‍💻</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-cyan-400/50 rounded-lg" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-magenta-400/50 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                👋 Hello! I'm <span className="text-cyan-400 font-semibold">DevInfinix</span>, 
                a passionate full-stack developer and creative professional with a diverse skill set 
                spanning programming, music, photography, art, and cinematography.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                🚀 I specialize in building modern web applications using cutting-edge technologies 
                like React, Node.js, and cloud platforms. My programming journey has led me to become 
                a skilled <span className="text-magenta-400 font-semibold">Discord Bot Developer</span>, 
                creating innovative solutions for online communities.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                🎨 Beyond coding, I express my creativity through various mediums - capturing moments 
                through photography, creating visual art, composing music, and bringing stories to 
                life through cinematography. This diverse background gives me a unique perspective 
                in creating user experiences that are both functional and aesthetically pleasing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;