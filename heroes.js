function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function main(){
    const response = await fetch("https://api.opendota.com/api/heroes");
    try{
        const data = await response.json();
        for(let ind=0;ind<data.length;ind++){
            const main = document.getElementById(data[ind].primary_attr);

            const mainDiv = document.createElement('a');
            mainDiv.className = "hero-div";
            mainDiv.href="history.html?heroid=" + data[ind].id;

            const img = document.createElement('img');
            img.className = "hero";
            const hero = data[ind].name.slice(14);
            const hero_url = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/" + hero + ".png";
            img.src = hero_url;

            const hero_name = document.createElement('h1');
            hero_name.className = "hero-name";
            hero_name.textContent = data[ind].localized_name;

            mainDiv.appendChild(img);
            mainDiv.appendChild(hero_name);
            main.appendChild(mainDiv);
        }
    }catch(error){
    }
}

main()