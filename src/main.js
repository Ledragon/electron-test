"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.app.on('ready', (event, launchInfo) => {
    let window = new electron_1.BrowserWindow({
        height: 600,
        width: 800
    });
});
//# sourceMappingURL=main.js.map