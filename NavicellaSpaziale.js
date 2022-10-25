let Navicella = class {

    constructor(height,width,color,speed,weapons){
        this.height = height;
        this.width = width;
        this.color = color;
        this.speed = speed;
        this.weapons = weapons;
    }
    getSpeed() {
        if(this.speed >= 9000){
            return(" ARE YOU CRAZY CI CAGHIAMO SOTTO COME A GUBBIO ");
        }
    }
    getHeight() {return " arcicazzo ma è enorme"}
}

module.exports = Navicella;