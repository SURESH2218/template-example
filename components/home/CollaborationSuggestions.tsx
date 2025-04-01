
import React from 'react';
import { Users, Atom, BrainCircuit } from 'lucide-react';

interface CollaborationItem {
  id: string;
  title: string;
  field: string;
  institution: string;
  description: string;
  members: number;
  icon: 'atom' | 'brain' | 'users';
}

const CollaborationSuggestions: React.FC = () => {
  const collaborations: CollaborationItem[] = [
    {
      id: '1',
      title: 'Antibiotic Resistance Research Group',
      field: 'Microbiology',
      institution: 'University of California',
      description: 'Investigating novel approaches to combat antibiotic resistance in bacteria through genomic analysis.',
      members: 12,
      icon: 'atom'
    },
    {
      id: '2',
      title: 'AI in Drug Discovery Initiative',
      field: 'Computational Biology',
      institution: 'MIT & Stanford University',
      description: 'Leveraging machine learning algorithms to accelerate the drug discovery process.',
      members: 8,
      icon: 'brain'
    },
    {
      id: '3',
      title: 'Cancer Immunotherapy Consortium',
      field: 'Oncology',
      institution: 'Memorial Sloan Kettering',
      description: 'Developing new immunotherapy approaches for treating resistant cancer types.',
      members: 15,
      icon: 'users'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'atom':
        return <Atom className="text-green-500" />;
      case 'brain':
        return <BrainCircuit className="text-brand-600" />;
      case 'users':
        return <Users className="text-blue-500" />;
      default:
        return <Users className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Collaboration Opportunities</h2>
      </div>
      <div className="p-3 space-y-3">
        {collaborations.map((collab) => (
          <div 
            key={collab.id}
            className="p-3 rounded-lg border border-border hover:border-brand-200 dark:hover:border-brand-800 transition-colors hover-lift"
          >
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {getIcon(collab.icon)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{collab.title}</h3>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">{collab.field}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{collab.institution}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{collab.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-muted-foreground">{collab.members} researchers</span>
                  <button className="px-3 py-1 bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded text-xs font-medium transition-colors hover:bg-brand-200 dark:hover:bg-brand-900/40">
                    Express Interest
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <button className="w-full text-center text-sm text-brand-600 hover:text-brand-700 font-medium py-1 interactive-link">
          Explore More Collaborations
        </button>
      </div>
    </div>
  );
};

export default CollaborationSuggestions;
