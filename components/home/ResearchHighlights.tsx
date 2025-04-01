
import React from 'react';

interface ResearchItem {
  id: string;
  title: string;
  journal: string;
  date: string;
  image: string;
  citations: number;
}

const ResearchHighlights: React.FC = () => {
  const researchItems: ResearchItem[] = [
    {
      id: '1',
      title: 'Advancements in Gene Therapy for Rare Diseases',
      journal: 'Nature Biotechnology',
      date: 'Mar 2023',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      citations: 87
    },
    {
      id: '2',
      title: 'Novel Drug Delivery Systems Using Nanoparticles',
      journal: 'Journal of Controlled Release',
      date: 'Jan 2023',
      image: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      citations: 42
    },
    {
      id: '3',
      title: 'Computational Methods for Drug Discovery',
      journal: 'Scientific Reports',
      date: 'Feb 2023',
      image: 'https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      citations: 65
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Research Highlights</h2>
      </div>
      <div className="p-2">
        {researchItems.map((item) => (
          <a 
            key={item.id}
            href="#"
            className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hover-lift"
          >
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground line-clamp-2">{item.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">{item.journal} • {item.date}</p>
                  <span className="text-xs px-1.5 py-0.5 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded">
                    {item.citations} citations
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <button className="w-full text-center text-sm text-brand-600 hover:text-brand-700 font-medium py-1 interactive-link">
          Explore More Research
        </button>
      </div>
    </div>
  );
};

export default ResearchHighlights;
