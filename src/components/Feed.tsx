import React from 'react';
import { Post } from './Post';

const posts = [
  {
    id: 1,
    username: 'photography_pro',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    caption: 'Beautiful sunset at the beach 🌅 #photography #nature',
    timestamp: new Date('2024-03-10T18:00:00'),
  },
  {
    id: 2,
    username: 'foodie_adventures',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    image: 'https://images.unsplash.com/photo-1682687218147-9806132dc697',
    caption: 'Homemade pasta for dinner tonight! 🍝 #foodie #cooking',
    timestamp: new Date('2024-03-10T19:30:00'),
  },
  {
    id: 3,
    username: 'travel_enthusiast',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    image: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1',
    caption: 'Exploring hidden gems in the city 🌆 #travel #adventure',
    timestamp: new Date('2024-03-10T20:15:00'),
  },
];

export function Feed() {
  return (
    <div className="max-w-screen-sm mx-auto">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}