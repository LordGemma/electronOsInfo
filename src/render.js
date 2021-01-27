//For nodeIntegration
//const {ipcRenderer} = require("electron");

const osInfo = document.getElementById("osInfo");
const processes = document.getElementById("processes");
const osFragment = document.createDocumentFragment();
const processesFragment = document.createDocumentFragment();
const getInfoBtn = document.getElementById('info');
getInfoBtn.onclick = getInfo;

function getInfo() {
    api.send('send');

    api.get('get', (data) => {
        console.log(data)
        const {processesData, ...rest} = data;

        Object.values(rest).forEach((row) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = row;
            osFragment.appendChild(li);
        })

        processesData.forEach((process) => {
            console.log(process);
            Object.values(process).forEach((value, index) => {
                const li = document.createElement('li');
                if (index === 0) {
                    li.classList.add("list-group-item", "active");
                } else {
                    li.classList.add('list-group-item');
                }
                li.textContent = value;
                processesFragment.appendChild(li);
            })
        })
        
        osInfo.appendChild(osFragment);
        processes.appendChild(processesFragment);
    })
}

//For nodeIntegration
// function getInfo() {
//     ipcRenderer.send('send');

//     ipcRenderer.on("get", (event, data) => {
//         console.log(data)
//         const {processesData, ...rest} = data;

//         Object.values(rest).forEach((row) => {
//             const li = document.createElement('li');
//             li.classList.add('list-group-item');
//             li.textContent = row;
//             osFragment.appendChild(li);
//         })

//         processesData.forEach((process) => {
//             console.log(process);
//             Object.values(process).forEach((value, index) => {
//                 const li = document.createElement('li');
//                 if (index === 0) {
//                     li.classList.add("list-group-item", "active");
//                 } else {
//                     li.classList.add('list-group-item');
//                 }
//                 li.textContent = value;
//                 processesFragment.appendChild(li);
//             })
//         })
        
//         osInfo.appendChild(osFragment);
//         processes.appendChild(processesFragment);
//     })
// }