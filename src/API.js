export const URL = "https://sneakers-api-peach.vercel.app";

export const HEADERS = {
  authorization: `Believe__${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
};

export const HEADER = {
  authorization: `Believe__${localStorage.getItem("token")}`,
  "Content-Type": "multipart/form-data",
};
