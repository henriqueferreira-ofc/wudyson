import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GlassContainer from './GlassContainer';
import { properties } from '../data/properties';

const PropertyDetails: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [loaded, setLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Find property
    const property = properties.find(p => p.id === id);

    useEffect(() => {
        setLoaded(true);
        window.scrollTo(0, 0);
    }, [id]);

    if (!property) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Imóvel não encontrado</h2>
                    <button onClick={() => navigate('/oportunidades')} className="text-gold underline">Voltar para o catálogo</button>
                </div>
            </div>
        );
    }

    const handleWhatsAppClick = () => {
        const message = `Olá! Gostaria de mais informações sobre o imóvel: ${property.title} (${property.price})`;
        const url = `https://wa.me/5591999035012?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className={`
      relative z-10 w-full max-w-[800px] px-4
      transition-all duration-1000 ease-out transform
      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `}>
            <GlassContainer className="w-full flex flex-col min-h-[80vh] pb-8">

                {/* Header / Back Button */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-md z-20 rounded-t-xl">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/oportunidades')}
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors text-white hover:text-gold"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ml-1 mb-1 inline-block ${property.status === 'VENDA' ? 'bg-gold text-black' : 'bg-white text-black'}`}>
                                {property.status}
                            </span>
                            <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">{property.title}</h1>
                        </div>
                    </div>
                    <div className="text-right hidden sm:block">
                        <p className="text-xl font-bold text-gold">{property.price}</p>
                    </div>
                </div>

                <div className="p-4 space-y-6">

                    {/* Price (Mobile only) */}
                    <div className="sm:hidden text-center bg-white/5 p-3 rounded-lg border border-white/10">
                        <p className="text-2xl font-bold text-gold">{property.price}</p>
                    </div>

                    {/* Gallery - 1 Hero + Grid */}
                    <div className="space-y-2">
                        {/* Hero Image */}
                        <div
                            className="aspect-video w-full rounded-xl overflow-hidden cursor-pointer group relative"
                            onClick={() => setSelectedImage(property.images[0])}
                        >
                            <img
                                src={property.images[0]}
                                alt={`${property.title} - Principal`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                                <i className="fa-solid fa-expand text-white drop-shadow-lg text-4xl"></i>
                            </div>
                        </div>

                        {/* Thumbnails Grid (9 remaining) */}
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                            {property.images.slice(1, 10).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="aspect-square rounded-lg overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-opacity relative group"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img} alt={`Foto ${idx + 2}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest font-semibold mb-2 border-l-2 border-gold pl-2">
                                    Descrição
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest font-semibold mb-2 border-l-2 border-gold pl-2">
                                    Características
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {property.features?.area && (
                                        <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 p-2 rounded">
                                            <i className="fa-solid fa-ruler-combined text-gold w-4 text-center"></i> {property.features.area}m²
                                        </div>
                                    )}
                                    {property.features?.bedrooms && (
                                        <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 p-2 rounded">
                                            <i className="fa-solid fa-bed text-gold w-4 text-center"></i> {property.features.bedrooms} Quartos
                                        </div>
                                    )}
                                    {property.features?.suites && (
                                        <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 p-2 rounded">
                                            <i className="fa-solid fa-bath text-gold w-4 text-center"></i> {property.features.suites} Suítes
                                        </div>
                                    )}
                                    {property.features?.parking && (
                                        <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 p-2 rounded">
                                            <i className="fa-solid fa-car text-gold w-4 text-center"></i> {property.features.parking} Vagas
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-start gap-2 text-gray-400 text-xs mt-4">
                                <i className="fa-solid fa-location-dot text-gold mt-0.5"></i>
                                <span>{property.location} {property.neighborhood && `• ${property.neighborhood}`}</span>
                            </div>
                        </div>

                        {/* CTA Sidebar/Bottom */}
                        <div className="md:col-span-1">
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-[#128C7E] transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                            >
                                <i className="fa-brands fa-whatsapp text-xl"></i>
                                Falar no WhatsApp
                            </button>
                            <p className="text-[10px] text-center text-gray-500 mt-2">
                                Envie uma mensagem direta sobre este imóvel.
                            </p>
                        </div>
                    </div>

                </div>
            </GlassContainer>

            {/* Lightbox / Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-gold text-4xl">
                        &times;
                    </button>
                    <img
                        src={selectedImage}
                        alt="Zoom"
                        className="max-w-full max-h-[90vh] rounded shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default PropertyDetails;
