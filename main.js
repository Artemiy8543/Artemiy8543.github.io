const API_KEY = 'F97155F15091531BCEC721143B9DD638';

async function getAvatarUrl(steamId){
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`;

    try {
        const response = await fetch(url, {
                                           mode: 'no-cors',
                                           method: "GET",
                                         });

        return response;
    } catch (error) {
        console.error('Ошибка при получении:', error);
    }
}

const Http = new XMLHttpRequest();
const data_url="https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/data.txt";
Http.open("GET", data_url);
Http.send();
Http.onreadystatechange = (e) => {
  const text = Http.responseText;
  if(text==""){
    return
  }
  const rank = text.slice(text.indexOf(',')+1,text.indexOf('-'));
  const steamid = text.slice(0,text.indexOf(','));

  getAvatarUrl(steamid);
}