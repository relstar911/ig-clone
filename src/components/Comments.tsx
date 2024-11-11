import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useAuthStore } from '../store/authStore';

interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: Date;
  userImage: string;
}

interface CommentsProps {
  postId: number;
  comments: Comment[];
}

export function Comments({ postId, comments: initialComments }: CommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const user = useAuthStore((state) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    const comment: Comment = {
      id: Math.random().toString(),
      username: user.username,
      text: newComment,
      timestamp: new Date(),
      userImage: user.avatar,
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="space-y-4 max-h-60 overflow-y-auto">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <img
              src={comment.userImage}
              alt={comment.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="inline-flex items-center space-x-2">
                <span className="font-semibold">{comment.username}</span>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                </span>
              </div>
              <p className="text-gray-800">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </form>
    </div>
  );
}