class Model {
    skin = "";
    helmetVisibility
    chestplateVisibility
    leggingsVisibility
    bootsVisibility

    setSkin(skin_path) {
        this.skin = skin_path;
    }
}

class Armor {
    helmet;
    chestplate;
    leggings = new Leggings();
    boots;
    
}

class Helmet extends Armor {

}

class Chestplate extends Armor {
    
}

class Leggings extends Armor {
    
}

class Boots extends Armor {
    
}