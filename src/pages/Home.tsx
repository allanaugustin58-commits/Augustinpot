import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-primary-500 text-xl md:text-2xl font-mono mb-2">Hello, my name is</h2>
                <h4 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  Augustin Singizimana
                </h4>
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl text-white/80 font-bold mb-8">
                {text}<span className="cursor"></span>
              </h2>
              
              <motion.p 
                className="text-xl text-white/70 mb-8 max-w-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I build exceptional digital experiences with clean code and modern technologies.
                Let's bring your vision to life with innovative solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Link to="/projects" className="button-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="button-outline">
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                className="mt-16 floating glass p-4 rounded-lg w-48 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="text-sm font-mono text-white/70">// Output</div>
                <pre className="text-xs text-green-400">
                  {`function hello() {
  return "Augustin";
}`}
                </pre>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative max-w-[250px]">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-500 to-purple-600 blur opacity-70 animate-pulse"></div>
                <div className="relative bg-dark-300 rounded-lg p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://yt3.googleusercontent.com/uzV1B3IzNbSFdf-h2eDQ5MXgOTF_N3HHCrOVi2KrlvtsaiWJmKWdvY7P3-atAP3rYom7qKb6udI=s160-c-k-c0x00ffffff-no-rj"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-40"></div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 glass p-2 rounded-lg flex items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Code className="text-primary-500" size={16} />
                  <span className="text-xs font-medium">Software Development</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 1.5 } 
          }}
        >
          <Link to="/about" className="flex flex-col items-center">
            <span className="mb-2 text-sm">Learn More</span>
            <ArrowDown size={20} />
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;
 
