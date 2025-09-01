import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs";

export async function Log(stack, level, packageName, message) {
  try {
    await axios.post(
      LOG_API_URL,
      { stack, level, package: packageName, message },
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Logging failed:", error.response?.data || error.message);
  }
}

export function requestLogger(req, res, next) {
  Log("backend", "info", "middleware", `Incoming ${req.method} ${req.url}`);
  next();
}

export function errorLogger(err, req, res, next) {
  Log("backend", "error", "middleware", err.message);
  res.status(500).json({ error: err.message });
}
