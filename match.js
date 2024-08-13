function addListeners(request) {
  request.addEventListener("loadend", null);
}

const self_url = new URLSearchParams(window.location.search);
const id = self_url.get('id');
const match_url = "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/matches/" + id;

const Http = new XMLHttpRequest();
addListeners(Http);
Http.open("GET", match_url);
Http.send();
Http.onloadend = (e) => {
  const data = Http.responseText;
  text = data.replace(/\n/g, "");
  text = text.replace(/00/g, "");
  text = text.substr(text.indexOf("=")+1).replace(/item_/g, "");
  while(text.indexOf(";")!=-1){
      main = document.getElementById('main');
      wave = text.substr(0, text.indexOf(";"));
      wave_id = wave.substr(0, wave.indexOf("{"));
      wave = wave.substr(wave.indexOf("{"));
      inventory = wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-1);
      wave = wave.substr(wave.indexOf("}")+1);
      backpack = wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-1);
      wave = wave.substr(wave.indexOf("}")+1);
      base = wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-1);

      const waveDiv = document.createElement('div');
      waveDiv.className = 'wave';

      const infoDiv = document.createElement('div');
      infoDiv.className = 'infos';

      const inv = document.createElement('h1');
      inv.className = "inventory";

      const bpk = document.createElement('h1');
      bpk.className = "backpack";

      const bse = document.createElement('h1');
      bse.className = "base";

      const waveid = document.createElement('h1');
      waveid.className = "wave-id";

      inv.textContent = inventory.replace(/,/g, "|");
      bpk.textContent = backpack.replace(/,/g, "|");
      bse.textContent = base.replace(/,/g, "|");
      waveid.textContent = wave_id;

      infoDiv.appendChild(inv);
      infoDiv.appendChild(bpk);
      infoDiv.appendChild(bse);
      waveDiv.appendChild(infoDiv);
      waveDiv.appendChild(waveid);
      main.appendChild(waveDiv);
      text = text.substr(text.indexOf(";")+1);
  }
}