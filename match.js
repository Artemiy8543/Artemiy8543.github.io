custom_items = ["vladimir_pact",
                "veil_of_dagon",
                "radiance_prc",
                "creep_desolator",
                "shivas_strom",
                "satanic_of_madness",
                "refresher_core",
                "midas_component",
                "meteor_rain",
                "manaback",
                "manaback2",
                "manaback3",
                "magic_crit",
                "lightning_sword",
                "great_magic_crit",
                "gladiator_guard",
                "firecracker_small",
                "str_book",
                "int_book",
                "agi_book",
                "bloodstone_shield",
                "basher_slardar",
                "attacker_midas_str",
                "attacker_midas_int",
                "attacker_midas_agi",
                "armlet_of_mjolnir",
                "trident_custom",
                "infinity_moon_shard"];

function addListeners(request) {
  request.addEventListener("loadend", null);
}

function GetItemUrl(item_name){
    if(custom_items.indexOf(item_name)!=-1)return "items/" + item_name + ".png";
    return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/" + item_name + ".png";
}

const self_url = new URLSearchParams(window.location.search);
const id = self_url.get('id');
const match_url = "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/matches/" + id;

const Http = new XMLHttpRequest();
addListeners(Http);
Http.open("GET", match_url);
Http.send();
Http.onloadend = (e) => {
  const main = document.getElementById('main');
  const data = Http.responseText;
  text = data.replace(/\n/g, "");
  text = text.replace(/00/g, "");
  text = text.substr(text.indexOf("=")+1).replace(/item_/g, "");
  while(text.indexOf(";")!=-1){
      wave = text.substr(0, text.indexOf(";"));
      wave_id = wave.substr(0, wave.indexOf("{"));
      wave = wave.substr(wave.indexOf("{"));
      inventory = (wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-2)).split(',');
      wave = wave.substr(wave.indexOf("}")+1);
      backpack = (wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-2)).split(',');
      wave = wave.substr(wave.indexOf("}")+1);
      base = (wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-2)).split(',');
      wave = wave.substr(wave.indexOf("}")+1);
      neutral = (wave.substr(wave.indexOf("{")+1, wave.indexOf("}")-2)).split(',')[0];

      const waveid = document.createElement('h1');
      waveid.className = 'wave-id';
      waveid.textContent = wave_id;

      const waveDiv = document.createElement('div');
      waveDiv.className = 'wave';

      const infosDiv = document.createElement('div');
      infosDiv.className = 'infos';

      const inventoryDiv = document.createElement('div');
      inventoryDiv.className = 'inventory';

      for (let ind = 0; ind < inventory.length; ind++){
        console.log(GetItemUrl(inventory[ind]));
        const item = document.createElement('img');
        item.className = 'item';
        if(inventory[ind]!="-")item.src = GetItemUrl(inventory[ind]);
        inventoryDiv.appendChild(item);
      }

      for (let ind = 0; ind < backpack.length; ind++){
        const item = document.createElement('img');
        item.className = 'item';
        if(backpack[ind]!="-")item.src = GetItemUrl(backpack[ind]);
        inventoryDiv.appendChild(item);
      }

      const neutral_item = document.createElement('img');
      neutral_item.className = 'neutral-item';
      if(neutral!="-")neutral_item.src = GetItemUrl(neutral);

      infosDiv.appendChild(inventoryDiv);
      infosDiv.appendChild(neutral_item);
      waveDiv.appendChild(infosDiv);
      waveDiv.appendChild(waveid);
      main.appendChild(waveDiv);

      text = text.substr(text.indexOf(";")+1);
  }
}
