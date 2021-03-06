const Device = require('./Device');


class RollUpShutter extends Device {
    constructor (name, status, movable, consumption, type) {
        super(name, status, movable, consumption);

        // consumption => kW for every use

        this.type = type;
    }

    open() {
        if (!this.getStatus()) {
            this.setStatus(true)

            this.totalConsumption += this.consumption;

            return true;
        }

        return false;
    }

    close() {
        if (this.getStatus()) {
            this.setStatus(false)

            this.totalConsumption += this.consumption;

            return true;
        }

        return false;
    }

    isOpen() {
        return this.getStatus();
    }

    getType() {
        return this.type;
    }
}

module.exports = RollUpShutter;