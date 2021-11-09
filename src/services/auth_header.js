export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    // for Node.js Express back-end
    return {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
}
