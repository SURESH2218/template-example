
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

const MarketplaceHighlights: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: '1',
      title: 'Digital Microscope PRO Series',
      category: 'Lab Equipment',
      price: 1299,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Chemical Analysis Kit - Complete Set',
      category: 'Chemicals & Reagents',
      price: 549,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Laboratory Incubator (20L)',
      category: 'Lab Equipment',
      price: 899,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Marketplace Highlights</h2>
      </div>
      <div className="p-3 grid gap-3 grid-cols-1">
        {products.map((product) => (
          <div 
            key={product.id}
            className="rounded-lg overflow-hidden border border-border hover-lift"
          >
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
              <img 
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">{product.category}</span>
                  <h3 className="font-medium text-foreground line-clamp-1">{product.title}</h3>
                </div>
                <div className="flex items-center gap-0.5 text-amber-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold">${product.price}</span>
                <button className="flex items-center gap-1 px-2 py-1 bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded text-xs font-medium transition-colors hover:bg-brand-200 dark:hover:bg-brand-900/40">
                  <ShoppingCart size={14} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <button className="w-full text-center text-sm text-brand-600 hover:text-brand-700 font-medium py-1 interactive-link">
          Visit Marketplace
        </button>
      </div>
    </div>
  );
};

export default MarketplaceHighlights;
