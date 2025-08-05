
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialMedia = [
    { icon: Github, label: "GitHub", url: "https://github.com/gsahara2007", color: "text-theme-secondary hover:text-theme-primary" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/harini-ganesula-55a1aa2a5", color: "text-blue-400 hover:text-blue-500" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/harini_ganesula", color: "text-blue-400 hover:text-blue-500" },
    { icon: Mail, label: "Email", url: "mailto:gsahara2207@gmail.com", color: "text-pink-400 hover:text-pink-500" },
  ];

  const sections = ["About", "Skills", "Projects", "Contact"];

  return (
    <footer className="bg-black/50 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Branding & Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-white">Harini's Portfolio</h2>
          <p className="text-sm leading-relaxed text-white">
            Passionate about creating meaningful digital experiences. From elegant UI designs to robust solutions.
          </p>
          <div className="flex gap-4 mt-5">
            {socialMedia.map(({ icon: Icon, label, url, color }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full p-2 bg-theme-card ${color} transition`}
                whileHover={{ scale: 1.2 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Site Navigation */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    const el = document.querySelector(`#${section.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white !text-white hover:text-white transition-colors"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-white">Get in Touch</h3>
          <ul className="text-sm space-y-2 text-white">
            <li>Email: <span className="text-white">gsahara2207@gmail.com</span></li>
            <li>Location: <span className="text-white">Hyderabad, Telangana</span></li>
            <li>Status: <span className="text-green-400">Available for freelance</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-theme-muted mt-12 pt-6 flex items-center justify-between text-sm text-white">
        <p className="text-white">© {new Date().getFullYear()} Harini. Designed with passion & precision.</p>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          className="text-white hover:text-white transition"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={24} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
