
import React from 'react';
import { UserPlus } from 'lucide-react';

interface SuggestedUser {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  mutualConnections: number;
}

const NetworkSuggestions: React.FC = () => {
  const suggestions: SuggestedUser[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Research Scientist',
      organization: 'MIT BioLab',
      avatar: 'https://i.pravatar.cc/100?img=5',
      mutualConnections: 12
    },
    {
      id: '2',
      name: 'Prof. Michael Lee',
      role: 'Department Chair',
      organization: 'Stanford University',
      avatar: 'https://i.pravatar.cc/100?img=3',
      mutualConnections: 8
    },
    {
      id: '3',
      name: 'Dr. Lisa Wong',
      role: 'Clinical Researcher',
      organization: 'GeneTech Pharma',
      avatar: 'https://i.pravatar.cc/100?img=9',
      mutualConnections: 5
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">People You May Know</h2>
      </div>
      <div className="p-2">
        {suggestions.map((user) => (
          <div 
            key={user.id}
            className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{user.name}</h3>
                <p className="text-xs text-muted-foreground">{user.role} at {user.organization}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{user.mutualConnections} mutual connections</p>
              </div>
              <button className="p-1.5 text-brand-600 hover:text-brand-700 hover:bg-brand-50 dark:hover:bg-brand-900/20 rounded-full transition-colors">
                <UserPlus size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <button className="w-full text-center text-sm text-brand-600 hover:text-brand-700 font-medium py-1 interactive-link">
          View More Suggestions
        </button>
      </div>
    </div>
  );
};

export default NetworkSuggestions;
