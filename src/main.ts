import { app, BrowserWindow } from "electron";
import * as path from "path";
 
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      allowRunningInsecureContent: true,
      javascript: true,
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false,
    }
  });
 
  // and load the index.html of the app.
  win.loadFile('temp.html');
 // win.loadFile(path.join(__dirname, "../temp.html"));
}
 
app.on('ready', createWindow);