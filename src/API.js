// export const URL = "https://sneakers-api-peach.vercel.app";
export const URL = "http://localhost:5000";

export const HEADERS = {
  authorization: `Believe__${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
};

export const HEADER = {
  authorization: `Believe__${localStorage.getItem("token")}`,
  "Content-Type": "multipart/form-data",
};
