function f(text,number) {
    this.text = text
    this.number = number
    
}

let A = {}
let B = {show:function (){
    for (let s in this){
        document.write(s+":"+this[s]+"<br>")
    }
    }}

let C={}
C.method = f

f("функция",100)
f.call(A,"Обьект A",200)
f.apply(B,["Обьект B",300])
C.method("обьект C",400)

document.write(text+"|"+number+"<br>")
document.write(A.text+"|"+A.number+"<br>")
document.write(B.text+"|"+B.number+"<br>")
document.write(C.text+"|"+C.number+"<br>")

document.write(("f" in A)+"<br>")
document.write(("f" in B)+"<br>")
document.write(("f" in C)+"<br>")

document.write("<b>Обьект B:</b><br>")
B.show()
document.write("<b>Обьект A:</b><br>")
B.show.call(A)
document.write("<b>Обьект C:</b><br>")
B["show"].call(C)
