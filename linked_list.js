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
    add(value) {
        if(!this.start) {
            this.end = new Item(value, null);
            this.start = this.end;
            return this.end;
        } else if(this.start != null && this.start == this.end) {
            this.end = new Item(value, null) 
            this.start.link = this.end;
            return this.end;
        }
        this.end.link = new Item(value, null);
        return this.end.link;
    }
}

let list = new LinkedList();
list.add();