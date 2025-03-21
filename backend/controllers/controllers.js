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
    console.log(users);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    console.error("Detailed response:", error.response?.data);
  }
};
