class Model {
    skin = "";
    helmet = new Helmet("type", "color", "visibility")
    chestplate = new Chestplate(type, color, visibility)
    leggings = new Leggings(type, color, visibility)
    boots = new Boots(type, color, visibility)

    setSkin(skin_path) {
        this.skin = skin_path;
    }
}

class Armor {
    type = "";
    color = "";
    visibility = false;

    constructor(type, color, visibility) {
        this.type = type;
        this.color = color;
        this.visibility = visibility;
    }
    
    setType(type) {
        this.type = type;
    }
    setColor(color) {
        this.color = color;
    }
    setVisibility(visibility) {
        this.visibility = visibility;
    }
}

class Helmet extends Armor {
    
}

class Chestplate extends Armor {
    
}

class Leggings extends Armor {
    
}

class Boots extends Armor {
    
}