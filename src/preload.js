const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "api",
    {
        send(channel, data) {
            let validChannels = ["send"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },

        get(channel, func) {
            let validChannels = ["get"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args))
            }
        }
    }
);