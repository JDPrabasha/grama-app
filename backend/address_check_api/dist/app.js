"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db = require("../db/db");
const request = require("./models/Request");
const bodyParser = require("body-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(bodyParser.json());
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.put("/process/:nic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nic = req.params.nic;
        yield request.findOneAndUpdate({ nic: nic }, { status: "Processing", updatedAt: Date.now() });
        res.status(201).send("Set to Processing");
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.put("/policeVerify/:nic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nic = req.params.nic;
        yield request.findOneAndUpdate({ nic: nic }, { status: "Confirmed", updatedAt: Date.now(), policeVerification: true });
        res.status(201).send("Set to Confirmed");
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.put("/confirm/:nic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nic = req.params.nic;
        yield request.findOneAndUpdate({ nic: nic }, {
            status: "Confirmed",
            updatedAt: Date.now(),
            lastApprovalDate: Date.now(),
        });
        res.status(201).send("Set to Confirmed");
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.put("/missing/:nic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nic = req.params.nic;
        yield request.findOneAndUpdate({ nic: nic }, { status: "Missing Info", updatedAt: Date.now() });
        res.status(201).send("Set to Missing Info");
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.put("/:nic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nic = req.params.nic;
        const proof = req.body.proof;
        yield request.findOneAndUpdate({ nic: nic }, { proof: proof, status: "Processing", updatedAt: Date.now() });
        res.status(201).send("Proof updated");
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.get("/status/:nic", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nic = req.params.nic;
        const result = yield request.findOne({ nic: nic }, { nic: 1, status: 1, policeVerification: 1, _id: 0 });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
//requires nic and address and email
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const newRequest = new request(req.body);
        yield newRequest.save();
        res.status(201).send("Request created");
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
