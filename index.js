#!/usr/bin/env node
const fs = require('fs-extra');

let tgt = process.cwd();
if (undefined !== process.argv[2]) {
    tgt += "/" + process.argv[2];
    try { fs.mkdirSync(tgt); } catch (e) {}
}

fs.copyFile(__dirname + "/tmpl/index.html", tgt + "/index.html",
    (err) => {
        if (err) {
	    console.error(err);
	}
    }
);

try { fs.mkdirSync(tgt + "/conf"); } catch (e) {}
fs.copyFile(__dirname + "/tmpl/webpack.config.index.js", tgt + "/conf/webpack.config.index.js",
    (err) => {
        if (err) {
	    console.error(err);
	}
    }
);

try { fs.mkdirSync(tgt + "/js"); } catch (e) {}

try { fs.mkdirSync(tgt + "/mof"); } catch (e) {}
fs.copyFile(__dirname + "/tmpl/index.mf", tgt + "/mof/index.mf",
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

try { fs.mkdirSync(tgt + "/dist"); } catch (e) {}
try { fs.mkdirSync(tgt + "/dist/index"); } catch (e) {}

console.log("mofron-init was finished.");
console.log("please execute those bellow commands to complete the initialization.\n");

if (undefined !== process.argv[2]) {
    console.log("  cd " + process.argv[2]);
}

console.log("  npm install mofron\n");


