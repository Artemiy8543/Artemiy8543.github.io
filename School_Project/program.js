function addListeners(request) {
  request.addEventListener("loadend", null);
}

script_text = ""

function copy_script(){
    navigator.clipboard.writeText(script_text).then(function() {
      alert("Код скопирован");
    }, function(err) {
      alert("Ошибка копирования:", err);
    });
}

async function main(url, lesson_id, path_id){
    const request = await fetch(url);
    if(request.status != 200)return;
    data = await request.json();
    data = data.find(item => item.path == lesson_id);
    const program_name = document.getElementById('program-name');

    program_name.textContent = data.files.find(item => item.path == path_id).name;

    const main_request = new XMLHttpRequest();
    addListeners(main_request);
    main_request.open("GET", "https://raw.githubusercontent.com/Artemiy8543/School_Programs/master/" + data.files.find(item => item.path == path_id).path);
    main_request.send();
    main_request.onloadend = (e) => {
        text = main_request.responseText;
        script_text = text;
        text = text.replace(/\n/g, "|") + "|";
        const Nums = document.getElementById('for-num');
        const Code = document.getElementById('for-code');
        let str_num = 1;
        while(text.indexOf("|")!=-1){
            const num = document.createElement('h1');
            num.className = "num";
            num.textContent = str_num;

            Nums.appendChild(num);

            const code = document.createElement('pre');
            code.className = "code";
            code.textContent = text.substr(0,text.indexOf("|"));

            Code.appendChild(code);
            str_num += 1;
            text = text.substr(text.indexOf("|")+1);
        }
    };
}


url = "https://raw.githubusercontent.com/Artemiy8543/School_Programs/master/main.json";

const self_url = new URLSearchParams(window.location.search);
id = self_url.get('id');
if(id==null)id="1/1";

const back_href = document.getElementById('back-href');
back_href.href = "lesson.html?id=" + id.substr(0, id.indexOf("/"));

main(url, id.substr(0, id.indexOf("/")), id);