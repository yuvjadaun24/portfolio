import { motion } from 'motion/react';
import { useState } from 'react';
import { caseStudies } from '@/app/data/portfolio-data';
import { useSound } from '@/app/hooks/useSound';

export default function CaseStudies() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { playBlip } = useSound();

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <h2 className="text-white uppercase tracking-wider" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
          <span className="hidden md:inline" style={{ fontSize: '14px' }}>Case Studies</span>
          <span className="md:hidden">Case Studies</span>
        </h2>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Case Study List */}
        <div className="w-full md:w-2/5 bg-[#b0b0b0] overflow-y-auto border-b-2 md:border-b-0 md:border-r-2 border-black/20 max-h-48 md:max-h-full">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className={`px-4 py-3 cursor-pointer border-b border-black/10 transition-colors ${
                selectedIndex === index ? 'bg-[#E6D32E] text-black' : 'hover:bg-[#c5c5c5]'
              }`}
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => playBlip()}
              whileHover={{ x: 4 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-black font-bold text-sm">{study.id}.</span>
                <span className={`text-sm ${selectedIndex === index ? 'font-bold' : ''}`}>
                  {study.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Details */}
        <div className="flex-1 bg-[#d0d0d0] p-4 md:p-6 overflow-y-auto">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-4 md:p-6 rounded-sm shadow-md border-2 border-black/10">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-black">{caseStudies[selectedIndex].title}</h3>
              <p className="text-sm md:text-base text-black/80 mb-6 italic">{caseStudies[selectedIndex].description}</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Challenge:</p>
                  <p className="text-sm md:text-base text-black/90 leading-relaxed">{caseStudies[selectedIndex].challenge}</p>
                </div>

                <div>
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Solution:</p>
                  <p className="text-sm md:text-base text-black/90 leading-relaxed">{caseStudies[selectedIndex].solution}</p>
                </div>

                <div className="bg-[#E6D32E]/30 p-4 rounded-sm border-l-4 border-[#6633ff]">
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Result:</p>
                  <p className="text-sm md:text-base text-black font-semibold leading-relaxed">{caseStudies[selectedIndex].result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
