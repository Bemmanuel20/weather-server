import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
import { app } from "./app";

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port:${port}!`);
});
