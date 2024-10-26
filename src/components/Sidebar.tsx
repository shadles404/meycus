import React from 'react';
import { Image as ImageIcon, Heart, Clock, Folder, Star, Tag } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: <ImageIcon size={20} />, label: 'All Photos' },
    { icon: <Heart size={20} />, label: 'Favorites' },
    { icon: <Clock size={20} />, label: 'Recent' },
    { icon: <Folder size={20} />, label: 'Albums' },
    { icon: <Star size={20} />, label: 'Highlights' },
    { icon: <Tag size={20} />, label: 'Tags' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ImageIcon className="text-blue-500" />
          Local Photos
        </h1>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}