import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const db = require("../db/db");
const request = require("./models/Request");
const bodyParser = require("body-parser");

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.put("/:nic", async (req: Request, res: Response) => {
  try {
    const nic = req.params.nic;
    const proof = req.body.proof;

    await request.findOneAndUpdate(
      { nic: nic },
      { proof: proof, status: "Processing", updatedAt: Date.now() }
    );

    res.status(201).send("Proof updated");
  } catch (err) {
    res.status(500).send(err);
  }
});

//requires nic and address
app.post("/", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newRequest = new request(req.body);
    await newRequest.save();
    res.status(201).send("Request created");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
