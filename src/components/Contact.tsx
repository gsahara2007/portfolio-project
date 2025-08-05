import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Encode form data for Netlify
      const formDataEncoded = new URLSearchParams()
      formDataEncoded.append('name', formData.name)
      formDataEncoded.append('email', formData.email)
      formDataEncoded.append('subject', formData.subject)
      formDataEncoded.append('message', formData.message)
      
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded.toString()
      })
      
      if (response.ok) {
        // Reset form on success
        setFormData({ name: '', email: '', subject: '', message: '' })
        alert('Message sent successfully! I\'ll get back to you soon.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or contact me directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gsahara2207@gmail.com",
      href: "mailto:gsahara2207@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 87121xxxxx",
      href: "tel:+9187121xxxxx"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, Telangana",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gsahara2007",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harini-ganesula-55a1aa2a5",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/harini_ganesula",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-20 pt-32 relative">
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
              Get In <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants} className="card">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6">Send me a message</h3>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Netlify Forms hidden input */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot field for spam protection */}
                <div className="hidden">
                  <input name="bot-field" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-400/30 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary-500/20"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 backdrop-blur-sm border border-primary-400/30 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary-500/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 backdrop-blur-sm border border-primary-400/30 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary-500/20"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800/50 backdrop-blur-sm border border-primary-400/30 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-primary-500/20 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:scale-110 transition-transform">
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{info.title}</h4>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="card">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6">Follow me</h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={24} className="text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 