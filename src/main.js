const { ipcMain } = require('electron');
const os = require('os');
const _ = require('lodash');
const ps = require('current-processes');

const info = {
    userName: `User Name: ${os.userInfo().username}`,
    os: `OS: ${os.platform()}`,
    osVersion: `OS Version: ${os.release()}`,
    totalMemory: `Total Memory, MB: ${os.totalmem() / (1024 * 1024)}`,
    processesData: [],
  }

ps.get(function(err, processes) {

  const sorted = _.sortBy(processes, 'cpu');
  let top5  = sorted.reverse().splice(0, 5);

  info.processesData = top5.map(({name, mem, cpu}) => ({
    name: `Process: ${name}`,
    memory: `Use Memory, %: ${mem.usage}`,
    cpu: `CPU, %: ${cpu}`,
  }));
});

ipcMain.on('send', (event) => {
    event.reply('get', info);
})