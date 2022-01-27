import fs from "fs";
import path from "path";

export default () => {
	fs.readdirSync(path.join(__dirname, '../routings'))
		.forEach(file => {
			if (file.indexOf('.js') >= 0) {
				let filePath = path.join(__dirname, '../routings', file);
				require(filePath);
			}
		});
};