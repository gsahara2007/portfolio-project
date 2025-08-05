import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Internships = () => {
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

  const internships = [
    {
      title: "Credit Card Fraud Detection",
      company: "IIT Hyderabad",
      duration: "Dec 2023 - Jan 2024",
      description: "ML techniques: Decision Trees, Random Forests, Neural Networks",
      logo: "/iith.png",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "AI Application using WEKA",
      company: "DRDL",
      duration: "Nov 2023 - Dec 2023",
      description: "ML Algorithms, AI Techniques, Data Interpretation",
      logo: "/drdo.png",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Google AI-ML Virtual Intern",
      company: "AICTE",
      duration: "Sep 2023 - Oct 2023",
      description: "ML, NLP Algorithm Design, TensorFlow Proficiency",
      logo: "/aicte.png",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Front-End Dev Real Time Project",
      company: "IBM",
      duration: "Jul 2023 - Aug 2023",
      description: "MySQL, HTML/CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const certifications = [
    {
      title: "AI&ML with Data Science Workshop",
      issuer: "IIT Hyderabad",
      year: "2024",
      description: "Comprehensive workshop on AI/ML and data science fundamentals",
      icon: "🎓"
    },
    {
      title: "Research opportunities in Computer Science (ROCS)",
      issuer: "IIT Hyderabad",
      year: "2024",
      description: "Advanced research methodologies in computer science",
      icon: "🔬"
    },
    {
      title: "Research data in Generative AI",
      issuer: "IIT Hyderabad",
      year: "2024",
      description: "Cutting-edge research in generative artificial intelligence",
      icon: "🤖"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      year: "2024",
      description: "Comprehensive understanding of computer networking fundamentals",
      icon: "🌐"
    }
  ]

  return (
    <section id="internships" className="py-20 pt-32 relative">
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
              Internships & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">Experiences</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
              Hands-on experience with cutting-edge technologies and real-world applications
            </p>
          </motion.div>

          {/* Internships Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="card text-center hover:scale-105 transition-transform cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="mb-4 p-3 mx-auto w-fit">
                  <img 
                    src={internship.logo} 
                    alt={`${internship.company} logo`}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      // Fallback to a simple text if logo fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-16 h-16 flex items-center justify-center text-white font-bold text-lg hidden">
                    {internship.company.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-2">{internship.title}</h4>
                <p className="text-white text-sm mb-1">{internship.company}</p>
                <p className="text-white text-xs mb-3">{internship.duration}</p>
                <p className="text-white text-xs">{internship.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x text-center mb-8">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="card text-center hover:scale-105 transition-transform cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-2">{cert.title}</h4>
                  <p className="text-white text-sm mb-1">{cert.issuer}</p>
                  <p className="text-white text-xs mb-3">{cert.year}</p>
                  <p className="text-white text-xs">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Internships 