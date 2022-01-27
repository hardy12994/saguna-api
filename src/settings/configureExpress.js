import {
	generate
} from 'express-app-generator'; // my Express Generator NPM module
import config from "config";
import cors from "cors";
import express from "express";
import path from "path";

const serverConfig = config.get('server');

const addConfigurations = app => {
	app.use(cors());
	app.use("/static", express.static(path.join(__dirname, 'public')));
};

const generateExpress = () => {
	return new Promise((res, rej) => {
		generate(serverConfig.port, 'src/apis' , (err, app, server) => {
			if (err) return rej(err);
			console.log(`listening on ${serverConfig.port}`);
			console.log(`environment is ${serverConfig.env.toUpperCase()}`);
			addConfigurations(app);
			global.app = app;
			return res({ app, server });
		});
	});
};

const expressSettings = async () => {
	return await generateExpress();
};

export default expressSettings;