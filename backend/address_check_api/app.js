// require("dotenv").config();
const express = require("express");
const db = require("./db/db");
const request = require("./models/Request");
// const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyParser.text({ limit: "200mb" }));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.put("/process/:nic", async (req, res) => {
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

app.put("/policeVerify/:nic", async (req, res) => {
  try {
    const nic = req.params.nic;
    await request.findOneAndUpdate(
      { nic: nic },
      { updatedAt: Date.now(), policeVerification: true }
    );
    res.status(201).send("Set to Confirmed");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/confirm/:nic", async (req, res) => {
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

app.put("/missing/:nic", async (req, res) => {
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

app.put("/:nic", async (req, res) => {
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

app.get("/requests/:area", async (req, res) => {
  try {
    const area = req.params.area;
    const requests = await request.find(
      { area: area, policeVerification: true, status: "Processing" },
      { _id: 0, __v: 0 }
    );
    res.status(200).send(requests);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/status/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const result = await request.findOne(
      { email: email },
      { nic: 1, status: 1, policeVerification: 1, _id: 0 }
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

//requires nic and address
app.post("/", async (req, res) => {
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
