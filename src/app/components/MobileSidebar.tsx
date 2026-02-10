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
    <div
      className="w-full bg-black/50 backdrop-blur-sm flex items-center justify-around border-t border-white/10"
      style={{
        paddingTop: 'clamp(6px, 1.2vh, 12px)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 4px), clamp(6px, 1.2vh, 12px))',
      }}
    >
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-sm transition-all relative ${
              isActive ? 'text-cyan-200' : 'text-white/55 hover:text-white/80'
            }`}
            style={{
              background: isActive ? 'rgba(0,224,255,0.08)' : 'transparent',
              border: isActive ? '1px solid rgba(0,224,255,0.2)' : '1px solid transparent',
            }}
            onClick={() => {
              playSelect();
              onSectionChange(item.id);
            }}
            onMouseEnter={() => playBlip()}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-cyan-200' : 'text-white/55'}`} />
            <span
              className="uppercase dvd-body"
              style={{ fontSize: 'clamp(7px, 1.2vw, 9px)', letterSpacing: '0.12em' }}
            >
              {item.label.split(' ')[0]}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
