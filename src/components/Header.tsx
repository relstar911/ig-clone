import { Camera, Heart, MessageCircle, Search, LogOut } from 'lucide-react';
import React, { useState } from 'react';
import { CreatePost } from './CreatePost';
import { useAuthStore } from '../store/authStore';

export function Header() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-screen-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="text-xl font-semibold">Instagram</div>
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsCreatePostOpen(true)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Camera className="w-6 h-6" />
            </button>
            {user && (
              <button 
                onClick={logout}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors text-red-500"
              >
                <LogOut className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      <CreatePost 
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
    </>
  );
}