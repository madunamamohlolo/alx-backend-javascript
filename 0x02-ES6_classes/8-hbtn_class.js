class HolbertonClass {
    constructor(size, location) {
        this._size = typeof size === 'number' ? size : 0;
        this._location = typeof location === 'string' ? location : '';
    }

    get size() {
        return this._size;
    }

    set size(newSize) {
        if (typeof newSize === 'number') {
            this._size = newSize;
        }
    }

    get location() {
        return this._location;
    }

    set location(newLocation) {
        if (typeof newLocation === 'string') {
            this._location = newLocation;
        }
    }

    valueOf() {
        return this._size;
    }

    toString() {
        return this._location;
    }
}

export default HolbertonClass;
