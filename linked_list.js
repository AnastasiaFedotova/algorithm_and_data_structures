/*Реализовать связанный список*/
class LinkedList {
    constructor() {
        this.obj = {}
        let index = 0;
    }
    get generationObj() {
       Object.defineProperty(this.obj, 'index');

    }
    set generationObj() {
        index += 1; 
    }
}

let list = new LinkedList().generationObj;