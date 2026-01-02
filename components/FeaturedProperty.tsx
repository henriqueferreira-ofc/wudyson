import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropertyData } from '../types';

// Simplified property for home display (matching new PropertyData interface partially)
const property: Partial<PropertyData> & { imageUrl: string } = { // Legacy adapter
  title: "Mansão Horizon",
  price: "R$ 12.500.000",
  location: "Alphaville, SP",
  imageUrl: "https://picsum.photos/id/1040/600/400"
};

const FeaturedProperty: React.FC = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate('/oportunidades');
  };

  return (
    <div className="px-6 py-6 w-full">
      <h3 className="text-white text-xs uppercase tracking-widest font-semibold mb-3 border-l-2 border-gold pl-2">
        Oportunidade do Mês
      </h3>

      <div
        onClick={handleDetailsClick}
        className="bg-black/30 rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-gold/30 transition-all duration-300"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-gold text-black text-xs font-bold px-2 py-1 rounded">
            VENDA
          </div>
        </div>

        <div className="p-4">
          <h4 className="text-white font-bold text-lg">{property.title}</h4>
          <p className="text-gray-300 text-xs mb-3 flex items-center gap-1">
            <i className="fa-solid fa-map-pin text-gold text-[10px]"></i> {property.location}
          </p>

          <div className="flex justify-between items-center mt-2">
            <span className="text-gold font-bold">{property.price}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDetailsClick();
              }}
              className="text-xs text-white border border-white/30 px-3 py-1 rounded hover:bg-gold hover:text-black transition-colors cursor-pointer relative z-10"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;