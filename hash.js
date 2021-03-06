﻿/*Реализовать мап/хеш */
class Item {
    constructor(value, next) {
        this.value = value;
        this.next = next;
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
        } else {
	        let gup = new Item(value, null)
            this.end.next = gup;
	        this.end = gup;
	    }
    }

    get(index) {
        if(index < 0 || !isFinite(index) || index == undefined) return;
        let item = this.start;
        for(let i = 0; i < index; i++) {
            if(item.next == null) return;
            item = item.next;
        }
        return item;
    }

    remove(index) {
        if(index < 0 || !isFinite(index) || index == undefined) return;
        let item = this.start;
        let itemBack;
        for(let i = 0; i < index; i++) {
            if(item.next == null) return;
            itemBack = item;
            item = item.next;
        }
        itemBack.next = item.next;
        return itemBack;

   }
}

let list = new LinkedList();
list.add('Я первый');
list.add(2);
list.add(3);
list.add('Я четвертый');
list.add('Я пятый');
list.add('6');
