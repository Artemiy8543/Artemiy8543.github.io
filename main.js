    const API_KEY = 'F97155F15091531BCEC721143B9DD638';

function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function getAvatarUrl(steamId, rank, heroId){

    const heroes = await fetch("https://api.opendota.com/api/heroes");
    if(heroes.status != 200)return;
    const data_heroes = await heroes.json();
    const hero_name = (data_heroes.find(h => h.id === heroId)).name;
    const hero = hero_name.slice(14);
    const hero_url = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/" + hero + ".png";

    const leaderDiv = document.createElement('div');
    leaderDiv.className = 'player';


    const image = document.createElement('img');
    image.className = "avatar";

    const userlink = document.createElement('a');
    const name = document.createElement('h1');
    name.className = "username";

    const mmr = document.createElement('h1');
    mmr.className = "rank";
    mmr.textContent = rank;

    const hero_image = document.createElement('img');
    hero_image.className = "hero";

    const leaderboard = document.getElementById('leaderbords');
    const url = `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`;

    leaderboard.appendChild(leaderDiv);

    const request = await fetch(url, {
                                        headers: {
                                            'origin': window.location.origin,
                                            'x-requested-with': 'XMLHttpRequest'
                                        },
                                      });
    if(request.status != 200)return;
    const data = await request.json();

    hero_image.src = hero_url;
    image.src = data.response.players[0].avatarmedium;
    userlink.textContent = data.response.players[0].personaname;
    userlink.href = data.response.players[0].profileurl;

    name.appendChild(userlink);
    leaderDiv.appendChild(image);
    leaderDiv.appendChild(name);
    leaderDiv.appendChild(mmr);
    leaderDiv.appendChild(hero_image);
}
const Http = new XMLHttpRequest();
const data_url="https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/data.txt";
addListeners(Http);
Http.open("GET", data_url);
Http.send();

Http.onloadend = (e) => {
  const data = Http.responseText;
  text = data.replace(/\n/g, "");
  if(text==""){
    return
  }
  while(text.indexOf(";")!=-1){
      const rank = text.slice(text.indexOf(',')+1,text.indexOf('-'));
      const steamid = text.slice(0,text.indexOf(','));
      const heroid = Number(text.slice(text.indexOf('-')+1,text.indexOf(';')));

      getAvatarUrl(steamid, rank, heroid);
      text = text.slice(text.indexOf(';')+1);
  }
}