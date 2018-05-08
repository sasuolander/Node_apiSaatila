class Measurement {
	
	//id
	//time
	//temperature
	//location

	constructor(id_value,time,value,location,id_Station){
        this._value=value;
        this._id_value = id_value;
        this._time = time;
        this._location = location;
        this._id_Station = id_Station;
	}


    get id_value() {
        return this._id_value;
    }

    set id_value(value) {
        this._id_value = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get id_Station() {
        return this._id_Station;
    }

    set id_Station(value) {
        this._id_Station = value;
    }
}