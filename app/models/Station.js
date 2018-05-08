 class Station{

//id_location
//name
//positionX
//positionY


constructor(id_Station,name,positionX,positionY){
    this._id_Station = id_Station;
    this._name = name;
    this._positionX = positionX;
    this._positionY = positionY;
	}


    get id_Station() {
        return this._id_Station;
    }

    set id_Station(value) {
        this._id_Station = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get positionX() {
        return this._positionX;
    }

    set positionX(value) {
        this._positionX = value;
    }

    get positionY() {
        return this._positionY;
    }

    set positionY(value) {
        this._positionY = value;
    }
}