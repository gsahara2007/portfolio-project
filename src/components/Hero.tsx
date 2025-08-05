import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { darkMode } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

      // Conditional background based on theme
    const backgroundClass = darkMode 
      ? "min-h-screen flex items-center justify-center relative overflow-hidden"
      : "min-h-screen flex items-center justify-center relative overflow-hidden"

  return (
    <section id="home" className={backgroundClass}>
      {/* Background Effects - Only show in light mode */}
      {!darkMode && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute border border-blue-400/20 rounded-lg"
              style={{
                width: 20 + Math.random() * 40,
                height: 20 + Math.random() * 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                x: [0, 30, 0],
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Moving Gradient Orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full"
              style={{
                width: 100 + Math.random() * 200,
                height: 100 + Math.random() * 200,
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 60, 0],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.6, 0.2, 0.3],
              }}
              transition={{
                duration: 15 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Animated Lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%),
                linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.05) 50%, transparent 100%)
              `,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <br />
                <div className="mt-4">
                  <TypeAnimation
                    sequence={[
                      'Harini Ganesula',
                      2000,
                      'a Developer',
                      2000,
                      'a Designer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent"
                    repeat={Infinity}
                  />
                </div>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              I craft digital experiences that blend creativity with functionality. 
              Passionate about building innovative solutions that make a difference.
            </motion.p>

            {/* Call to action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="/resume.pdf"
                download="Harini_Ganesula_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl group text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Download Resume</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </motion.a>
              
              <motion.button
                onClick={scrollToAbout}
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-blue-400 text-white !text-white font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-4 pt-6"
            >
              {[
                { icon: Github, href: 'https://github.com/gsahara2007', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/harini-ganesula-55a1aa2a5', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:gsahara2207@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? '_self' : '_blank'}
                  rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} className="text-white group-hover:text-blue-300 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile-picture.jpg"
                  alt="Harini Ganesula"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='384' height='384' viewBox='0 0 24 24' fill='none' stroke='%234ade80' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";
                  }}
                />
              </motion.div>
              
              {/* Animated border effect */}
              
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - moved outside and centered */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center pt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <ChevronDown size={28} className="text-gray-300 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive cursor effect */}
      <motion.div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-blue-500 rounded-full mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}

export default Hero 