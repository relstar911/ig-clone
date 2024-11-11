import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
}

export function Story({ username, imageUrl }: StoryProps) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-pink-600">
        <img
          src={imageUrl}
          alt={username}
          className="rounded-full w-full h-full object-cover border-2 border-white"
        />
      </div>
      <span className="text-xs truncate w-16 text-center">{username}</span>
    </div>
  );
}