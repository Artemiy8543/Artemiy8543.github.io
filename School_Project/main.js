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
    const lessons = document.getElementById('lessons');
    for(let i=0;i<data.length;i++){
        const lesson_url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/" + data[i].path;

        const lesson_request = await fetch(lesson_url, {method: 'GET',
                                                        headers: {
                                                            'Authorization': 'Bearer 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'
                                                        }});
        if(lesson_request.status != 200)return;
        const lesson_data = await lesson_request.json();
        const request = new XMLHttpRequest();
        addListeners(request);
        request.open("GET", lesson_data.find(item => item.name == "name").download_url);
        request.send();
        request.onloadend = (e) => {
            const lesson = document.createElement('a');
            lesson.className = "lesson";
            lesson.href = "lesson.html?id=" + data[i].path;

            const lesson_name = document.createElement('h1');
            lesson_name.className = "lesson-name";
            lesson_name.textContent = request.responseText;

            lessons.appendChild(lesson);
            lesson.appendChild(lesson_name);
        };
    }
}


const url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/";

main(url);