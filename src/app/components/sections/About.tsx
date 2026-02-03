import { motion } from 'motion/react';
import { aboutData } from '@/app/data/portfolio-data';
import { Award, Briefcase, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <h2 className="text-white uppercase tracking-wider" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
          <span className="hidden md:inline" style={{ fontSize: '14px' }}>About Me</span>
          <span className="md:hidden">About Me</span>
        </h2>
      </div>

      <div className="flex-1 bg-[#b0b0b0] p-8 overflow-y-auto">
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Card */}
          <div className="bg-white p-6 rounded-sm shadow-md border-2 border-black/10">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#6633ff] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                YJ
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-1">{aboutData.name}</h3>
                <p className="text-[#6633ff] font-semibold mb-2">{aboutData.role}</p>
                <p className="text-black/70 text-sm">{aboutData.experience}</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <motion.div
            className="bg-white p-6 rounded-sm shadow-md border-2 border-black/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-[#6633ff]" />
              <h4 className="font-bold text-black">Professional Summary</h4>
            </div>
            <p className="text-black/90 leading-relaxed">{aboutData.bio}</p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="bg-white p-6 rounded-sm shadow-md border-2 border-black/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#6633ff]" />
              <h4 className="font-bold text-black">Highlights</h4>
            </div>
            <div className="space-y-3">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Target className="w-4 h-4 text-[#6633ff] mt-1 flex-shrink-0" />
                  <p className="text-black/90">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
