export interface PropertyData {
  id: string; // Add id for routing
  title: string;
  price: string;
  location: string;
  imageUrl: string; // Keep for legacy/compatibility if needed, or focus on 'coverImage'

  // Enhanced Fields
  status: 'VENDA' | 'ALUGUEL';
  coverImage: string;
  images: string[];
  description: string;
  neighborhood?: string;
  features?: {
    area?: number;
    bedrooms?: number;
    suites?: number;
    parking?: number;
  };
}