import { motion } from 'motion/react';
import { useSound } from '@/app/hooks/useSound';
import { PixelMonitor, PixelUser, PixelCode, PixelMail } from '@/app/components/icons/PixelIcons';

export type Section = 'projects' | 'about' | 'skills' | 'contact';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const menuItems = [
  { id: 'projects' as Section, icon: PixelMonitor, label: 'Projects' },
  { id: 'about' as Section, icon: PixelUser, label: 'About Me' },
  { id: 'skills' as Section, icon: PixelCode, label: 'Skills & Stack' },
  { id: 'contact' as Section, icon: PixelMail, label: 'Contact' },
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { playBlip, playSelect } = useSound();

  return (
    <div className="w-20 h-full bg-[#0044dd] flex flex-col items-center py-8 gap-4 border-r-4 border-black/20">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            className={`w-14 h-14 flex items-center justify-center rounded-md transition-all relative group ${
              isActive ? 'bg-[#6633ff] shadow-[0_0_20px_rgba(230,211,46,0.5)]' : 'bg-white/10 hover:bg-[#E6D32E] hover:shadow-[0_0_15px_rgba(230,211,46,0.3)]'
            }`}
            onClick={() => {
              playSelect();
              onSectionChange(item.id);
            }}
            onMouseEnter={() => playBlip()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.id === 'projects' ? 0 : menuItems.findIndex(m => m.id === item.id) * 0.1 }}
          >
            <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-white group-hover:text-black'}`} />
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-3 py-2 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {item.label}
            </div>

            {/* Active Indicator */}
            {isActive && (
              <motion.div
                className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#E6D32E]"
                layoutId="activeIndicator"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
