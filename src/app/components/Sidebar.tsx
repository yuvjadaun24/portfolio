import { motion } from 'motion/react';
import { useSound } from '../hooks/useSound';

export type Section = 'projects' | 'about' | 'skills' | 'contact';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const menuItems = [
  { id: 'projects' as Section, label: 'DASHBOARD' },
  { id: 'about' as Section, label: 'AGENT_PROFILE' },
  { id: 'skills' as Section, label: 'DIAGNOSTICS' },
  { id: 'contact' as Section, label: 'UPLINK' },
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { playBlip, playSelect } = useSound();

  return (
    <div className="w-64 h-full bg-black/55 border-r border-white/10 flex flex-col px-4 py-6">
      <div className="dvd-header text-white/70" style={{ fontSize: 14, letterSpacing: '0.14em' }}>
        COMMANDS
      </div>
      <div className="mt-4 h-px bg-white/10" />

      {menuItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            className={
              'mt-2 w-full text-left px-3 py-2 border border-white/10 bg-transparent dvd-body tracking-wider ' +
              (isActive ? 'text-cyan-200' : 'text-white/55 hover:text-white/80')
            }
            onClick={() => {
              playSelect();
              onSectionChange(item.id);
            }}
            onMouseEnter={() => playBlip()}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: menuItems.findIndex((m) => m.id === item.id) * 0.06 }}
          >
            <span className={isActive ? 'crt-glow-text' : ''}>
              {isActive ? '>> ' : '   '}
              {`[ ${item.label} ]`}
              {isActive ? <span className="terminal-cursor ml-2" aria-hidden="true" /> : null}
            </span>
          </motion.button>
        );
      })}

      <div className="mt-auto pt-4">
        <div className="h-px bg-white/10" />
        <div className="mt-4 dvd-body text-white/45" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
          {`// ARROW_KEYS: NAV`}
          <br />
          {`// ENTER: INTERACT`}
          <br />
          {`// ESC: EXIT`}
        </div>
      </div>
    </div>
  );
}
