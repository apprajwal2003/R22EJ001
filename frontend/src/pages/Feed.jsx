import React from "react";
//should replace with api data
const posts = [
  { id: "101", userId: "1", content: "Just learned React! 🚀" },
  { id: "102", userId: "2", content: "Bootstrap makes styling easy!" },
  { id: "103", userId: "3", content: "APIs are the backbone of web apps." },
];

const comments = [
  { id: "201", postId: "101", content: "That's awesome! Keep going! 🎉" },
  { id: "202", postId: "101", content: "React is a game changer." },
  { id: "203", postId: "102", content: "Agreed! Bootstrap saves time." },
  { id: "204", postId: "103", content: "APIs make everything possible!" },
];

export default function Feed() {
  return (
    <div className="container">
      <h1 className="mb-4">Feed</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6">
            <div className="card shadow-sm p-3 mb-4 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">User ID: {post.userId}</h5>
                <p className="card-text">{post.content}</p>
                <h6 className="mt-3">Comments:</h6>
                <ul className="list-group">
                  {comments
                    .filter((comment) => comment.postId === post.id)
                    .map((comment) => (
                      <li key={comment.id} className="list-group-item">
                        {comment.content}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
