import { motion } from 'motion/react';
import { contactData } from '@/app/data/portfolio-data';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    { icon: Mail, label: 'Email', value: contactData.email, link: `mailto:${contactData.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: contactData.linkedin, link: `https://${contactData.linkedin}` },
    { icon: Github, label: 'GitHub', value: contactData.github, link: `https://${contactData.github}` },
    { icon: MapPin, label: 'Location', value: contactData.location, link: null },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <h2 className="text-white uppercase tracking-wider" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
          <span className="hidden md:inline" style={{ fontSize: '14px' }}>Contact</span>
          <span className="md:hidden">Contact</span>
        </h2>
      </div>

      <div className="flex-1 bg-[#b0b0b0] p-8 overflow-y-auto flex items-center justify-center">
        <motion.div
          className="max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-sm shadow-lg border-2 border-black/10">
            <motion.h3
              className="text-2xl font-bold text-black mb-2 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let's Connect
            </motion.h3>
            <motion.p
              className="text-black/70 text-center mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Feel free to reach out for collaborations or just a friendly chat
            </motion.p>

            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    className={`flex items-center gap-4 p-4 rounded-sm border-2 border-black/10 transition-all ${
                      item.link ? 'bg-[#E6D32E] hover:bg-[#f0e68c] cursor-pointer' : 'bg-gray-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={item.link ? { scale: 1.02, x: 4 } : {}}
                  >
                    <div className="w-12 h-12 bg-[#6633ff] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase font-bold text-black/60">{item.label}</p>
                      <p className="text-black font-semibold truncate">{item.value}</p>
                    </div>
                  </motion.div>
                );

                return item.link ? (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <motion.div
              className="mt-8 text-center bg-[#6633ff] p-4 rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-white text-sm" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
                Available for freelance projects
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
