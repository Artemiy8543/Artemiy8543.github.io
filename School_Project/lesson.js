function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function main(url){
    const request = await fetch(url);
    if(request.status != 200)return;
    const data = await request.json();
    const programs = document.getElementById('programs');

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

        programs.appendChild(program);
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
    }
}


url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/";

const self_url = new URLSearchParams(window.location.search);
id = self_url.get('id');
if(id==null)id="1";

url += id;

main(url);