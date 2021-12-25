function MyObject(name,number) {
    this.name=name
    this.number=number
    this.show  = function () {
        
        for(let s in this){
            if(s!=="show"){
                document.write(s+"->"+this[s]+"|")
            }
        }
        document.write("<br>")
    }
}


let A = new MyObject("Обьект A",100)
let B = new MyObject("Обьект B",200)

document.write("<b>Свойства созданных обьектов:</b><br>")
A.show()
B.show()

MyObject.prototype.color="прозрачный"

document.write("<b>После добавления совйства:</b><br>")

A.show()
B.show()

A.color = "белый"
delete MyObject.prototype.color
document.write("<b>После удаления свойства:</b><br>")

A.show()
B.show()

document.write("<b>Проверка прототипа обьекта:</b><br>")
let txt = "Object.getPrototypeOf(A) ==MyObject.prototype"
document.write(txt +"->"+ eval(txt))
