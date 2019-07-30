import express from 'express';
import path from 'path';

const app = express();

app.use("/files", express.static(path.join(__dirname,"/public")));

app.get("/*", (request, response) => {
    response.sendFile(path.join(__dirname, "/public/index.html"));
})

app.listen("5001", (request, response) => {
    console.log("Listening on port 5001");
});