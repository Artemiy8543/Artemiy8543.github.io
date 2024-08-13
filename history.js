function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function addMatch(matchID){
    const heroes = await fetch("https://api.opendota.com/api/heroes");
    if(heroes.status != 200)return;
    const data_heroes = await heroes.json();

    const match_url = "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/matches/" + matchID;
    const request = new XMLHttpRequest();
    addListeners(request);
    request.open("GET", match_url);
    request.send();
    request.onloadend = (e) => {
      const data = request.responseText;
      text = data.replace(/;00/g, ";");
      text = text.substr(0, text.indexOf("="))
      heroId = Number(text.substr(0,text.indexOf("+")));
      steam_id = text.substr(text.indexOf("+")+1);

      const main = document.getElementById('main');
      const matchDiv = document.createElement('div');
      matchDiv.className = 'match';

      const sub_matchid = document.createElement('a');
      const matchid = document.createElement('h1');
      matchid.className = "match-id";
      sub_matchid.textContent = matchID;
      sub_matchid.href = "match.html?id=" + matchID;

      const steamid = document.createElement('h1');
      steamid.className = "steamid";
      steamid.textContent = steam_id;
      const hero_name = (data_heroes.find(item => item.id == heroId)).name;
      const hero = hero_name.slice(14);
      const hero_url = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/" + hero + ".png";

      const hero_image = document.createElement('img');
      hero_image.className = "hero";
      hero_image.src = hero_url;

      main.appendChild(matchDiv);
      matchid.appendChild(sub_matchid);
      matchDiv.appendChild(matchid);
      matchDiv.appendChild(steamid);
      matchDiv.appendChild(hero_image);
    }
}

const url = "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/matches/last_id";

const Http = new XMLHttpRequest();
addListeners(Http);
Http.open("GET", url);
Http.send();
Http.onloadend = (e) => {
  const data = Http.responseText;
  ids = Number(data.replace(/\n/g, "")) - 1;

  for (let match_id = 1; match_id < ids + 1; match_id++) {
        addMatch(match_id);
  }
}