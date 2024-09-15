function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function main(url, id){
    const request = await fetch(url);
    if(request.status != 200)return;
    data = await request.json();
    data = data.find(item => item.path == id);
    const clas = document.getElementById('clas');
    const home = document.getElementById('home');
    const dops = document.getElementById('dops');

    lesson_name = document.getElementById('lesson-name');
    lesson_name.textContent = data.name;

    progs = data.files
    for(let i=0;i<progs.length;i++){
        if(progs[i].name == "name")continue;
        const program = document.createElement('a');
        program.className = "program";
        program.href = "program.html?id=" + progs[i].path;

        const program_name = document.createElement('h1');
        program_name.className = "program-name";
        program.appendChild(program_name);

        program_name.textContent = progs[i].name;

        if(progs[i].type == "1"){
            clas.appendChild(program);
        }else if(progs[i].type == "2"){
            home.appendChild(program);
        }else{
            dops.appendChild(program);
        }
    }
}


url = "https://raw.githubusercontent.com/Artemiy8543/School_Programs/master/main.json";

const self_url = new URLSearchParams(window.location.search);
id = self_url.get('id');
if(id==null)id="1";

main(url, id);