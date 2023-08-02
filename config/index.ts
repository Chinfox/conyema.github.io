// const dev = process.env.NODE_ENV !== "production";
const dev = process.env.NODE_ENV === "development";
// console.log("environment: ", dev);

const apiServer = dev ? "http://localhost:4000/api" : "https://owl-hek7.onrender.com/api";

export default apiServer;