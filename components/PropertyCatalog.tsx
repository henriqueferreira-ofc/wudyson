import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassContainer from './GlassContainer';
import { properties } from '../data/properties';

const PropertyCatalog: React.FC = () => {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`
      relative z-10 w-full max-w-[800px] px-4
      transition-all duration-1000 ease-out transform
      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `}>
            <GlassContainer className="w-full flex flex-col min-h-[80vh] pb-8">
                {/* Header / Back Button */}
                <div className="relative z-20 p-4 border-b border-white/10 flex items-center gap-3">
                    <button
                        onClick={() => navigate('/')}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors text-white hover:text-gold"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-white uppercase tracking-wider">Oportunidades do Mês</h1>
                        <p className="text-xs text-gold">
                            Confira nossa seleção exclusiva
                        </p>
                    </div>
                </div>

                {/* Grid de Cards */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            onClick={() => navigate(`/oportunidades/${property.id}`)}
                            className="bg-black/30 rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={property.coverImage}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute top-2 right-2 text-black text-xs font-bold px-2 py-1 rounded ${property.status === 'VENDA' ? 'bg-gold' : 'bg-white'}`}>
                                    {property.status}
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white font-bold text-lg leading-tight mb-1">{property.title}</h3>
                                <p className="text-gray-300 text-xs mb-3 flex items-center gap-1">
                                    <i className="fa-solid fa-map-pin text-gold text-[10px]"></i>
                                    {property.location} {property.neighborhood && `- ${property.neighborhood}`}
                                </p>

                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                                    <span className="text-gold font-bold text-lg">{property.price}</span>
                                    <button className="text-xs text-white border border-white/30 px-3 py-1.5 rounded hover:bg-gold hover:text-black transition-colors cursor-pointer relative z-10">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </GlassContainer>
        </div>
    );
};

export default PropertyCatalog;
