import axios from "axios";
const TEST_SERVER = "http://20.244.56.144/test";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTMzNDY4LCJpYXQiOjE3NDI1MzMxNjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFlOWRkMWUxLTA1MDUtNGMwMi05NjQyLWYxM2JlOWM3Y2RjYSIsInN1YiI6ImFwcHJhandhbHdvcmtAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiYnJvQ29kZSIsImNsaWVudElEIjoiMWU5ZGQxZTEtMDUwNS00YzAyLTk2NDItZjEzYmU5YzdjZGNhIiwiY2xpZW50U2VjcmV0IjoieUluZVhiSG54UU1RSk1JbyIsIm93bmVyTmFtZSI6IkEgUCBQcmFqd2FsIiwib3duZXJFbWFpbCI6ImFwcHJhandhbHdvcmtAZ21haWwuY29tIiwicm9sbE5vIjoiUjIyRUowMDEifQ.NRoEZRxQgwdN8FgPEGV-LBjXgJIm68uG3jH3W4mhIr8";

export const topUsers = async (req, res) => {
  try {
    const { data } = await axios.get(`${TEST_SERVER}/users`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const users = data.users;
    const usersCount = {};

    const promises = Object.keys(users).map(async (userId) => {
      const allPosts = axios.get(`${TEST_SERVER}/users/${userId}/posts`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      usersCount[userId] = allPosts.posts.length;
    });

    await Promise.all(promises);

    const resUsers = Object.keys(users).map((userId) => ({}));

    console.log(resUsers);
    res.json(resUsers);
  } catch (error) {
    console.error("Error:", error.message);
    console.error("response:", error.response?.data);
  }
};

export const trendingPosts = async (req, res) => {
  try {
    const { data } = await axios.get(`${TEST_SERVER}/users`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  } catch (error) {
    console.error("Error:", error.message);
    console.error("response:", error.response?.data);
  }
};

export const feed = async (req, res) => {
  try {
    const { data } = await axios.get(`${TEST_SERVER}/users`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  } catch (error) {
    console.error("Error:", error.message);
    console.error("response:", error.response?.data);
  }
};

export default { topUsers, trendingPosts, feed };
