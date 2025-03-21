import React from "react";
//should replace with api data
const users = {
  1: "Alice Johnson",
  2: "Bob Smith",
  3: "Charlie Brown",
};

export default function TopUsers() {
  return (
    <div className="container">
      <h1 className="mb-4">Top Users</h1>
      <div className="row">
        {Object.entries(users).map(([userId, name]) => (
          <div key={userId} className="col-md-4">
            <div className="card shadow-sm p-3 mb-4 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">User ID: {userId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
