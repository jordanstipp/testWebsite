Pokemon.all = [];

function Pokemon(name, type, hp, def, atk, legend) {
    if (!checkParameters(name, type,hp, def, atk, legend)) {
        throw "Type Error"
    }

    var classname = 'pokemon';
    this.name = name
    this.type = type
    this.hp = hp
    this.def = def
    this.atk = atk
    this.legend = legend

    this.attack = function (target, atk) {
        if(!checkTarget(target)) {
            throw "Not a Pokemon"
        } 
        target.hp -= atk - def; 
    }
    this.aliveCheck = function () {
            return this.hp > 0
    }

    Pokemon.all.push(this);
}

function checkParameters (name, type, hp, def, atk, legend) {
    if (typeof name != 'string') return false
    if (typeof name != 'string') return false
    if (typeof hp != 'number' || !isFinite(hp)) return false
    if (typeof def != 'number' || !isFinite(def)) return false
    if (typeof atk != 'number' || !isFinite(atk)) return false
    if (typeof legend != 'boolean') return false
}

function checkTarget(target) {
    if (target.classname != "pokemon") return false
}