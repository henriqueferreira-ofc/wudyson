import { PropertyData } from '../types';

export const properties: PropertyData[] = [
    {
        id: "1",
        title: "Mansão Horizon",
        price: "R$ 12.500.000",
        location: "Alphaville, SP",
        neighborhood: "Residencial 1",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1040/600/400",
        images: [
            "https://picsum.photos/id/1040/800/600",
            "https://picsum.photos/id/164/800/600",
            "https://picsum.photos/id/122/800/600",
            "https://picsum.photos/id/188/800/600",
            "https://picsum.photos/id/234/800/600",
            "https://picsum.photos/id/201/800/600",
            "https://picsum.photos/id/221/800/600",
            "https://picsum.photos/id/274/800/600",
            "https://picsum.photos/id/284/800/600",
            "https://picsum.photos/id/294/800/600"
        ],
        description: "Uma obra-prima da arquitetura moderna, a Mansão Horizon redefine o conceito de luxo. Com vistas panorâmicas deslumbrantes, esta residência oferece o equilíbrio perfeito entre sofisticação e conforto.",
        features: {
            area: 1200,
            bedrooms: 5,
            suites: 5,
            parking: 8
        }
    },
    {
        id: "2",
        title: "Villa Toscana",
        price: "R$ 8.900.000",
        location: "Barueri, SP",
        neighborhood: "Tamboré 10",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1039/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1050 + i}/800/600`),
        description: "Inspiração italiana com acabamentos em mármore travertino. Área de lazer completa com piscina aquecida e espaço gourmet integrado.",
        features: {
            area: 850,
            bedrooms: 4,
            suites: 4,
            parking: 6
        }
    },
    {
        id: "3",
        title: "Cobertura Diamond",
        price: "R$ 15.000.000",
        location: "São Paulo, SP",
        neighborhood: "Jardins",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1038/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1060 + i}/800/600`),
        description: "Duplex exclusivo no coração dos Jardins. Vista 360º da cidade e privacidade total.",
        features: {
            area: 600,
            bedrooms: 4,
            suites: 4,
            parking: 5
        }
    },
    {
        id: "4",
        title: "Residência Crystal",
        price: "R$ 6.500.000",
        location: "Santana de Parnaíba, SP",
        neighborhood: "Genesis II",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1037/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1070 + i}/800/600`),
        description: "Projeto contemporâneo em meio à natureza. Sustentabilidade e tecnologia em cada detalhe.",
        features: {
            area: 550,
            bedrooms: 4,
            suites: 4,
            parking: 4
        }
    },
    {
        id: "5",
        title: "Palacete Classic",
        price: "R$ 22.000.000",
        location: "São Paulo, SP",
        neighborhood: "Morumbi",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1036/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1080 + i}/800/600`),
        description: "História e requinte em uma propriedade única. Jardins assinados por Burle Marx.",
        features: {
            area: 1500,
            bedrooms: 6,
            suites: 6,
            parking: 12
        }
    },
    {
        id: "6",
        title: "Loft Industrial",
        price: "R$ 3.200.000",
        location: "São Paulo, SP",
        neighborhood: "Vila Madalena",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1035/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1030 + i}/800/600`),
        description: "Pé direito duplo, tijolos aparentes e muita luz natural. O estilo de vida urbano em sua melhor forma.",
        features: {
            area: 220,
            bedrooms: 2,
            suites: 2,
            parking: 3
        }
    },
    {
        id: "7",
        title: "Casa do Lago",
        price: "R$ 9.800.000",
        location: "Itu, SP",
        neighborhood: "Terras de São José",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1033/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1020 + i}/800/600`),
        description: "Refúgio de campo com acesso privativo ao lago. Lazer completo para toda a família.",
        features: {
            area: 900,
            bedrooms: 5,
            suites: 5,
            parking: 8
        }
    },
    {
        id: "8",
        title: "Apartamento Garden",
        price: "R$ 4.500.000",
        location: "São Paulo, SP",
        neighborhood: "Itaim Bibi",
        status: "VENDA",
        coverImage: "https://picsum.photos/id/1032/600/400",
        images: Array(10).fill("").map((_, i) => `https://picsum.photos/id/${1010 + i}/800/600`),
        description: "A sensação de morar em uma casa com a segurança de um apartamento. Área externa privativa com jacuzzi.",
        features: {
            area: 320,
            bedrooms: 3,
            suites: 3,
            parking: 4
        }
    }
];
