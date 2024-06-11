import express from "express";
import fs from "fs";
import path from "path";

import { format } from "date-fns";

//Initialization
const app = express();
const PORT = 5000;

//routes
app.get("/create", (request, response) => {
  let time = format(new Date(), "dd-MM-yyyy hh-mm-ss");
  //   console.log(now);
  let filePath = `TimeStamp/${time}.txt`;
  fs.writeFileSync(filePath, `${time}`, "utf8");
  response.status(200).send(`New file Creates as ${time}`);
});

app.get("/read", (request, response) => {
  let folderPath = path.basename("TimeStamp/");

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      response.status(500).send("Files Does not Retrive");
    }
    response.status(200).send(files);
  });
});

//App port listening
app.listen(PORT, () => {
  console.log(`This App is running in http://localhost:${PORT}`);
});