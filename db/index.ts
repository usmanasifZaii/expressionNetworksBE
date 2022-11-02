import mongoose from "mongoose";

export const connect = (url: string, opts = {}) => {
  return mongoose
    .connect(url, {
      ...opts,
    })
    .then(
      () => {
        console.log("Connected to database!");
      },
      (err) => {
        console.log("Connection to database failed!");
      }
    );
};
