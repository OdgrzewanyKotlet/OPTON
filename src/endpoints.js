export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://opton-back.herokuapp.com"
    : "http://localhost:5000";

export const mailServerEndpoints = {
  post: API_URL + "/contactsend",
};
