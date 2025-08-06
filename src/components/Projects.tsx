import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const projects = [
    {
      id: 1,
      title: "AI Driven Chatbot on Food Systems",
      description: "An intelligent chatbot system designed to provide information and assistance related to food systems, nutrition, and dietary recommendations using natural language processing.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      tags: ["AI", "NLP", "Python", "Machine Learning"],
      category: "ai",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "IPL Cricket Players Data Analysis",
      description: "Comprehensive data analysis of IPL cricket players including detailed statistics on runs, wickets, and match performance. Features interactive visualizations and performance insights.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      tags: ["Data Analysis", "Python", "Statistics", "Visualization"],
      category: "data",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Currency Converter",
      description: "A real-time currency conversion application that allows users to convert amounts between different currencies with live exchange rates and historical data.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      tags: ["JavaScript", "API", "Web App", "Real-time"],
      category: "web",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Student Attendance Portal",
      description: "A comprehensive web-based portal for tracking student attendance with day-wise records, performance analytics, and visual indicators using different colors for attendance status.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      tags: ["Web Development", "MySQL", "PHP", "Dashboard"],
      category: "web",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Automated Student Council Interaction System",
      description: "A dynamic student council web application built with modern web technologies and MySQL database for enhanced user interaction and council management.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      tags: ["Web Technologies", "MySQL", "Interactive", "Student Portal"],
      category: "web",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Machine Learning Credit Card Analysis",
      description: "Research project analyzing credit card transactions using machine learning techniques including decision trees, random forests, and neural networks for fraud detection.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      tags: ["Machine Learning", "Python", "Data Science", "Neural Networks"],
      category: "ai",
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'data', label: 'Data Analysis', icon: '📊' },
    { id: 'web', label: 'Web Development', icon: '🌐' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 pt-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white/10 text-theme-secondary hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card group"
                >
                  {/* Project image */}
                  <div className="relative h-48 rounded-t-2xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Overlay with links */}
                    <div className="project-overlay flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.demoUrl}
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold gradient-text group-hover:opacity-80 transition-opacity">
                      {project.title}
                    </h3>
                    
                    <p className="text-white text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full text-xs text-orange-300 border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Work Together</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 