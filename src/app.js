import express from "./settings/configureExpress";
import configureDB from "./settings/configureMongoDB";
import configureDBModels from "./settings/configureDBModels";
import configureRoutes from "./settings/configureRoutes";

const runApp = () => {
	express()
	.then(({ app }) => {
		app.on('dbConnected', async function () {
			await configureDBModels();
			configureRoutes();
		});
		configureDB();
	}).catch(err => {
		console.log(err);
	});
}

runApp();
