function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function addMatch(matchID){
    const main = document.getElementById('main');
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match';

    const sub_matchid = document.createElement('a');
    const matchid = document.createElement('h1');
    matchid.className = "match-id";
    sub_matchid.textContent = matchID;
    sub_matchid.href = "match.html?id=" + matchID;

    main.appendChild(matchDiv);
    matchid.appendChild(sub_matchid);
    matchDiv.appendChild(matchid);
}

const url = "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/matches/last_id";

const Http = new XMLHttpRequest();
addListeners(Http);
Http.open("GET", url);
Http.send();
Http.onloadend = (e) => {
  const data = Http.responseText;
  ids = Number(data.replace(/\n/g, "")) - 1;
  console.log(ids);

  for (let match_id = 0; match_id < ids + 1; match_id++) {
        addMatch(match_id);
  }
}