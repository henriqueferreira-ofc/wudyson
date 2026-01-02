import React from 'react';

const SaveContactButton: React.FC = () => {
  const handleSave = () => {
    alert("Simulação: Contato salvo na agenda!");
  };

  return (
    <div className="px-6 py-2 w-full">
      <button
        onClick={handleSave}
        className="
          w-full 
          bg-gold hover:bg-gold-light 
          text-black font-bold 
          py-4 px-6 
          rounded-xl 
          shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]
          flex items-center justify-center gap-3
          transition-all duration-300 
          transform hover:scale-105 active:scale-95
        "
      >
        <i className="fa-solid fa-address-book text-xl"></i>
        <span className="tracking-wider text-sm md:text-base">SALVAR NA AGENDA</span>
      </button>
    </div>
  );
};

export default SaveContactButton;