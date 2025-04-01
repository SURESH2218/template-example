
import React from 'react';
import { BrainCircuit, Search, UserCheck, Zap } from 'lucide-react';

const AIFeatures: React.FC = () => {
  const features = [
    {
      id: '1',
      title: 'AI Research Assistant',
      description: 'Get personalized research recommendations based on your interests and past work.',
      icon: Search,
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      id: '2',
      title: 'Synergy Finder',
      description: 'Discover potential collaborators with complementary skills and research interests.',
      icon: UserCheck,
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    },
    {
      id: '3',
      title: 'Insight Generator',
      description: 'Extract key insights and connections from your research data and publications.',
      icon: Zap,
      color: 'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
    },
    {
      id: '4',
      title: 'Smart Literature Review',
      description: 'Automatically generate literature reviews for your research topics.',
      icon: BrainCircuit,
      color: 'bg-brand-100 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">AI-Powered Tools</h2>
      </div>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="p-3 rounded-lg border border-border hover:border-brand-200 dark:hover:border-brand-800 transition-all hover-lift"
          >
            <div className="flex gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${feature.color}`}>
                <feature.icon size={20} />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <button className="w-full text-center text-sm text-brand-600 hover:text-brand-700 font-medium py-1 interactive-link">
          Explore All AI Tools
        </button>
      </div>
    </div>
  );
};

export default AIFeatures;
