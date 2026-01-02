import React from 'react';
import { ActionButtonProps } from '../types';

const actions: ActionButtonProps[] = [
  {
    iconClass: 'fa-brands fa-whatsapp',
    label: 'WhatsApp',
    colorClass: 'text-green-400',
    onClick: () => window.open('https://wa.me/5591999035012', '_blank'),
  },
  {
    iconClass: 'fa-solid fa-location-dot',
    label: 'Escritório',
    colorClass: 'text-red-400',
    onClick: () => window.open('https://maps.app.goo.gl/xfQRyphGShmqCK6y5', '_blank'),
  },
  {
    iconClass: 'fa-solid fa-envelope',
    label: 'E-mail',
    colorClass: 'text-blue-300',
    onClick: () => window.location.href = 'mailto:wudyson@hotmail.com',
  },
  {
    iconClass: 'fa-solid fa-globe',
    label: 'Portfólio',
    colorClass: 'text-purple-300',
    onClick: () => window.open('https://www.henriqueportfolio.com/', '_blank'),
  },
];

const ActionGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 py-4 w-full">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="
            flex flex-col items-center justify-center 
            p-4 
            bg-white/5 hover:bg-white/10 
            border border-white/10 hover:border-gold/50
            rounded-2xl 
            transition-all duration-300 
            transform hover:scale-105 hover:shadow-lg
            group
          "
        >
          <i className={`${action.iconClass} text-2xl mb-2 ${action.colorClass || 'text-white'} group-hover:text-gold transition-colors duration-300`}></i>
          <span className="text-xs font-medium text-white tracking-wide">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionGrid;
