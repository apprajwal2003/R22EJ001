import React from "react";

const posts = [
  { userId: 101, content: "Just learned React! 🚀" },
  { userId: 102, content: "Bootstrap makes styling easy!" },
  { userId: 103, content: "APIs are the backbone of web apps." },
];

export default function Trending() {
  return (
    <div className="container">
      <h1 className="mb-4">Trending Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.userId} className="col-md-6">
            <div className="card shadow-sm p-3 mb-4 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">User ID: {post.userId}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
