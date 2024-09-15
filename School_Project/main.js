function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function main(url){
    const request = await fetch(url);
    if(request.status != 200)return;
    const data = await request.json();
    const lessons = document.getElementById('lessons');
    for(let i=0;i<data.length;i++){
        const lesson_url = "https://api.github.com/repos/Artemiy8543/School_programs/contents/" + data[i].path;

        const lesson = document.createElement('a');
        lesson.className = "lesson";
        lesson.href = "lesson.html?id=" + data[i].path;

        const lesson_name = document.createElement('h1');
        lesson_name.className = "lesson-name";
        lesson_name.textContent = data[i].name;

        lessons.appendChild(lesson);
        lesson.appendChild(lesson_name);
    }
}


const url = "https://raw.githubusercontent.com/Artemiy8543/School_Programs/master/main.json";

main(url);