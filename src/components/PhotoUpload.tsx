import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

export function PhotoUpload() {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    // Filter for images
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    // Simulate upload - in a real app, you'd upload to a server
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('File loaded:', e.target?.result);
        // Here you would typically upload the file to your server
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag and drop your photos here, or
      </p>
      <label className="mt-2 inline-block">
        <input
          type="file"
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleFileInput}
        />
        <span className="cursor-pointer text-blue-500 hover:text-blue-400">
          browse to upload
        </span>
      </label>
    </div>
  );
}