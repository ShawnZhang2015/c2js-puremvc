var res = {
    HelloWorld_png : "res/HelloWorld.png",
    LI07_jpg: "res/ui/Login/LI07.jpg",
    Login_json: "res/ui/Login.json",
    Layer_json: "res/ui/Layer.json",
    BaS31_png: "res/ui/Login/BaS31.png",
    BaS32_png: "res/ui/Login/BaS32.png",
    MainMenu_json: "res/ui/MainMenu.json",
    MM01_png: "res/ui/MainMenu/MM01.png",
    MM02_png: "res/ui/MainMenu/MM02.png",
    MM03_png: "res/ui/MainMenu/MM03.png",
    MM04_png: "res/ui/MainMenu/MM04.png",
    MM05_png: "res/ui/MainMenu/MM05.png",
    MM06_png: "res/ui/MainMenu/MM06.png",
    MM07_png: "res/ui/MainMenu/MM07.png",
    MM08_png: "res/ui/MainMenu/MM08.png",
    MM09_png: "res/ui/MainMenu/MM09.png",
    MM10_png: "res/ui/MainMenu/MM10.png",
    MM12_png: "res/ui/MainMenu/MM12.png",
    MM13_png: "res/ui/MainMenu/MM13.png",
    MM14_png: "res/ui/MainMenu/MM14.png",
    MM15_png: "res/ui/MainMenu/MM15.png",
    MM16_png: "res/ui/MainMenu/MM16.png",
    MM17_png: "res/ui/MainMenu/MM17.png",
    MM18_png: "res/ui/MainMenu/MM18.png",
    MM19_png: "res/ui/MainMenu/MM19.png",
    MM20_png: "res/ui/MainMenu/MM20.png",
    MM21_png: "res/ui/MainMenu/MM21.png",
    MM22_png: "res/ui/MainMenu/MM22.png",
    MM23_png: "res/ui/MainMenu/MM23.png",
    MM24_png: "res/ui/MainMenu/MM24.png",
    CountryLayer_json: "res/ui/ContryLayer.json",
    World_1_png: "res/ui/World/World_1.png",
    World_1_plist: "res/ui/World/World_1.plist",
    World_4_plist: "res/ui/World/World_4.plist",
    World_4_png: "res/ui/World/World_4.png",
    WorldMap_tmx: "res/ui/WorldMap.tmx",
    tile_iso_offset_png: "res/ui/tile_iso_offset.png",
    tile_iso_offset_tmx: "res/ui/tile_iso_offset.tmx",
    iso_png: "res/ui/iso.png",
    iso_test1_tmx: "res/ui/iso-test1.tmx",
    robot_plist: "res/armature/robot.plist",
    robot_png: "res/armature/robot.png",
    robot_xml: "res/armature/robot.xml"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

global.G_RES = {
    res: res,
    resources: g_resources
};
