let  txt='"name" in Math'

document.write(txt+" -> "+eval(txt)+"<br>")

let A = {color:"красный"}

let B = {}

B.number= 100
showAll()

Object.prototype.name="обьект А"
document.write(txt+" -> "+eval(txt)+"<br>")
showAll()

B.name="обьект B"

document.write("Math.name->"+Math.name+"<br>")
showAll()

delete Object.prototype.name
document.write(txt+"->"+eval(txt)+"<br>")
showAll()


function show(obj) {
    for(let s in obj){
        document.write(s+"->"+obj[s]+"|")
    }
    document.write("<br>")
}



function showAll() {
    document.write("Обьект A:")
    show(A)
    document.write("Обьект B:")
    show(B)
    document.write("<br>")
}