class Tree {
  constructor(rank, refs, number, code) {
    this.rank = rank;
    this.number = number || 1;
    this.code = code || "|";
    this.code += this.rank + "->" + this.number + "|";
    if (this.rank > 1) {
      this.next = new Array(refs);
      for (let k = 0; k < this.next.length; k++) {
        this.next[k] = new Tree(this.rank - 1, refs, k + 1, this.code);
      }
    }
  }
  toString() {
    let t = "Обьект: ранг-" + this.rank + ",номер-" + this.number;
    t += ",код-" + this.code + "<br>";
    if (this.rank > 1) {
      for (let k = 0; k < this.next.length; k++) {
        t += this.next[k].toString();
      }
    }
    return t;
  }
}


let myTree = new Tree(4, 2);
document.write(myTree);