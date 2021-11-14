// remove duplcates from an unsorted linked list
// solve if a temporary buffer is not allowed
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
const removeDups = (linkedNodes) => {
  let table = new Map()
  let previous = null

  while(linkedNodes !== null){
    if(table.get(linkedNodes.data)){
      previous.next = linkedNodes.next
    }else{
      table.add(linkedNodes.data)
      previous = linkedNodes
    }
    linkedNodes = linkedNodes.next
  }
}

