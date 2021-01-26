const { ipcMain } = require('electron');
const os = require('os');

const info = {
    userName: `User Name: ${os.userInfo().username}`,
    os: `OS: ${os.platform()}`,
    osVersion: `OS Version: ${os.release()}`,
    totalMemory: `Total Memory, GB: ${os.totalmem() / (1024 * 1024 * 1024)}`,
  }

ipcMain.on('send', (event) => {
    event.reply('get', info);
})