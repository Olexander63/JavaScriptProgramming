function MyObj() {
    this.number = 0
}

let A = new MyObj
let F  =A.constructor
let  B=  new  F()
document.write("Свойство B.number = "+ B.number+"<br>")
A={}

F= A.constructor

document.write("F ==Object->"+(F===Object)+"<br>")

A = new  function () {
    this.name = "Обьект"
}()

F=A.constructor

B= new F()

document.write("Свойство B.name="+B.name)