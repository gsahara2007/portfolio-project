import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [animatedSkills, setAnimatedSkills] = useState(false)

  useEffect(() => {
    if (inView && !animatedSkills) {
      setAnimatedSkills(true)
    }
  }, [inView, animatedSkills])

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

  const skillCategories = [
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "Machine Learning", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "NLP", level: 75, color: "from-green-400 to-green-600" },
        { name: "Data Analysis", level: 82, color: "from-purple-400 to-purple-600" },
        { name: "WEKA", level: 70, color: "from-indigo-400 to-indigo-600" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 85, color: "from-red-400 to-red-600" },
        { name: "TypeScript", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Javascript", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "React", level: 82, color: "from-cyan-400 to-cyan-600" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Java", level: 75, color: "from-red-400 to-red-600" },
        { name: "C", level: 70, color: "from-blue-400 to-blue-600" },
        { name: "SQL", level: 80, color: "from-green-400 to-green-600" },
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Algorithm Design", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Data Structures", level: 82, color: "from-pink-400 to-pink-600" },
        { name: "Problem Solving", level: 85, color: "from-indigo-400 to-indigo-600" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 pt-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skill Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants} className="card space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x text-center mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-white text-sm">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className={`skill-fill bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={animatedSkills ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
