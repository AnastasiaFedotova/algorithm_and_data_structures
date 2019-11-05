/*Реализовать связанный список*/
class Item {
    constructor(value, link) {
        this.value = value;
        this.link = link;
    }
}


class LinkedList {
    constructor() {
        this.end = null;
        this.start = null;
    }
    getLink() {
        if(!this.start) {
            this.end = new Item;
            this.start =  this.end;
            return this.end;
        } 
        this.end = new Item;
        return this.end;
    }
    add(value) {
        return new Item(value, getLink());
    }
}

let list = new LinkedList();
list.add(4444);