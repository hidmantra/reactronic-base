"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
function createWindow() {
    // Create the browser window.
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            allowRunningInsecureContent: true,
            javascript: true,
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            nodeIntegrationInWorker: true,
            preload: path.join(__dirname, "preload.js"),
            webSecurity: false
        }
    });
    // and load the index.html of the app.
    win.loadFile('temp.html');
    // win.loadFile(path.join(__dirname, "../temp.html"));
}
electron_1.app.on('ready', createWindow);
//# sourceMappingURL=main.js.map