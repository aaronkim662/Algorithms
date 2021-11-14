class LinkedNode {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}

let node1 = new LinkedNode(2)
let node2 = new LinkedNode(3)
node1.next = node2

let list = new LinkedList(node1)

console.log(list)
console.log(node1)
console.log(list.head.next.data)

