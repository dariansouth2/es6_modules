import Car from "./Car.js";

export default class Wishlist {

    constructor(){
        this.list = [];
        this.nexId = 0;
    }

    add(make, model, year){
        this.list.push(new Car(++this.nextId, make, model, year));
    }

    remove(carId){
        const index = this.list.findIndex((item) =>{
            return item.id == carId;
        });
    }
};