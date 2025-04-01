
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface ConferenceItem {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

const UpcomingConferences: React.FC = () => {
  const conferences: ConferenceItem[] = [
    {
      id: '1',
      title: 'International Pharmaceutical Sciences Congress',
      date: 'June 15-18, 2023',
      location: 'Boston, MA',
      attendees: 1250,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '2',
      title: 'Biotechnology Innovation Summit',
      date: 'July 8-10, 2023',
      location: 'San Francisco, CA',
      attendees: 850,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Upcoming Conferences</h2>
      </div>
      <div className="p-3">
        {conferences.map((conf) => (
          <div 
            key={conf.id}
            className="mb-3 last:mb-0 hover-lift"
          >
            <div className="relative h-36 rounded-lg overflow-hidden mb-3">
              <img 
                src={conf.image}
                alt={conf.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <h3 className="font-medium text-white">{conf.title}</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                <span>{conf.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>{conf.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users size={14} />
                <span>{conf.attendees} attendees</span>
              </div>
              <button className="mt-2 px-3 py-1.5 bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 rounded-md text-sm font-medium transition-colors hover:bg-brand-200 dark:hover:bg-brand-900/40">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-border">
        <button className="w-full text-center text-sm text-brand-600 hover:text-brand-700 font-medium py-1 interactive-link">
          View All Conferences
        </button>
      </div>
    </div>
  );
};

export default UpcomingConferences;
