import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Camera, Share2, Shield } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <ImageIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">PhotoVault</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Your Personal Photo Gallery
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Store, organize, and share your memories securely
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Camera className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Upload</h3>
            <p className="text-gray-600">
              Drag and drop your photos or upload them in bulk
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Share2 className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Share Instantly</h3>
            <p className="text-gray-600">
              Share your photos with friends and family
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Shield className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p className="text-gray-600">
              Your photos are encrypted and stored safely
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}