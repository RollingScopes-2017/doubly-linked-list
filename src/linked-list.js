const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if(this.length == 0) {
            let temp = new Node(data);
            this._head = this._tail = temp; 
        } else {
            let temp = new Node(data,this._tail,null);
            this._tail.next = temp;
            this._tail = temp;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        if(index > -1 && index < this.length){
            let current = this._head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current.data;
        }
        return this;
    }

    insertAt(index, data) {
        if(index === this.length) {
            this.append(data);

        } /*else if (index === this.length-1) {
            let temp = new Node(data,this._tail.prev,this._tail);
            this._tail.prev.next = temp;
            this._tail.prev = temp;

        } else {
            let current = this._head;
            for (let i = 1; i <= index; i++) {
                current = current.next;
            }
            let temp = new Node(data,current,current.next);
            current.next.prev = temp;
            current.next = temp;

        }*/
        else {
            let current = this._head;
            while (current && index-- > 0) {
                current = current.next;
            }

            if (!current) {
                return this;
            }

            let temp = new Node(data, current.prev, current);
            
            if (current.prev) {
                current.prev.next = temp;
            } else {
                this._head = temp;
            }
                current.prev = temp;
            this.length++;
        }
        return this;        
    }

    isEmpty() {
        if(this.length == 0) return true;
        return false;
    }

    clear() {
        this._head = this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        /*if (index == 0) {
            this._head = this._head.next;
            this._head.prev = null;
        } else if (index == this.length-1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            let current = this._head;
            for (let i = 0; i < index; i++) {
            current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }*/
        if (index === 0 && this.length === 1) return this.clear();
        let current = this._head;
        while (current && index-- > 0) {
            current = current.next;
        }

        if (!current) {
            return this;
        }
        if (index === 0) {
            this._head = this._head.next;
            this._head.prev = null;
        } else if (index === this.length-1) {
            this._tail = this.tail.prev;
            this._tail.next = null;  
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }


        this.length--;
        return this;        
    }

    reverse() {
        if(this.length == 1) return this;
        let first = this._head;
        let last = this._tail;

        for (let i = 0; i*2 < this.length; i++) {
            let temp = first.data;
            first.data = last.data;
            last.data = temp;

            first = first.next;
            last = last.prev;
        }
        return this;
    }

    indexOf(data) {
        let current = this._head;
        for (let i = 0; i < this.length; i++) {
            if (current.data == data) return i;
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
