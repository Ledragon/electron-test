import { app, BrowserWindow } from 'electron';


app.on('ready', (event, launchInfo) => {
    let window = new BrowserWindow({
        height: 600,
        width: 800
    });
    window.loadURL(`file://${__dirname}/main.html`);

    window.on('closed', () => {
        window = null;
    })
});

