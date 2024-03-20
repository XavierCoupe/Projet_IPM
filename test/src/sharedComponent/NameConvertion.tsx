interface Item {
    name: string;
    id: number;
  }

function NameConvertion(){
    const dico : Item[] = [
        {name: "Acer palmatum Brandt's Dwarf", id: 45},
        //{"Acer palmatum \u0027Brandt\u0027s Dwarf\u0027":45,"Acer japonicum \u0027Attaryi\u0027":19,"Acer palmatum \u0027Azuma Murasaki\u0027":38,"Acer palmatum \u0027Bloodgood\u0027":43,"Acer ginnala \u0027Flame\u0027":13,"Acer palmatum \u0027Beni Schichihenge\u0027":41,"Acer palmatum \u0027Burgundy Lace\u0027":46,"Acer \u0027Johin\u0027":10,"Acer palmatum \u0027Bonfire\u0027":44,"Abies alba":1,"Abies koreana \u0027Aurea\u0027":6,"Acer palmatum \u0027Arakawa\u0027":32,"Acer davidii":11,"Acer macrophyllum \u0027Mocha Rose\u0027":24,"Acer palmatum \u0027Aureum\u0027":36,"Acer negundo \u0027Kelly\u0027s Gold\u0027":26,"Acer palmatum \u0027Atrolineare\u0027":34,"Acer palmatum \u0027Gwen\u0027s Rose Delight\u0027":58,"Acer japonicum \u0027Emmett\u0027s Pumpkin\u0027":21,"Abies fraseri":5,"Acer ginnala":12,"Acer palmatum \u0027Alpenweiss\u0027":29,"Acer palmatum \u0027Green Mist\u0027":57,"Acer negundo \u0027Flamingo\u0027":25,"Acer palmatum \u0027Aka Shigitatsu Sawa\u0027":28,"Acer palmatum \u0027Green Hornet\u0027":56,"Acer macrophyllum":23,"Acer japonicum \u0027Green Cascade\u0027":22,"Acer palmatum \u0027Asahi Zuru\u0027":33,"Acer palmatum \u0027Chitose Yama\u0027":50,"Abies pinsapo \u0027Glauca\u0027":8,"Abies concolor \u0027Candicans\u0027":4,"Acer palmatum \u0027Butterfly\u0027":47,"Acer palmatum \u0027Atropurpureum\u0027":35,"Acer ginnala \u0027Mondy\u0027":14,"Acer griseum":16,"Acer japonicum":17,"Acer japonicum \u0027Aureum\u0027":20,"Acer palmatum \u0027Aoyagi\u0027":31,"Acer palmatum \u0027Glowing Embers\u0027":54,"Acer palmatum \u0027Chantilly Lace\u0027":48,"Acer palmatum \u0027Grandma Ghost\u0027":55,"Acer palmatum \u0027Ao Shime No Uchi\u0027":30,"Acer palmatum":27,"Acer palmatum \u0027Beni Otake\u0027":40,"Acer palmatum \u0027Coonara Pygmy\u0027":51,"Abies procera":9,"Abies concolor":3,"Acer ginnala \u0027Ruby Slippers\u0027":15,"Acer palmatum \u0027Ever Red\u0027":53,"Abies alba \u0027Pyramidalis\u0027":2,"Abies lasiocarpa":7,"Acer palmatum \u0027Chishio\u0027":49,"Acer palmatum \u0027Autumn Fire\u0027":37,"Acer palmatum \u0027Beni Kawa\u0027":39,"Acer palmatum \u0027Beni Tsukasa\u0027":42,"Acer palmatum \u0027Crimson Prince\u0027":52,"Acer japonicum \u0027Aconitifolium\u0027":18}
    ]
    return(dico);
}

export default NameConvertion