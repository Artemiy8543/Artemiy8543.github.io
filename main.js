const API_KEY = 'F97155F15091531BCEC721143B9DD638';

function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function getAvatarUrl(steamId, rank){
    const leaderboard = document.getElementById('leaderbords');
    const url = `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`;

    const request = await fetch(url, {
                                        headers: {
                                            'origin': window.location.origin,
                                            'x-requested-with': 'XMLHttpRequest'
                                        },
                                      });
    const data = await request.json();
    console.log(request);
    const leaderDiv = document.createElement('div');
    leaderDiv.className = 'player';

    const image = document.createElement('img');
    image.className = "avatar";
    image.src = data.response.players[0].avatarmedium;
    leaderDiv.appendChild(image);

    const name = document.createElement('h1');
    name.className = "username";
    name.textContent = data.response.players[0].personaname;
    leaderDiv.appendChild(name);

    const mmr = document.createElement('h1');
    mmr.className = "rank";
    mmr.textContent = rank;
    leaderDiv.appendChild(mmr);

    leaderboard.appendChild(leaderDiv);
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
      text = text.slice(text.indexOf(';')+1);
      getAvatarUrl(steamid, rank);
  }
}