import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Comments } from './Comments';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  timestamp: Date;
}

export function Post({ username, userImage, image, caption, timestamp }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // Dummy comments data
  const comments = [
    {
      id: '1',
      username: 'jane_doe',
      text: 'This is amazing! 😍',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      id: '2',
      username: 'photo_enthusiast',
      text: 'Great composition!',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4">
      <div className="flex items-center p-3">
        <img
          src={userImage}
          alt={username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold">{username}</span>
      </div>

      <img src={image} alt="Post" className="w-full aspect-square object-cover" />

      <div className="p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex space-x-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`${liked ? 'text-red-500' : 'text-gray-700'} transition-colors`}
            >
              <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className={`${saved ? 'text-black' : 'text-gray-700'} transition-colors`}
          >
            <Bookmark className={`w-6 h-6 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{username}</span>
            {caption}
          </p>
          <p className="text-gray-500 text-sm">
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </p>
        </div>

        {showComments && (
          <Comments postId={1} comments={comments} />
        )}
      </div>
    </div>
  );
}