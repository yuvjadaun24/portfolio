import { motion } from 'motion/react';
import { skills } from '@/app/data/portfolio-data';
import { Code, Palette, Layout, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Design Tools': Palette,
  'Frontend': Code,
  'UI Frameworks': Layout,
  'Other Skills': Sparkles,
};

export default function Skills() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <h2 className="text-white uppercase tracking-wider" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
          <span className="hidden md:inline" style={{ fontSize: '14px' }}>Skills & Stack</span>
          <span className="md:hidden">Skills</span>
        </h2>
      </div>

      <div className="flex-1 bg-[#b0b0b0] p-8 overflow-y-auto">
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skillGroup, groupIndex) => {
            const Icon = categoryIcons[skillGroup.category] || Code;
            
            return (
              <motion.div
                key={groupIndex}
                className="bg-white p-6 rounded-sm shadow-md border-2 border-black/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#6633ff] rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-black text-lg">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="px-3 py-2 bg-[#E6D32E] text-black text-sm rounded-sm border border-black/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: '#f0e68c' }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="max-w-4xl mx-auto mt-6 bg-[#6633ff] p-6 rounded-sm shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white text-center" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
            Constantly learning and adapting to new technologies
          </p>
        </motion.div>
      </div>
    </div>
  );
}
