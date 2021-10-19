import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { router } from "./routes";
import http from "http";
import cors from "cors";

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	console.log("[Socket] +", socket.id);
});

app.use(cors());

app.use(express.json());

app.use(router);

app.get("/github", (req, res) => {
	res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (req, res) => {
	const { code } = req.query;
	res.json(code);
});

export { httpServer, io };
