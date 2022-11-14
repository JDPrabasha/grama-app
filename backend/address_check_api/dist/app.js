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
//requires nic and address
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
