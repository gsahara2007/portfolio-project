
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap, Users, Trophy, Heart } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive interfaces that users love to interact with"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency to deliver exceptional user experiences"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to bring ideas to life"
    },
    {
      icon: Trophy,
      title: "Results Driven",
      description: "Focused on delivering measurable outcomes that exceed expectations"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely excited about creating technology that makes a difference"
    }
  ]

  return (
    <section id="about" className="py-20 pt-32 relative">
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
              About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

                     {/* Main content */}
           <div className="mb-20">
             {/* Personal info */}
             <motion.div variants={itemVariants}>
               <div className="card max-w-4xl mx-auto">
                 <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-4">
                   Computer Science Student & AI/ML Enthusiast
                 </h3>
                 <p className="text-white text-lg leading-relaxed mb-6">
                   I'm a passionate Computer Science graduate at GITAM University with a strong 
                   foundation in AI/ML technologies and web development. Currently pursuing my B.Tech 
                   in Computer Science and Engineering with a GPA of 8.6, I'm driven by innovation 
                   and the desire to create impactful technological solutions.
                 </p>
                 <p className="text-white text-lg leading-relaxed mb-6">
                   My experience spans across various domains including machine learning, artificial 
                   intelligence, natural language processing, and web development. I've had the privilege 
                   of working with prestigious institutions like IITH, DRDL, and IBM, gaining hands-on 
                   experience in cutting-edge technologies and real-world applications.
                 </p>
                 
                 {/* Stats */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                   <div className="text-center">
                     <div className="text-3xl font-bold text-primary-400 mb-2">8.6</div>
                     <div className="text-white text-sm">GPA</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-secondary-400 mb-2">4+</div>
                     <div className="text-white text-sm">Internships</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-neon-400 mb-2">6+</div>
                     <div className="text-white text-sm">Projects</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-primary-400 mb-2">2025</div>
                     <div className="text-white text-sm">Graduation</div>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-theme-primary mb-8 text-center">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h4 className="text-xl font-bold text-white mb-2">GITAM University</h4>
                <p className="text-primary-400 font-semibold mb-2">B.Tech in Computer Science and Engineering</p>
                <p className="text-white text-sm mb-2">2021 - 2025</p>
                <p className="text-white">GPA: 8.6/10</p>
              </div>
              <div className="card">
                <h4 className="text-xl font-bold text-white mb-2">Sri Chaitanya Junior College</h4>
                <p className="text-primary-400 font-semibold mb-2">MPC, IPE Education</p>
                <p className="text-white text-sm mb-2">2019 - 2021</p>
                <p className="text-white">Percentage: 86.8%</p>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card group cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 