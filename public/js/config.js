// Falls back to the deployed API when not running against a local server.
const isLocalHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

window.APP = {
  API_URL: isLocalHost
    ? "http://localhost:3007"
    : "https://webshop-najs-production.up.railway.app",
  CART_KEY: "cart",
  CURRENT_USER_KEY: "currentUser"
};