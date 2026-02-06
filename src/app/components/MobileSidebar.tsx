import { motion } from 'motion/react';
import { useSound } from '@/app/hooks/useSound';
import { Section } from '@/app/components/Sidebar';
import { PixelMonitor, PixelUser, PixelCode, PixelMail } from '@/app/components/icons/PixelIcons';

interface MobileSidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const menuItems = [
  { id: 'projects' as Section, icon: PixelMonitor, label: 'Projects' },
  { id: 'about' as Section, icon: PixelUser, label: 'About Me' },
  { id: 'skills' as Section, icon: PixelCode, label: 'Skills' },
  { id: 'contact' as Section, icon: PixelMail, label: 'Contact' },
];

export default function MobileSidebar({ activeSection, onSectionChange }: MobileSidebarProps) {
  const { playBlip, playSelect } = useSound();

  return (
    <div className="w-full bg-[#0044dd] flex items-center justify-around py-3 border-b-4 border-black/20">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-md transition-all group ${
              isActive ? 'bg-[#6633ff] shadow-[0_0_15px_rgba(230,211,46,0.3)]' : 'bg-white/10 hover:bg-[#E6D32E]'
            }`}
            onClick={() => {
              playSelect();
              onSectionChange(item.id);
            }}
            onMouseEnter={() => playBlip()}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-white group-hover:text-black'}`} />
            <span className={`text-[8px] uppercase transition-colors ${isActive ? 'text-white' : 'text-white group-hover:text-black'}`}>{item.label.split(' ')[0]}</span>
            
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#E6D32E]"
                layoutId="mobileActiveIndicator"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
