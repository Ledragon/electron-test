import { app, BrowserWindow } from 'electron';


app.on('ready', (event, launchInfo) => {
    let window = new BrowserWindow({
        height: 600,
        width: 800,
        frame: true,
        fullscreen:true
    });
    window.loadURL(`file://${__dirname}/index.html`);

    window.on('closed', () => {
        window = null;
    })
});

