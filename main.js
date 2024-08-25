const API_KEY = 'F97155F15091531BCEC721143B9DD638';
data_heroes = [{"id":1,"name":"npc_dota_hero_antimage"},
              {"id":2,"name":"npc_dota_hero_axe"},
              {"id":3,"name":"npc_dota_hero_bane"},
              {"id":4,"name":"npc_dota_hero_bloodseeker"},
              {"id":5,"name":"npc_dota_hero_crystal_maiden"},
              {"id":6,"name":"npc_dota_hero_drow_ranger"},
              {"id":7,"name":"npc_dota_hero_earthshaker"},
              {"id":8,"name":"npc_dota_hero_juggernaut"},
              {"id":9,"name":"npc_dota_hero_mirana"},
              {"id":10,"name":"npc_dota_hero_morphling"},
              {"id":11,"name":"npc_dota_hero_nevermore"},
              {"id":12,"name":"npc_dota_hero_phantom_lancer"},
              {"id":13,"name":"npc_dota_hero_puck"},
              {"id":14,"name":"npc_dota_hero_pudge"},
              {"id":15,"name":"npc_dota_hero_razor"},
              {"id":16,"name":"npc_dota_hero_sand_king"},
              {"id":17,"name":"npc_dota_hero_storm_spirit"},
              {"id":18,"name":"npc_dota_hero_sven"},
              {"id":19,"name":"npc_dota_hero_tiny"},
              {"id":20,"name":"npc_dota_hero_vengefulspirit"},
              {"id":21,"name":"npc_dota_hero_windrunner"},
              {"id":22,"name":"npc_dota_hero_zuus"},
              {"id":23,"name":"npc_dota_hero_kunkka"},
              {"id":25,"name":"npc_dota_hero_lina"},
              {"id":26,"name":"npc_dota_hero_lion"},
              {"id":27,"name":"npc_dota_hero_shadow_shaman"},
              {"id":28,"name":"npc_dota_hero_slardar"},
              {"id":29,"name":"npc_dota_hero_tidehunter"},
              {"id":30,"name":"npc_dota_hero_witch_doctor"},
              {"id":31,"name":"npc_dota_hero_lich"},
              {"id":32,"name":"npc_dota_hero_riki"},
              {"id":33,"name":"npc_dota_hero_enigma"},
              {"id":34,"name":"npc_dota_hero_tinker"},
              {"id":35,"name":"npc_dota_hero_sniper"},
              {"id":36,"name":"npc_dota_hero_necrolyte"},
              {"id":37,"name":"npc_dota_hero_warlock"},
              {"id":38,"name":"npc_dota_hero_beastmaster"},
              {"id":39,"name":"npc_dota_hero_queenofpain"},
              {"id":40,"name":"npc_dota_hero_venomancer"},
              {"id":41,"name":"npc_dota_hero_faceless_void"},
              {"id":42,"name":"npc_dota_hero_skeleton_king"},
              {"id":43,"name":"npc_dota_hero_death_prophet"},
              {"id":44,"name":"npc_dota_hero_phantom_assassin"},
              {"id":45,"name":"npc_dota_hero_pugna"},
              {"id":46,"name":"npc_dota_hero_templar_assassin"},
              {"id":47,"name":"npc_dota_hero_viper"},
              {"id":48,"name":"npc_dota_hero_luna"},
              {"id":49,"name":"npc_dota_hero_dragon_knight"},
              {"id":50,"name":"npc_dota_hero_dazzle"},
              {"id":51,"name":"npc_dota_hero_rattletrap"},
              {"id":52,"name":"npc_dota_hero_leshrac"},
              {"id":53,"name":"npc_dota_hero_furion"},
              {"id":54,"name":"npc_dota_hero_life_stealer"},
              {"id":55,"name":"npc_dota_hero_dark_seer"},
              {"id":56,"name":"npc_dota_hero_clinkz"},
              {"id":57,"name":"npc_dota_hero_omniknight"},
              {"id":58,"name":"npc_dota_hero_enchantress"},
              {"id":59,"name":"npc_dota_hero_huskar"},
              {"id":60,"name":"npc_dota_hero_night_stalker"},
              {"id":61,"name":"npc_dota_hero_broodmother"},
              {"id":62,"name":"npc_dota_hero_bounty_hunter"},
              {"id":63,"name":"npc_dota_hero_weaver"},
              {"id":64,"name":"npc_dota_hero_jakiro"},
              {"id":65,"name":"npc_dota_hero_batrider"},
              {"id":66,"name":"npc_dota_hero_chen"},
              {"id":67,"name":"npc_dota_hero_spectre"},
              {"id":68,"name":"npc_dota_hero_ancient_apparition"},
              {"id":69,"name":"npc_dota_hero_doom_bringer"},
              {"id":70,"name":"npc_dota_hero_ursa"},
              {"id":71,"name":"npc_dota_hero_spirit_breaker"},
              {"id":72,"name":"npc_dota_hero_gyrocopter"},
              {"id":73,"name":"npc_dota_hero_alchemist"},
              {"id":74,"name":"npc_dota_hero_invoker"},
              {"id":75,"name":"npc_dota_hero_silencer"},
              {"id":76,"name":"npc_dota_hero_obsidian_destroyer"},
              {"id":77,"name":"npc_dota_hero_lycan"},
              {"id":78,"name":"npc_dota_hero_brewmaster"},
              {"id":79,"name":"npc_dota_hero_shadow_demon"},
              {"id":80,"name":"npc_dota_hero_lone_druid"},
              {"id":81,"name":"npc_dota_hero_chaos_knight"},
              {"id":82,"name":"npc_dota_hero_meepo"},
              {"id":83,"name":"npc_dota_hero_treant"},
              {"id":84,"name":"npc_dota_hero_ogre_magi"},
              {"id":85,"name":"npc_dota_hero_undying"},
              {"id":86,"name":"npc_dota_hero_rubick"},
              {"id":87,"name":"npc_dota_hero_disruptor"},
              {"id":88,"name":"npc_dota_hero_nyx_assassin"},
              {"id":89,"name":"npc_dota_hero_naga_siren"},
              {"id":90,"name":"npc_dota_hero_keeper_of_the_light"},
              {"id":91,"name":"npc_dota_hero_wisp"},
              {"id":92,"name":"npc_dota_hero_visage"},
              {"id":93,"name":"npc_dota_hero_slark"},
              {"id":94,"name":"npc_dota_hero_medusa"},
              {"id":95,"name":"npc_dota_hero_troll_warlord"},
              {"id":96,"name":"npc_dota_hero_centaur"},
              {"id":97,"name":"npc_dota_hero_magnataur"},
              {"id":98,"name":"npc_dota_hero_shredder"},
              {"id":99,"name":"npc_dota_hero_bristleback"},
              {"id":100,"name":"npc_dota_hero_tusk"},
              {"id":101,"name":"npc_dota_hero_skywrath_mage"},
              {"id":102,"name":"npc_dota_hero_abaddon"},
              {"id":103,"name":"npc_dota_hero_elder_titan"},
              {"id":104,"name":"npc_dota_hero_legion_commander"},
              {"id":105,"name":"npc_dota_hero_techies"},
              {"id":106,"name":"npc_dota_hero_ember_spirit"},
              {"id":107,"name":"npc_dota_hero_earth_spirit"},
              {"id":108,"name":"npc_dota_hero_abyssal_underlord"},
              {"id":109,"name":"npc_dota_hero_terrorblade"},
              {"id":110,"name":"npc_dota_hero_phoenix"},
              {"id":111,"name":"npc_dota_hero_oracle"},
              {"id":112,"name":"npc_dota_hero_winter_wyvern"},
              {"id":113,"name":"npc_dota_hero_arc_warden"},
              {"id":114,"name":"npc_dota_hero_monkey_king"},
              {"id":119,"name":"npc_dota_hero_dark_willow"},
              {"id":120,"name":"npc_dota_hero_pangolier"},
              {"id":121,"name":"npc_dota_hero_grimstroke"},
              {"id":123,"name":"npc_dota_hero_hoodwink"},
              {"id":126,"name":"npc_dota_hero_void_spirit"},
              {"id":128,"name":"npc_dota_hero_snapfire"},
              {"id":129,"name":"npc_dota_hero_mars"},
              {"id":131,"name":"npc_dota_hero_ringmaster"},
              {"id":135,"name":"npc_dota_hero_dawnbreaker"},
              {"id":136,"name":"npc_dota_hero_marci"},
              {"id":137,"name":"npc_dota_hero_primal_beast"},
              {"id":138,"name":"npc_dota_hero_muerta"}];

function addListeners(request) {
  request.addEventListener("loadend", null);
}

async function getAvatarUrl(steamId, rank, heroId){
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
    if(request.status != 200){
        leaderboard.removeChild(leaderDiv);
        return;
    }
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
      const heroid = Number(text.slice(text.indexOf('-')+1,text.indexOf('{')));

      getAvatarUrl(steamid, rank, heroid);
      text = text.slice(text.indexOf(';')+1);
  }
}