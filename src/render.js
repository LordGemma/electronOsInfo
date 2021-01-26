const content = document.getElementById("content");
const list = content.querySelector("ul");
const fragment = document.createDocumentFragment();
const getInfoBtn = document.getElementById('info');
getInfoBtn.onclick = getInfo;

function getInfo() {
    api.send('send');

    api.get('get', (data) => {
        console.log(data)
        Object.values(data).forEach(function(row) {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = row;
            fragment.appendChild(li);
        });
        
        list.appendChild(fragment);
    })
}