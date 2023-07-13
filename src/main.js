const { app, BrowserWindow } = require("electron");
const path = require("path");

function openCalculatorWindow() {
  const calculatorWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "/windows/calculator/preload.js"),
    },
  });
  calculatorWindow.loadFile(
    path.join(__dirname, "/windows/calculator/index.html")
  );
}

function openHistoryWindow() {
  const historyWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "/windows/history/preload.js"),
    },
  });
  historyWindow.loadFile(path.join(__dirname, "/windows/history/index.html"));
}

app.whenReady().then(() => {
  openCalculatorWindow();
  openHistoryWindow();
});
