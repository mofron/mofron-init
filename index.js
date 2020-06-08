#!/usr/bin/env node
const fs = require('fs-extra');

let tgt = process.cwd();
if (undefined !== process.argv[2]) {
    tgt += "/" + process.argv[2];
    try { fs.mkdirSync(tgt); } catch (e) {}
}

fs.copyFile(__dirname + "/index.html", tgt + "/index.html",
    (err) => {
        if (err) {
	    console.error(err);
	}
    }
);

try { fs.mkdirSync(tgt + "/conf"); } catch (e) {}
fs.copyFile(__dirname + "/webpack.config.index.js", tgt + "/conf/webpack.config.index.js",
    (err) => {
        if (err) {
	    console.error(err);
	}
    }
);

try { fs.mkdirSync(tgt + "/src"); } catch (e) {}
fs.copySync(__dirname + "/src", tgt + "/src");

try { fs.mkdirSync(tgt + "/mof"); } catch (e) {}
fs.copyFile(__dirname + "/index.mf", tgt + "/mof/index.mf",
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

console.log("mofron-init was finished.");
console.log("please execute those bellow commands to complete the initialization.\n");

if (undefined !== process.argv[2]) {
    console.log("  cd " + process.argv[2]);
}

console.log("  npm install mofron\n");


