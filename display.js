// iterating 

// for (var i=1; i < 6; i++){
//     console.log(i);
// }

// var i = 1;
// while(i < 6){
//     console.log(i);
//     i++;
// }

// var runner = this.head;
// while(runner != null){
//     runner = runner.next;

// }

// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    display(){
        var runner = this.head;
        var str = "";
        while(runner != null){
            str = str+ runner.val + ' ';
            runner = runner.next;
    }
    return str;
}