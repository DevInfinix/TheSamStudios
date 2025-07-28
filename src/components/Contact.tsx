import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Linkedin, Download } from 'lucide-react';
import { SiGithub, SiX, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const socialLinks = [
    { icon: SiGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: SiX, href: '#', label: 'Twitter/X', color: 'hover:text-sky-400' },
    { icon: SiInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: SiYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-400' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">contact@devinfinix.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-magenta-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-magenta-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Available Globally</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/placeholder-resume-id/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-magenta-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-5 h-5" />
              <span>View My Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`flex flex-col items-center space-y-2 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 text-gray-300 ${social.color}`}
                    >
                      <IconComponent className="w-8 h-8" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Collaborate</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities, creative projects, 
                and innovative ideas. Whether you need a Discord bot, a web application, 
                or creative content, let's make it happen!
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Discord Bots', 'Creative Design', 'Consulting'].map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-cyan-500/20"
        >
          <p className="text-gray-400">
            © 2024 DevInfinix. Crafted with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;