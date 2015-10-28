res = {
"hashFile":{
    "MM20_PNG":"ui/MainMenu/MM20.png",
    "MM12_PNG":"ui/MainMenu/MM12.png",
    "BAS31_PNG":"ui/Login/BaS31.png",
    "ROBOT_XML":"armature/robot.xml",
    "MM04_PNG":"ui/MainMenu/MM04.png",
    "MM03_PNG":"ui/MainMenu/MM03.png",
    "LI07_JPG":"ui/Login/LI07.jpg",
    "WORLD_4_PLIST":"ui/World/World_4.plist",
    "LAYER_JSON":"ui/Layer.json",
    "WORLD_4_PNG":"ui/World/World_4.png",
    "MM10_PNG":"ui/MainMenu/MM10.png",
    "ROBOT_PLIST":"armature/robot.plist",
    "ISO_PNG":"ui/iso.png",
    "MM02_PNG":"ui/MainMenu/MM02.png",
    "MM19_PNG":"ui/MainMenu/MM19.png",
    "MM01_PNG":"ui/MainMenu/MM01.png",
    "WORLD_1_PLIST":"ui/World/World_1.plist",
    "MM18_PNG":"ui/MainMenu/MM18.png",
    "WORLDMAP_TMX":"ui/WorldMap.tmx",
    "MAINMENU_JSON":"ui/MainMenu.json",
    "TILE_ISO_OFFSET_PNG":"ui/tile_iso_offset.png",
    "MM17_PNG":"ui/MainMenu/MM17.png",
    "LOGIN_JSON":"ui/Login.json",
    "MM09_PNG":"ui/MainMenu/MM09.png",
    "WORLD_1_PNG":"ui/World/World_1.png",
    "HELLOWORLD_PNG":"HelloWorld.png",
    "MM24_PNG":"ui/MainMenu/MM24.png",
    "CONTRYLAYER_JSON":"ui/ContryLayer.json",
    "MM16_PNG":"ui/MainMenu/MM16.png",
    "MM08_PNG":"ui/MainMenu/MM08.png",
    "TILE_ISO_OFFSET_TMX":"ui/tile_iso_offset.tmx",
    "MM23_PNG":"ui/MainMenu/MM23.png",
    "ROBOT_PNG":"armature/robot.png",
    "MM15_PNG":"ui/MainMenu/MM15.png",
    "MM07_PNG":"ui/MainMenu/MM07.png",
    "MM22_PNG":"ui/MainMenu/MM22.png",
    "MM14_PNG":"ui/MainMenu/MM14.png",
    "MM06_PNG":"ui/MainMenu/MM06.png",
    "MM21_PNG":"ui/MainMenu/MM21.png",
    "BAS32_PNG":"ui/Login/BaS32.png",
    "MM13_PNG":"ui/MainMenu/MM13.png",
    "MM05_PNG":"ui/MainMenu/MM05.png",
    "ISO-TEST1_TMX":"ui/iso-test1.tmx"
 },

"groups":{
    "logo":[
        "BAS32_PNG",
        "LI07_JPG",
        "LOGIN_JSON",
        "BAS31_PNG"
     ],
    "world":[
        "WORLD_4_PLIST",
        "WORLD_4_PNG",
        "WORLD_1_PLIST",
        "WORLD_1_PNG"
     ],
    "robot":[
        "ROBOT_PNG",
        "ROBOT_PLIST",
        "ROBOT_XML"
     ],
    "MainMenu":[
        "MM22_PNG",
        "MM23_PNG",
        "MM24_PNG",
        "MM10_PNG",
        "MM12_PNG",
        "MM13_PNG",
        "MM14_PNG",
        "MM15_PNG",
        "MM16_PNG",
        "MM17_PNG",
        "MM01_PNG",
        "MM02_PNG",
        "MM18_PNG",
        "MM03_PNG",
        "MM19_PNG",
        "MM04_PNG",
        "MM05_PNG",
        "MM06_PNG",
        "MM07_PNG",
        "MAINMENU_JSON",
        "MM08_PNG",
        "MM09_PNG",
        "MM20_PNG",
        "MM21_PNG"
     ]
   }

};

var ResManager = function() {
    this.groups = res.groups;
};

ResManager.prototype.loadGroup = function(group) {
    if (group) {
        var ret = group.map(function(key) {
            return 'res/' +res.hashFile[key];
        });
        return ret;
    }
};

global.resManager = new ResManager();
