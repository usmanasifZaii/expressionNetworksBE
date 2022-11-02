import app from "./app.js";
import { connect } from "./db";
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

connect(process.env.DATABASE_URL || "");

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
