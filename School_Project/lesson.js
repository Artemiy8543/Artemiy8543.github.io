function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function main(url){
    const request = await fetch(url);
    if(request.status != 200)return;
    const data = await request.json();
    const clas = document.getElementById('clas');
    const home = document.getElementById('home');
    const dops = document.getElementById('dops');

    const name_request = new XMLHttpRequest();
    addListeners(name_request);
    name_request.open("GET", data.find(item => item.name == "name").download_url);
    name_request.send();
    name_request.onloadend = (e) => {
        lesson_name = document.getElementById('lesson-name');
        lesson_name.textContent = name_request.responseText;
    };

    for(let i=0;i<data.length;i++){
        if(data[i].name == "name")continue;
        const program = document.createElement('a');
        program.className = "program";
        program.href = "program.html?id=" + data[i].path;

        const program_name = document.createElement('h1');
        program_name.className = "program-name";
        program.appendChild(program_name);

        const program_url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/" + data[i].path;
        const program_request = await fetch(program_url);
        if(program_request.status != 200)return;
        const program_data = await program_request.json();
        const program_name_url = program_data.find(item => item.name == "name").download_url;

        const program_name_request = new XMLHttpRequest();
        addListeners(program_name_request);
        program_name_request.open("GET", program_name_url);
        program_name_request.send();
        program_name_request.onloadend = (e) => {
            program_name.textContent = program_name_request.responseText;
        };

        const program_type_url = program_data.find(item => item.name == "type").download_url;

        const program_type_request = new XMLHttpRequest();
        addListeners(program_type_request);
        program_type_request.open("GET", program_type_url);
        program_type_request.send();
        program_type_request.onloadend = (e) => {
            if(program_type_request.responseText == "1"){
                clas.appendChild(program);
            }else if(program_type_request.responseText == "2"){
                home.appendChild(program);
            }else{
                dops.appendChild(program);
            }
        };
    }
}


url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/";

const self_url = new URLSearchParams(window.location.search);
id = self_url.get('id');
if(id==null)id="1";

url += id;

main(url);