import { useState } from 'react';
import {
  Calendar,
  ChevronDown,
  Home,
  Plus,
  MoreHorizontal,
  Bell,
  Signal,
  Wifi,
  Battery
} from 'lucide-react';

function App() {
  const [currentMonth] = useState('November');
  const [currentTime] = useState('9:41');

  const scheduleItems = [
    {
      date: '01',
      day: 'Wed',
      noAppointments: true
    },
    {
      date: '02',
      day: 'Thu',
      time: '2:00 PM - 2:30 PM',
      title: 'Personal Training Session',
      duration: '30 Minute Meeting',
      type: 'personal',
      rescheduled: {
        by: 'John Mobbin',
        note: 'No reason. Just felt like it.'
      }
    },
    {
      date: '03',
      day: 'Fri',
      time: '9:00 AM - 9:30 AM',
      title: 'Strength & Conditioning Class',
      duration: '60 Minute Meeting',
      type: 'group'
    },
    {
      date: '04',
      day: 'Sat',
      time: '10:00 AM - 10:30 AM',
      title: 'Nutrition Consultation',
      duration: '30 Minute Meeting',
      type: 'group'
    },
    {
      date: '05',
      day: 'Sun',
      time: '11:00 AM - 11:30 AM',
      title: 'Flexibility & Mobility Class',
      duration: '30 Minute Meeting',
      type: 'personal'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center">
        <span className="text-xs font-medium">{currentTime}</span>
        <div className="flex items-center space-x-2">
          <Signal size={14} className="text-gray-900" />
          <Wifi size={14} className="text-gray-900" />
          <Battery size={14} className="text-gray-900" />
        </div>
      </div>

      {/* Header */}
      <header className="bg-white px-4 py-3 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-base font-semibold">My Schedule</h1>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bell size={16} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
            </div>
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center space-x-1 text-gray-600 text-xs bg-gray-50 px-3 py-1.5 rounded-md">
            <Calendar size={12} className="text-blue-500" />
            <span>{currentMonth}</span>
            <ChevronDown size={12} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-5 pb-20">
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex">
              {/* Date Column */}
              <div className="flex flex-col items-center mr-4 pt-2">
                <span className="text-[10px] text-gray-500 mb-1">{item.day}</span>
                <div className="flex items-center justify-center">
                  <span className="text-sm font-bold">{item.date}</span>
                </div>
              </div>
              {/* Content Column */}
              <div className="flex-1">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  {item.noAppointments ? (
                    <p className="text-xs text-blue-500">No appointments on this date</p>
                  ) : (
                    <>
                      <div className="flex items-center space-x-1 text-gray-500 text-[10px]">
                        <span className="text-blue-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm7.5 7a5.006 5.006 0 0 0 -5-5h-5a5.006 5.006 0 0 0 -5 5v4h15zm2.5-11a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm1.5 2h-5a4.793 4.793 0 0 0 -.524.053 6.514 6.514 0 0 1 -1.576 2.216 7.008 7.008 0 0 1 5.1 6.731h7v-4a5.006 5.006 0 0 0 -5-5z"/>
                          </svg>
                        </span>
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <h3 className="text-xs font-semibold">{item.title}</h3>
                      </div>
                      <div className="text-[10px] text-gray-500 mt-1">{item.duration}</div>
                      {item.rescheduled && (
                        <div className="mt-2 text-[10px]">
                          <span className="text-green-500">
                            Rescheduled by {item.rescheduled.by}
                          </span>
                          <span className="text-gray-400 italic ml-1">
                            ({item.rescheduled.note})
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between">
          <button className="text-gray-600 hover:text-gray-900">
            <Home size={18} />
          </button>
          <button className="bg-blue-500 text-white p-3 rounded-full -mt-8 shadow-lg hover:bg-blue-600 transition-colors">
            <Plus size={18} />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
