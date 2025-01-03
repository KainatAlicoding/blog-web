// components/CommentSection.tsx
'use client'; 
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Comments</h3>
      <textarea
        className="w-full border p-2 rounded mb-4"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button
        onClick={addComment}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Comment
      </button>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="border p-2 rounded">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
