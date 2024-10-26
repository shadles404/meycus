import React from 'react';
import { Image as ImageIcon, ZoomIn, Download, Share2 } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  title: string;
}

const samplePhotos: Photo[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba', title: 'Mountain Lake' },
  { id: '2', url: 'https://images.unsplash.com/photo-1682687221038-404670f09439', title: 'Sunset Beach' },
  { id: '3', url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538', title: 'City Lights' },
  { id: '4', url: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b', title: 'Forest Path' },
  { id: '5', url: 'https://images.unsplash.com/photo-1682687220067-dced0c5bf699', title: 'Desert Dunes' },
  { id: '6', url: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae', title: 'Ocean Waves' },
];

interface ImageGridProps {
  onImageClick: (photo: Photo) => void;
}

export function ImageGrid({ onImageClick }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {samplePhotos.map((photo) => (
        <div
          key={photo.id}
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:shadow-lg transition-all duration-300"
          onClick={() => onImageClick(photo)}
        >
          <img
            src={`${photo.url}?auto=format&fit=crop&w=500&q=80`}
            alt={photo.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold">{photo.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}