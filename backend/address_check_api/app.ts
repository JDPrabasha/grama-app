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

app.put("/process/:nic", async (req: Request, res: Response) => {
  try {
    const nic = req.params.nic;
    await request.findOneAndUpdate(
      { nic: nic },
      { status: "Processing", updatedAt: Date.now() }
    );
    res.status(201).send("Set to Processing");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/policeVerify/:nic", async (req: Request, res: Response) => {
  try {
    const nic = req.params.nic;
    await request.findOneAndUpdate(
      { nic: nic },
      { status: "Confirmed", updatedAt: Date.now(), policeVerification: true }
    );
    res.status(201).send("Set to Confirmed");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/confirm/:nic", async (req: Request, res: Response) => {
  try {
    const nic = req.params.nic;
    await request.findOneAndUpdate(
      { nic: nic },
      {
        status: "Confirmed",
        updatedAt: Date.now(),
        lastApprovalDate: Date.now(),
      }
    );
    res.status(201).send("Set to Confirmed");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/missing/:nic", async (req: Request, res: Response) => {
  try {
    const nic = req.params.nic;
    await request.findOneAndUpdate(
      { nic: nic },
      { status: "Missing Info", updatedAt: Date.now() }
    );
    res.status(201).send("Set to Missing Info");
  } catch (err) {
    res.status(500).send(err);
  }
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

app.get("/status/:nic", async (req: Request, res: Response) => {
  try {
    const nic = req.params.nic;
    const result = await request.findOne(
      { nic: nic },
      { nic: 1, status: 1, policeVerification: 1, _id: 0 }
    );
    res.status(200).send(result);
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
