import React from 'react';
import wudyson from '../src/assets/wudyson.png';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 pb-2">
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 bg-gold rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
        <img
          src={wudyson}
          alt="Foto do perfil"
          className="relative w-32 h-32 rounded-full border-4 border-gold object-cover shadow-lg transform transition duration-500 group-hover:scale-105"
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold text-white tracking-wide uppercase">
        WUDYSON FERREIRA
      </h1>
      <h2 className="text-sm text-gold font-semibold tracking-wider uppercase mb-3">
        Corretor de Imóveis de Luxo
      </h2>

      <p className="text-gray-200 text-sm max-w-xs leading-relaxed italic">
        "Transformando sonhos em endereços exclusivos."
      </p>
    </div>
  );
};

export default ProfileHeader;
