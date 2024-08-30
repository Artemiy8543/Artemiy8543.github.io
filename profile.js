const API_KEY = 'CA5B8A7427276DFEABDD85A63C5121CF';
data_heroes = [{id:1,name:"npc_dota_hero_antimage",count:0,avg:0},
              {id:2,name:"npc_dota_hero_axe",count:0,avg:0},
              {id:3,name:"npc_dota_hero_bane",count:0,avg:0},
              {id:4,name:"npc_dota_hero_bloodseeker",count:0,avg:0},
              {id:5,name:"npc_dota_hero_crystal_maiden",count:0,avg:0},
              {id:6,name:"npc_dota_hero_drow_ranger",count:0,avg:0},
              {id:7,name:"npc_dota_hero_earthshaker",count:0,avg:0},
              {id:8,name:"npc_dota_hero_juggernaut",count:0,avg:0},
              {id:9,name:"npc_dota_hero_mirana",count:0,avg:0},
              {id:10,name:"npc_dota_hero_morphling",count:0,avg:0},
              {id:11,name:"npc_dota_hero_nevermore",count:0,avg:0},
              {id:12,name:"npc_dota_hero_phantom_lancer",count:0,avg:0},
              {id:13,name:"npc_dota_hero_puck",count:0,avg:0},
              {id:14,name:"npc_dota_hero_pudge",count:0,avg:0},
              {id:15,name:"npc_dota_hero_razor",count:0,avg:0},
              {id:16,name:"npc_dota_hero_sand_king",count:0,avg:0},
              {id:17,name:"npc_dota_hero_storm_spirit",count:0,avg:0},
              {id:18,name:"npc_dota_hero_sven",count:0,avg:0},
              {id:19,name:"npc_dota_hero_tiny",count:0,avg:0},
              {id:20,name:"npc_dota_hero_vengefulspirit",count:0,avg:0},
              {id:21,name:"npc_dota_hero_windrunner",count:0,avg:0},
              {id:22,name:"npc_dota_hero_zuus",count:0,avg:0},
              {id:23,name:"npc_dota_hero_kunkka",count:0,avg:0},
              {id:25,name:"npc_dota_hero_lina",count:0,avg:0},
              {id:26,name:"npc_dota_hero_lion",count:0,avg:0},
              {id:27,name:"npc_dota_hero_shadow_shaman",count:0,avg:0},
              {id:28,name:"npc_dota_hero_slardar",count:0,avg:0},
              {id:29,name:"npc_dota_hero_tidehunter",count:0,avg:0},
              {id:30,name:"npc_dota_hero_witch_doctor",count:0,avg:0},
              {id:31,name:"npc_dota_hero_lich",count:0,avg:0},
              {id:32,name:"npc_dota_hero_riki",count:0,avg:0},
              {id:33,name:"npc_dota_hero_enigma",count:0,avg:0},
              {id:34,name:"npc_dota_hero_tinker",count:0,avg:0},
              {id:35,name:"npc_dota_hero_sniper",count:0,avg:0},
              {id:36,name:"npc_dota_hero_necrolyte",count:0,avg:0},
              {id:37,name:"npc_dota_hero_warlock",count:0,avg:0},
              {id:38,name:"npc_dota_hero_beastmaster",count:0,avg:0},
              {id:39,name:"npc_dota_hero_queenofpain",count:0,avg:0},
              {id:40,name:"npc_dota_hero_venomancer",count:0,avg:0},
              {id:41,name:"npc_dota_hero_faceless_void",count:0,avg:0},
              {id:42,name:"npc_dota_hero_skeleton_king",count:0,avg:0},
              {id:43,name:"npc_dota_hero_death_prophet",count:0,avg:0},
              {id:44,name:"npc_dota_hero_phantom_assassin",count:0,avg:0},
              {id:45,name:"npc_dota_hero_pugna",count:0,avg:0},
              {id:46,name:"npc_dota_hero_templar_assassin",count:0,avg:0},
              {id:47,name:"npc_dota_hero_viper",count:0,avg:0},
              {id:48,name:"npc_dota_hero_luna",count:0,avg:0},
              {id:49,name:"npc_dota_hero_dragon_knight",count:0,avg:0},
              {id:50,name:"npc_dota_hero_dazzle",count:0,avg:0},
              {id:51,name:"npc_dota_hero_rattletrap",count:0,avg:0},
              {id:52,name:"npc_dota_hero_leshrac",count:0,avg:0},
              {id:53,name:"npc_dota_hero_furion",count:0,avg:0},
              {id:54,name:"npc_dota_hero_life_stealer",count:0,avg:0},
              {id:55,name:"npc_dota_hero_dark_seer",count:0,avg:0},
              {id:56,name:"npc_dota_hero_clinkz",count:0,avg:0},
              {id:57,name:"npc_dota_hero_omniknight",count:0,avg:0},
              {id:58,name:"npc_dota_hero_enchantress",count:0,avg:0},
              {id:59,name:"npc_dota_hero_huskar",count:0,avg:0},
              {id:60,name:"npc_dota_hero_night_stalker",count:0,avg:0},
              {id:61,name:"npc_dota_hero_broodmother",count:0,avg:0},
              {id:62,name:"npc_dota_hero_bounty_hunter",count:0,avg:0},
              {id:63,name:"npc_dota_hero_weaver",count:0,avg:0},
              {id:64,name:"npc_dota_hero_jakiro",count:0,avg:0},
              {id:65,name:"npc_dota_hero_batrider",count:0,avg:0},
              {id:66,name:"npc_dota_hero_chen",count:0,avg:0},
              {id:67,name:"npc_dota_hero_spectre",count:0,avg:0},
              {id:68,name:"npc_dota_hero_ancient_apparition",count:0,avg:0},
              {id:69,name:"npc_dota_hero_doom_bringer",count:0,avg:0},
              {id:70,name:"npc_dota_hero_ursa",count:0,avg:0},
              {id:71,name:"npc_dota_hero_spirit_breaker",count:0,avg:0},
              {id:72,name:"npc_dota_hero_gyrocopter",count:0,avg:0},
              {id:73,name:"npc_dota_hero_alchemist",count:0,avg:0},
              {id:74,name:"npc_dota_hero_invoker",count:0,avg:0},
              {id:75,name:"npc_dota_hero_silencer",count:0,avg:0},
              {id:76,name:"npc_dota_hero_obsidian_destroyer",count:0,avg:0},
              {id:77,name:"npc_dota_hero_lycan",count:0,avg:0},
              {id:78,name:"npc_dota_hero_brewmaster",count:0,avg:0},
              {id:79,name:"npc_dota_hero_shadow_demon",count:0,avg:0},
              {id:80,name:"npc_dota_hero_lone_druid",count:0,avg:0},
              {id:81,name:"npc_dota_hero_chaos_knight",count:0,avg:0},
              {id:82,name:"npc_dota_hero_meepo",count:0,avg:0},
              {id:83,name:"npc_dota_hero_treant",count:0,avg:0},
              {id:84,name:"npc_dota_hero_ogre_magi",count:0,avg:0},
              {id:85,name:"npc_dota_hero_undying",count:0,avg:0},
              {id:86,name:"npc_dota_hero_rubick",count:0,avg:0},
              {id:87,name:"npc_dota_hero_disruptor",count:0,avg:0},
              {id:88,name:"npc_dota_hero_nyx_assassin",count:0,avg:0},
              {id:89,name:"npc_dota_hero_naga_siren",count:0,avg:0},
              {id:90,name:"npc_dota_hero_keeper_of_the_light",count:0,avg:0},
              {id:91,name:"npc_dota_hero_wisp",count:0,avg:0},
              {id:92,name:"npc_dota_hero_visage",count:0,avg:0},
              {id:93,name:"npc_dota_hero_slark",count:0,avg:0},
              {id:94,name:"npc_dota_hero_medusa",count:0,avg:0},
              {id:95,name:"npc_dota_hero_troll_warlord",count:0,avg:0},
              {id:96,name:"npc_dota_hero_centaur",count:0,avg:0},
              {id:97,name:"npc_dota_hero_magnataur",count:0,avg:0},
              {id:98,name:"npc_dota_hero_shredder",count:0,avg:0},
              {id:99,name:"npc_dota_hero_bristleback",count:0,avg:0},
              {id:100,name:"npc_dota_hero_tusk",count:0,avg:0},
              {id:101,name:"npc_dota_hero_skywrath_mage",count:0,avg:0},
              {id:102,name:"npc_dota_hero_abaddon",count:0,avg:0},
              {id:103,name:"npc_dota_hero_elder_titan",count:0,avg:0},
              {id:104,name:"npc_dota_hero_legion_commander",count:0,avg:0},
              {id:105,name:"npc_dota_hero_techies",count:0,avg:0},
              {id:106,name:"npc_dota_hero_ember_spirit",count:0,avg:0},
              {id:107,name:"npc_dota_hero_earth_spirit",count:0,avg:0},
              {id:108,name:"npc_dota_hero_abyssal_underlord",count:0,avg:0},
              {id:109,name:"npc_dota_hero_terrorblade",count:0,avg:0},
              {id:110,name:"npc_dota_hero_phoenix",count:0,avg:0},
              {id:111,name:"npc_dota_hero_oracle",count:0,avg:0},
              {id:112,name:"npc_dota_hero_winter_wyvern",count:0,avg:0},
              {id:113,name:"npc_dota_hero_arc_warden",count:0,avg:0},
              {id:114,name:"npc_dota_hero_monkey_king",count:0,avg:0},
              {id:119,name:"npc_dota_hero_dark_willow",count:0,avg:0},
              {id:120,name:"npc_dota_hero_pangolier",count:0,avg:0},
              {id:121,name:"npc_dota_hero_grimstroke",count:0,avg:0},
              {id:123,name:"npc_dota_hero_hoodwink",count:0,avg:0},
              {id:126,name:"npc_dota_hero_void_spirit",count:0,avg:0},
              {id:128,name:"npc_dota_hero_snapfire",count:0,avg:0},
              {id:129,name:"npc_dota_hero_mars",count:0,avg:0},
              {id:131,name:"npc_dota_hero_ringmaster",count:0,avg:0},
              {id:135,name:"npc_dota_hero_dawnbreaker",count:0,avg:0},
              {id:136,name:"npc_dota_hero_marci",count:0,avg:0},
              {id:137,name:"npc_dota_hero_primal_beast",count:0,avg:0},
              {id:138,name:"npc_dota_hero_muerta",count:0,avg:0}];

function viewMatches(){
    window.location.href="history.html?steamid=" + id;
}

function addListeners(request){
    request.addEventListener("loadend", null);
}

total_matches = 0

async function addHero(matchID, steamID){
    const match_url = "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/matches/" + matchID;
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", match_url);
        request.send();
        request.onloadend = () => {
            const data = request.responseText;
            text = data.replace(/;00/g, ";");
            if(text.substr(text.indexOf("=") + 1) == "") return resolve();

            steaminfo = text.substr(0, text.indexOf("="));
            heroId = Number(steaminfo.substr(0, steaminfo.indexOf("+")));
            steam_id = steaminfo.substr(steaminfo.indexOf("+") + 1);

            if (steamID != "-1" && steamID != steam_id) return resolve();

            wave = text.substr(0,text.lastIndexOf(";"));
            wave = wave.substr(wave.lastIndexOf(";")+1);
            wave = wave.substr(0, wave.indexOf("{"));
            if(wave.indexOf("=")!=-1)wave = wave.substr(wave.indexOf("=")+1);
                wave = Number(wave);

            if(total_matches<10){
                const mainMatches = document.getElementById("matches");
                total_matches += 1;
                matches_mainDiv = document.createElement("button");
                matches_mainDiv.className = "match";
                matches_mainDiv.onclick = function(){
                    window.location.href="match.html?id=" + matchID;
                };

                heroImg = document.createElement("img");
                heroImg.className = "hero-match";
                heroImg.src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/" + data_heroes.find(item => item.id == heroId).name.slice(14) + ".png";

                matchName = document.createElement("h1");
                matchName.className = "match-id";
                matchName.textContent = matchID;

                matchWave = document.createElement("h1");
                matchWave.className = "match-wave";
                matchWave.textContent = wave;

                mainMatches.appendChild(matches_mainDiv);

                matches_mainDiv.appendChild(heroImg);
                matches_mainDiv.appendChild(matchName);
                matches_mainDiv.appendChild(matchWave);
            }

            const hero = data_heroes.find(item => item.id == heroId);
            if(hero){
                hero.avg = Math.ceil((hero.avg * hero.count + wave) / (hero.count + 1));
                hero.count += 1;
            }
            resolve();
        };
        request.onerror = reject;
    });
}

async function GetMatchesData(url, steamID){
    const steamRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamID}`);
    if(steamRequest.status != 200){
        return;
    }
    const steamData = await steamRequest.json();

    const Avatar = document.getElementById("PlayerAvatar");
    const Name = document.getElementById("PlayerName");

    Avatar.src = steamData.response.players[0].avatarmedium;
    Name.textContent = steamData.response.players[0].personaname;

    const Http = new XMLHttpRequest();
    addListeners(Http);
    Http.open("GET", "https://raw.githubusercontent.com/Artemiy8543/Leaderbords/master/data.txt");
    Http.send();
    Http.onloadend = (e) => {
      rawdata = Http.responseText;
      rawdata = rawdata.replace(/\n/g, "");
      while(rawdata.indexOf(";")!=-1){
        Dsteamid = rawdata.substr(0, rawdata.indexOf(","));
        if(Dsteamid==steamID){
            Dinfo = rawdata.substr(0, rawdata.indexOf(";"));
            Dinfo = Dinfo.substr(Dinfo.indexOf(",")+1);
            Drank = Dinfo.substr(0,Dinfo.indexOf("-"));
            const rankText = document.getElementById("PlayerRank");
            rankText.textContent = "Рейтинг:" + Drank;
            break;
        }
        rawdata=rawdata.substr(rawdata.indexOf(";")+1);
      }
    }

    const request = await fetch(url);
    if(request.status != 200) return;

    const data = await request.json();
    const promises = data.map(match => addHero(match.name, steamID));
    await Promise.all(promises);
    data_heroes.sort((a, b) => b.count - a.count);

    const mainHeroes = document.getElementById("heroes");

    Dgames = 0;

    for(let hero_id=0;hero_id<10;hero_id++){
        hero_mainDiv = document.createElement("div");
        hero_mainDiv.className = "hero";

        heroImg = document.createElement("img");
        heroImg.className = "hero-avatar";
        heroImg.src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/" + data_heroes[hero_id].name.slice(14) + ".png";

        heroName = document.createElement("h1");
        heroName.className = "hero-name";
        heroName.textContent = data_heroes[hero_id].name.slice(14);

        infoDiv = document.createElement("div");
        infoDiv.className = "hero-info";

        heroGames = document.createElement("h1");
        heroGames.className = "hero-games";
        heroGames.textContent = data_heroes[hero_id].count;

        Dgames += data_heroes[hero_id].count;

        heroWave = document.createElement("h1");
        heroWave.className = "hero-wave";
        heroWave.textContent = data_heroes[hero_id].avg;

        mainHeroes.appendChild(hero_mainDiv);

        hero_mainDiv.appendChild(heroImg);
        hero_mainDiv.appendChild(heroName);
        hero_mainDiv.appendChild(infoDiv);

        infoDiv.appendChild(heroGames);
        infoDiv.appendChild(heroWave);
    }
    const gamesText = document.getElementById("PlayerGames");
    gamesText.textContent = "Игр:" + Dgames;
}
const self_url = new URLSearchParams(window.location.search);
id = self_url.get('steamid');
if(id==null)id="-1";

const url = "https://api.github.com/repos/Artemiy8543/Leaderbords/contents/matches";

GetMatchesData(url, id);