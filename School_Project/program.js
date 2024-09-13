function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function main(url){
    const request = await fetch(url, {method: 'GET',
                                        headers: {
                                            'Authorization': 'Bearer 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'
                                        }});
    if(request.status != 200)return;
    const data = await request.json();
    const program_name = document.getElementById('program-name');

    const name_request = new XMLHttpRequest();
    addListeners(name_request);
    name_request.open("GET", data.find(item => item.name == "name").download_url);
    name_request.send();
    name_request.onloadend = (e) => {
        program_name.textContent = name_request.responseText;
    };

    const main_request = new XMLHttpRequest();
    addListeners(main_request);
    main_request.open("GET", data.find(item => item.name == "main").download_url);
    main_request.send();
    main_request.onloadend = (e) => {
        text = main_request.responseText;
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


url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/";

const self_url = new URLSearchParams(window.location.search);
id = self_url.get('id');
if(id==null)id="1/1";

const back_href = document.getElementById('back-href');
back_href.href = "lesson.html?id=" + id.substr(0, id.indexOf("/"));

url += id;

main(url);