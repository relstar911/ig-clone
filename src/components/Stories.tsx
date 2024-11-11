import React from 'react';
import { Story } from './Story';

const stories = [
  {
    username: 'johndoe',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    username: 'janedoe',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    username: 'mike',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    username: 'sarah',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    username: 'chris',
    imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556',
  },
];

export function Stories() {
  return (
    <div className="flex space-x-4 p-4 bg-white border border-gray-200 rounded-lg overflow-x-auto">
      {stories.map((story) => (
        <Story key={story.username} {...story} />
      ))}
    </div>
  );
}